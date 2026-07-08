import { Youtube, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const YOUTUBE_CHANNEL_URL = "https://youtube.com";
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";

export function Watch() {
  return (
    <section id="watch" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Youtube className="w-8 h-8 text-[#FF0000]" />
              <h2 className="text-4xl font-serif font-bold text-foreground">Watch on YouTube</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Experience the raw, unedited conversations in high definition. Subscribe to never miss a story.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="gap-2 rounded-full" asChild>
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                View All Episodes
              </a>
            </Button>
            <Button className="gap-2 rounded-full bg-[#FF0000] hover:bg-[#CC0000] text-white" asChild>
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                <Youtube className="w-4 h-4" /> Subscribe
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative aspect-video rounded-xl overflow-hidden shadow-lg border border-border/50 bg-black">
            <iframe 
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            ></iframe>
          </div>
          <div className="space-y-4 flex flex-col justify-between">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex-1">
              <h3 className="font-serif font-bold text-xl mb-6">Latest Episodes</h3>
              <div className="space-y-6">
                {[
                  "Healing is Not Linear: Understanding the Waves of Grief",
                  "Finding Faith in the Deepest Valley",
                  "Honoring Their Legacy Through Our Lives"
                ].map((title, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="w-28 aspect-video bg-muted rounded-md overflow-hidden relative flex-shrink-0">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <Play className="w-6 h-6 text-white/90" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                        {title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-2">{45 - (i * 5)} mins • {i + 2} days ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button variant="ghost" className="w-full justify-between mt-2" asChild>
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                Watch the Latest Stories on YouTube <span className="text-xl">→</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}