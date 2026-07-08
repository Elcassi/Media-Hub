import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import HeroImage from "@/assets/hero.png";

export function Hero() {
  return (
    <section id="hero" className="relative bg-background pt-32 pb-16 lg:pt-40 lg:pb-32 overflow-hidden border-b border-border/60">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-[55%] flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-foreground text-sm font-medium mb-8 border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Giving the bereaved a voice
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-serif font-bold tracking-tight mb-8 text-foreground leading-[1.05]">
              Every Story <br />
              <span className="text-primary italic font-normal">Deserves</span> to Be Heard.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Real people. Real stories. Grief, trauma, survival, and the hope found on the other side. 
              The Mouthpiece creates space for healing through honest conversations.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 w-full sm:w-auto text-base" asChild>
                <a href="#stories">
                  <Play className="w-5 h-5 mr-2 fill-current" /> Watch Episodes
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-border/80 text-foreground hover:bg-muted px-8 h-14 w-full sm:w-auto text-base" asChild>
                <a href="#share">Share Your Story</a>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-[45%] relative lg:-mr-12">
            <div className="aspect-[4/5] w-full rounded-2xl lg:rounded-l-3xl overflow-hidden relative shadow-xl border border-border/40 z-10 bg-muted">
              <img src={HeroImage} alt="Portrait of resilience" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
            </div>
            {/* Decorative background elements */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] z-0"></div>
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-primary/20 rounded-full blur-[80px] z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}