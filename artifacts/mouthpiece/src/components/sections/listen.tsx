import { Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SPOTIFY_URL = "https://spotify.com";
const SPOTIFY_SHOW_URL = "https://open.spotify.com/embed/show/6n2vB2Jv2R4d5u8w0w1w8v?utm_source=generator"; // Placeholder podcast

export function Listen() {
  return (
    <section id="listen" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Music2 className="w-8 h-8 text-[#1DB954]" />
              <h2 className="text-4xl font-serif font-bold text-foreground">Listen on Spotify</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Take the stories with you. A quiet space to listen and reflect, wherever you are.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="gap-2 rounded-full" asChild>
              <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
                Listen on Spotify
              </a>
            </Button>
            <Button className="gap-2 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-white" asChild>
              <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
                <Music2 className="w-4 h-4" /> Follow
              </a>
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-card">
          <iframe 
            src={SPOTIFY_SHOW_URL} 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            className="w-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}