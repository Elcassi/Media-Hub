import { Link } from "wouter";
import Logo from "@assets/Mouth-Piece_1783521164614.png";
import { Youtube, Instagram, Facebook, Twitter, Linkedin, Music2 } from "lucide-react";

const YOUTUBE_CHANNEL_URL = "https://youtube.com";
const SPOTIFY_URL = "https://spotify.com";
const INSTAGRAM_URL = "#";
const FACEBOOK_URL = "#";
const TWITTER_URL = "#";
const TIKTOK_URL = "#";
const LINKEDIN_URL = "#";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24 border-t border-border/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-16">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="bg-background rounded-full p-2">
                  <img src={Logo} alt="The Mouthpiece" className="h-10 w-auto" />
                </div>
                <span className="font-serif font-bold text-2xl tracking-tight text-background">
                  The Mouthpiece
                </span>
              </div>
            </Link>
            <p className="text-muted/80 max-w-sm text-lg font-serif italic">
              "Giving the Bereaved a Voice."
            </p>
            <p className="text-muted/60 max-w-sm leading-relaxed">
              A platform dedicated to stories of grief, healing, faith, and hope. We believe every story shared brings healing.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-medium">Explore</h4>
            <ul className="space-y-4 text-muted/70">
              <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/#stories" className="hover:text-primary transition-colors">Featured Stories</Link></li>
              <li><Link href="/#share" className="hover:text-primary transition-colors">Share Your Story</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-medium">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="bg-background/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer" className="bg-background/10 p-3 rounded-full hover:bg-[#1DB954] hover:text-white transition-all duration-300">
                <Music2 className="w-5 h-5" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="bg-background/10 p-3 rounded-full hover:bg-[#E1306C] hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="bg-background/10 p-3 rounded-full hover:bg-[#4267B2] hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="bg-background/10 p-3 rounded-full hover:bg-[#1DA1F2] hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="bg-background/10 p-3 rounded-full hover:bg-[#0077B5] hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="pt-4 space-y-3">
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="block text-sm text-muted/70 hover:text-primary transition-colors">
                Subscribe on YouTube →
              </a>
              <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer" className="block text-sm text-muted/70 hover:text-primary transition-colors">
                Follow on Spotify →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted/50">
          <p>© {new Date().getFullYear()} The Mouthpiece. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-muted/80 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-muted/80 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}