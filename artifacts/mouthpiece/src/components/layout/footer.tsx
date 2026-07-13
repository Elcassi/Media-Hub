import { Link } from "wouter";
import Logo from "@assets/Mouth-Piece_1783521164614.png";
import { ArrowRight } from "lucide-react";
import { FaYoutube, FaSpotify, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { YOUTUBE_CHANNEL_URL, SPOTIFY_URL, INSTAGRAM_URL, TWITTER_URL } from "@/lib/socials";

const socialLinks = [
  { href: YOUTUBE_CHANNEL_URL, icon: FaYoutube, label: "YouTube" },
  { href: SPOTIFY_URL, icon: FaSpotify, label: "Spotify" },
  { href: INSTAGRAM_URL, icon: FaInstagram, label: "Instagram" },
  { href: TWITTER_URL, icon: FaXTwitter, label: "X / Twitter" },
];

export function Footer() {
  return (
    <footer className="dark bg-background pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start pr-8">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <img src={Logo} alt="The Mouthpiece" className="h-10 w-auto" />
                <span className="font-serif font-bold text-2xl tracking-tight text-foreground">
                  The Mouthpiece
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              Giving the bereaved a voice. A safe platform dedicated to stories of grief, healing, faith, and survival.
            </p>
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6 h-12" asChild>
              <a href="#share">Share Your Story</a>
            </Button>
          </div>
          
          {/* Links Col 1 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/#hero" className="text-muted-foreground hover:text-secondary font-medium transition-colors">Home</Link></li>
              <li><Link href="/#about" className="text-muted-foreground hover:text-secondary font-medium transition-colors">About</Link></li>
              <li><Link href="/#stories" className="text-muted-foreground hover:text-secondary font-medium transition-colors">Episodes</Link></li>
              <li><Link href="/#testimonials" className="text-muted-foreground hover:text-secondary font-medium transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">Legal & Connect</h4>
            <ul className="space-y-4">
              <li><Link href="/#contact" className="text-muted-foreground hover:text-secondary font-medium transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-secondary font-medium transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-secondary font-medium transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Social Col */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">Follow Us</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-xl bg-muted hover:bg-muted/70 transition-colors border border-transparent hover:border-secondary/30">
              <div className="flex items-center gap-3">
                <FaYoutube className="w-5 h-5 text-secondary" />
                <span className="font-medium text-foreground text-sm">Subscribe on YouTube</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-medium">
          <p>© {new Date().getFullYear()} The Mouthpiece. All rights reserved.</p>
          <p className="flex items-center gap-1">
             Giving the bereaved a voice <span className="text-secondary">✦</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
