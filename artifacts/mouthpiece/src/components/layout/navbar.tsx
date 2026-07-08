import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import Logo from "@assets/Mouth-Piece_1783521164614.png";
import { Menu, X, Youtube, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const YOUTUBE_CHANNEL_URL = "https://youtube.com";
const SPOTIFY_URL = "https://spotify.com";

const navLinks = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Stories", href: "/#stories" },
  { name: "Watch", href: "/#watch" },
  { name: "Listen", href: "/#listen" },
  { name: "Share Your Story", href: "/#share" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#") && location === "/") {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isHome = location === "/";
  const overlayHero = isHome && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        overlayHero
          ? "bg-transparent border-transparent py-6"
          : "bg-background border-border/60 py-4 shadow-sm"
      )}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3 group z-50">
            <img src={Logo} alt="The Mouthpiece" className="h-10 w-auto" />
            <span
              className={cn(
                "font-serif font-bold text-2xl tracking-tight hidden sm:block transition-colors",
                overlayHero ? "text-white group-hover:text-secondary" : "text-foreground group-hover:text-primary"
              )}
            >
              The Mouthpiece
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/#") && location === "/" ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        "text-[15px] font-medium transition-colors",
                        overlayHero ? "text-white/85 hover:text-white" : "text-foreground/80 hover:text-primary"
                      )}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "text-[15px] font-medium transition-colors",
                        overlayHero ? "text-white/85 hover:text-white" : "text-foreground/80 hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch on YouTube"
            className={cn(
              "w-10 h-10 rounded-full border flex items-center justify-center transition-all",
              overlayHero
                ? "border-white/30 text-white hover:bg-white hover:text-[#0E0820]"
                : "border-border text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
            )}
          >
            <Youtube className="w-4 h-4" />
          </a>
          <a
            href={SPOTIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen on Spotify"
            className={cn(
              "w-10 h-10 rounded-full border flex items-center justify-center transition-all",
              overlayHero
                ? "border-white/30 text-white hover:bg-white hover:text-[#0E0820]"
                : "border-border text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
            )}
          >
            <Music2 className="w-4 h-4" />
          </a>
          <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 h-12 ml-1" asChild>
            <a href="#share">
               Share Your Story
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("lg:hidden z-50 p-2", overlayHero ? "text-white" : "text-foreground")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background z-40 flex flex-col pt-24 px-6 pb-6 lg:hidden transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex flex-col gap-6 text-xl mb-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith("/#") && location === "/" ? (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-sans text-xl font-medium text-foreground text-left w-full"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-xl font-medium text-foreground block"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-auto">
            <div className="flex items-center gap-3">
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch on YouTube"
                className="flex-1 h-14 rounded-full border border-border flex items-center justify-center gap-2 text-foreground font-medium"
              >
                <Youtube className="w-5 h-5" /> YouTube
              </a>
              <a
                href={SPOTIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Listen on Spotify"
                className="flex-1 h-14 rounded-full border border-border flex items-center justify-center gap-2 text-foreground font-medium"
              >
                <Music2 className="w-5 h-5" /> Spotify
              </a>
            </div>
            <Button size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-14" asChild>
              <a href="#share" onClick={() => setIsMobileMenuOpen(false)}>
                Share Your Story
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}