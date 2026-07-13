import { Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { YOUTUBE_CHANNEL_URL } from "@/lib/socials";

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

        {/* Channel embed placeholder — replaced by live videos once YouTube API is connected */}
        <div className="flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-muted/40 py-20 gap-6">
          <Youtube className="w-14 h-14 text-muted-foreground/50" />
          <div className="text-center">
            <p className="font-serif font-semibold text-xl text-foreground mb-2">Watch on YouTube</p>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Our latest interviews and episodes are live on the channel.
            </p>
            <Button size="lg" className="rounded-full bg-[#FF0000] hover:bg-[#CC0000] text-white px-8 h-14" asChild>
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 mr-2" /> Open Channel
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
