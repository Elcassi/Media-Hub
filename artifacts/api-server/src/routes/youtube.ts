import { Router, type IRouter } from "express";

const router: IRouter = Router();

const CHANNEL_ID = "UCMb34vxeG9wZSZY8_XIewUQ";
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

interface CacheEntry {
  data: YoutubeVideo[];
  fetchedAt: number;
}

interface YoutubeVideo {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  channelTitle: string;
}

let cache: CacheEntry | null = null;

async function fetchLatestVideos(): Promise<YoutubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    throw new Error("YOUTUBE_API_KEY is not set");
  }

  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("channelId", CHANNEL_ID);
  url.searchParams.set("maxResults", "6");
  url.searchParams.set("order", "date");
  url.searchParams.set("type", "video");
  url.searchParams.set("key", apiKey);

  const response = await fetch(url.toString());
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`YouTube API error ${response.status}: ${body}`);
  }

  const json = (await response.json()) as {
    items?: {
      id: { videoId: string };
      snippet: {
        title: string;
        description: string;
        publishedAt: string;
        channelTitle: string;
        thumbnails: {
          high?: { url: string };
          medium?: { url: string };
          default?: { url: string };
        };
      };
    }[];
  };

  return (json.items ?? []).map((item) => ({
    videoId: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnailUrl:
      item.snippet.thumbnails.high?.url ??
      item.snippet.thumbnails.medium?.url ??
      item.snippet.thumbnails.default?.url ??
      "",
    publishedAt: item.snippet.publishedAt,
    channelTitle: item.snippet.channelTitle,
  }));
}

router.get("/youtube/latest", async (req, res): Promise<void> => {
  const now = Date.now();

  if (cache && now - cache.fetchedAt < CACHE_TTL_MS) {
    req.log.debug("Serving YouTube videos from cache");
    res.json(cache.data);
    return;
  }

  try {
    const videos = await fetchLatestVideos();
    cache = { data: videos, fetchedAt: now };
    req.log.info({ count: videos.length }, "Fetched YouTube videos");
    res.json(videos);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch YouTube videos");
    res.status(502).json({ error: "Failed to fetch YouTube videos" });
  }
});

export default router;
