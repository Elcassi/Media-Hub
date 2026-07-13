import { Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SPOTIFY_URL } from "@/lib/socials";

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
            {/* Placeholder — replaced by podcast embed once Spotify show URL is provided */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-card flex flex-col items-center justify-center py-20 gap-6">
              <Music2 className="w-14 h-14 text-[#1DB954]/50" />
              <div className="text-center px-8">
                <p className="font-serif font-semibold text-xl text-foreground mb-2">Listen on Spotify</p>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Our podcast episodes are available on Spotify.
                </p>
                <Button size="lg" className="rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-white px-8 h-14" asChild>
                  <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
                    Open on Spotify
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
