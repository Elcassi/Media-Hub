import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[92vh] flex items-center"
    >
      {/* Dark cinematic overlay: solid on the left for text legibility, fading toward the subject on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E0820] via-[#0E0820]/80 to-[#0E0820]/10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0820] via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-24">
        <div className="w-full lg:w-[60%] flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Giving the bereaved a voice
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-serif font-bold tracking-tight mb-8 text-white leading-[1.05]">
            Every Story <br />
            <span className="italic font-normal text-secondary">Deserves</span> to Be Heard.
          </h1>
          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-xl leading-relaxed">
            Real people. Real stories. Grief, trauma, survival, and the hope found on the other side.
            The Mouthpiece creates space for healing through honest conversations.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 w-full sm:w-auto text-base" asChild>
              <a href="#stories">
                <Play className="w-5 h-5 mr-2 fill-current" /> Watch Episodes
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 h-14 w-full sm:w-auto text-base" asChild>
              <a href="#share">Share Your Story</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}