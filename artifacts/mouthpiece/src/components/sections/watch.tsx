import { Youtube, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const YOUTUBE_CHANNEL_URL = "https://youtube.com";
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";

export function Watch() {
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Embed */}
          <div className="lg:col-span-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-border/50 bg-muted">
              <iframe 
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              ></iframe>
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mt-6 mb-2">Finding Faith in the Deepest Valley</h3>
            <p className="text-muted-foreground">A profound conversation about retaining hope when everything else is lost.</p>
          </div>

          {/* Up Next */}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="font-serif font-bold text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span> Up Next
            </h3>
            <div className="space-y-6">
              {[
                { title: "Healing is Not Linear: Understanding the Waves", duration: "45:00", time: "2 days ago" },
                { title: "Honoring Their Legacy Through Our Lives", duration: "38:15", time: "1 week ago" },
                { title: "The Silence of Grief and Finding Your Voice", duration: "52:10", time: "2 weeks ago" }
              ].map((video, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-32 aspect-video bg-muted rounded-xl overflow-hidden relative flex-shrink-0 border border-border/50">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <Play className="w-6 h-6 text-white/90 fill-white/90 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center py-1">
                    <h4 className="font-medium text-[15px] line-clamp-2 text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
                      {video.title}
                    </h4>
                    <p className="text-[13px] text-muted-foreground font-medium">
                      {video.duration} • {video.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full justify-between mt-auto h-14 rounded-xl text-primary hover:text-primary hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all" asChild>
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                Watch more episodes <span className="text-xl">→</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}