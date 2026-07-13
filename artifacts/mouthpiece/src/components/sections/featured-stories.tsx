import { Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { YOUTUBE_CHANNEL_URL } from "@/lib/socials";

export function FeaturedStories() {
  return (
    <section id="stories" className="py-24 md:py-32 bg-background border-b border-border/60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Latest Episodes</h2>
            <p className="text-lg text-muted-foreground">Conversations exploring the raw, beautiful reality of survival and hope.</p>
          </div>
          <a href="#watch" className="inline-block text-primary font-medium hover:text-primary/80 transition-colors">
            View All Episodes →
          </a>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl border border-border/50 bg-muted/30 py-24 px-6 gap-6 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Youtube className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-2xl text-foreground mb-3">First episodes coming soon</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We're preparing powerful conversations about grief, healing, faith, and hope. Subscribe on YouTube to be the first to know when we go live.
            </p>
          </div>
          <Button size="lg" className="rounded-full bg-[#FF0000] hover:bg-[#CC0000] text-white px-8 h-12 mt-2" asChild>
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
              <Youtube className="w-4 h-4 mr-2" /> Subscribe on YouTube
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
