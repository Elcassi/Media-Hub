import { useState } from "react";
import { Youtube, Play, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { YOUTUBE_CHANNEL_URL } from "@/lib/socials";
import { useGetYoutubeLatest } from "@workspace/api-client-react";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function Watch() {
  const { data: videos, isLoading, isError } = useGetYoutubeLatest();
  const [activeIndex, setActiveIndex] = useState(0);

  const mainVideo = videos?.[activeIndex];
  const sideVideos = videos?.filter((_, i) => i !== activeIndex) ?? [];

  return (
    <section id="watch" className="bg-background pt-24 pb-12 border-b border-border/60">
      <div className="container mx-auto px-6 md:px-12">
        {/* Subscribe Band */}
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 border border-primary/10">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-3">Subscribe on YouTube</h2>
            <p className="text-muted-foreground">
              Watch our full interviews and exclusive behind-the-scenes content. Join our growing community of listeners.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="rounded-full bg-[#FF0000] hover:bg-[#CC0000] text-white px-8 h-14" asChild>
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 mr-2" /> Subscribe
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-border/80 hover:bg-muted px-8 h-14" asChild>
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                View Channel
              </a>
            </Button>
          </div>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-4 text-muted-foreground">
              <div className="w-10 h-10 rounded-full border-2 border-primary border-t-transparent animate-spin" />
              <p className="text-sm font-medium">Loading latest episodes…</p>
            </div>
          </div>
        )}

        {/* Error state */}
        {isError && (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-muted/40 py-20 gap-6">
            <Youtube className="w-14 h-14 text-muted-foreground/50" />
            <div className="text-center">
              <p className="font-serif font-semibold text-xl text-foreground mb-2">Watch on YouTube</p>
              <p className="text-muted-foreground mb-6 max-w-sm">Our latest interviews are live on the channel.</p>
              <Button size="lg" className="rounded-full bg-[#FF0000] hover:bg-[#CC0000] text-white px-8 h-14" asChild>
                <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 mr-2" /> Open Channel
                </a>
              </Button>
            </div>
          </div>
        )}

        {/* Videos loaded */}
        {!isLoading && !isError && videos && videos.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Embed */}
            <div className="lg:col-span-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-border/50 bg-muted">
                <iframe
                  key={mainVideo?.videoId}
                  src={`https://www.youtube.com/embed/${mainVideo?.videoId}?rel=0`}
                  title={mainVideo?.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mt-6 mb-2 line-clamp-2">
                {mainVideo?.title}
              </h3>
              {mainVideo?.publishedAt && (
                <p className="text-sm text-muted-foreground flex items-center gap-1.5 mb-2">
                  <Calendar className="w-3.5 h-3.5" /> {formatDate(mainVideo.publishedAt)}
                </p>
              )}
              {mainVideo?.description && (
                <p className="text-muted-foreground line-clamp-2">{mainVideo.description}</p>
              )}
            </div>

            {/* Up Next */}
            <div className="lg:col-span-4 flex flex-col">
              <h3 className="font-serif font-bold text-xl mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" /> Up Next
              </h3>
              <div className="space-y-5 flex-1">
                {sideVideos.slice(0, 5).map((video) => (
                  <button
                    key={video.videoId}
                    onClick={() => {
                      const idx = videos.findIndex((v) => v.videoId === video.videoId);
                      setActiveIndex(idx);
                      document.getElementById("watch")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex gap-4 group text-left w-full"
                  >
                    <div className="w-32 aspect-video bg-muted rounded-xl overflow-hidden relative flex-shrink-0 border border-border/50">
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center py-1 min-w-0">
                      <h4 className="font-medium text-[15px] line-clamp-2 text-foreground group-hover:text-primary transition-colors leading-tight mb-1.5">
                        {video.title}
                      </h4>
                      <p className="text-[13px] text-muted-foreground font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {formatDate(video.publishedAt)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              <Button
                variant="ghost"
                className="w-full justify-between mt-6 h-14 rounded-xl text-primary hover:text-primary hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all"
                asChild
              >
                <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                  Watch more episodes <span className="text-xl">→</span>
                </a>
              </Button>
            </div>
          </div>
        )}

        {/* No videos yet */}
        {!isLoading && !isError && videos && videos.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-muted/40 py-20 gap-6">
            <Youtube className="w-14 h-14 text-muted-foreground/50" />
            <div className="text-center">
              <p className="font-serif font-semibold text-xl text-foreground mb-2">Coming soon</p>
              <p className="text-muted-foreground mb-6 max-w-sm">First episodes dropping soon. Subscribe to be notified.</p>
              <Button size="lg" className="rounded-full bg-[#FF0000] hover:bg-[#CC0000] text-white px-8 h-14" asChild>
                <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 mr-2" /> Subscribe
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
