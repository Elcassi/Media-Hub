import { Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SPOTIFY_URL = "https://spotify.com";
const SPOTIFY_SHOW_URL = "https://open.spotify.com/embed/show/6n2vB2Jv2R4d5u8w0w1w8v?utm_source=generator"; // Placeholder podcast

export function Listen() {
  return (
    <section id="listen" className="bg-background pt-12 pb-24 md:pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1DB954]/10 text-[#1DB954] text-sm font-bold tracking-wider uppercase mb-2 w-fit">
              <Music2 className="w-4 h-4" /> Available Anywhere
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Listen on the go
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Take the stories with you. A quiet space to listen and reflect, wherever you are. Available on Spotify, Apple Podcasts, and Google Podcasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-white px-8 h-14" asChild>
                <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
                  Follow on Spotify
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-card transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <iframe 
                src={SPOTIFY_SHOW_URL} 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="w-full border-0 block"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}