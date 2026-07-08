import { Button } from "@/components/ui/button";
import { Play, Headphones, ArrowDown } from "lucide-react";
import HeroImage from "@/assets/hero.png";

const YOUTUBE_CHANNEL_URL = "https://youtube.com";
const SPOTIFY_URL = "https://spotify.com";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={HeroImage} alt="Cinematic Hero Reflection" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-6 max-w-5xl mx-auto drop-shadow-sm">
          Every Story Deserves to Be Heard.
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow">
          Real people. Real stories. Grief, trauma, survival, and the hope found on the other side. 
          The Mouthpiece gives the bereaved a voice and creates space for healing through honest conversations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="w-full sm:w-auto text-base rounded-full px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="#stories">Watch Stories</a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-base rounded-full px-8 h-14 border-white text-white hover:bg-white/10" asChild>
            <a href="#share">Share Your Story</a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
            <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
              <Play className="w-5 h-5" />
            </div>
            <span className="font-medium tracking-wide text-sm">Watch on YouTube</span>
          </a>
          <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
            <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
              <Headphones className="w-5 h-5" />
            </div>
            <span className="font-medium tracking-wide text-sm">Listen on Spotify</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
}