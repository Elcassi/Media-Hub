import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import Logo from "@assets/Mouth-Piece_1783521164614.png";
import { Menu, X, Play, Headphones } from "lucide-react";
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group z-50">
          <img src={Logo} alt="The Mouthpiece" className="h-10 w-auto" />
          <span className="font-serif font-bold text-xl tracking-tight hidden sm:block group-hover:text-primary transition-colors">
            The Mouthpiece
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith("/#") && location === "/" ? (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 pl-6 border-l border-border">
            <Button variant="outline" size="sm" className="gap-2 rounded-full border-primary/20 text-primary hover:bg-primary/5" asChild>
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4" /> Watch
              </a>
            </Button>
            <Button size="sm" className="gap-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
                <Headphones className="w-4 h-4" /> Listen
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                    className="font-serif text-2xl font-medium text-foreground text-left w-full"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-2xl font-medium text-foreground block"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-auto">
            <Button variant="outline" className="w-full justify-center gap-2" asChild>
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4" /> Watch on YouTube
              </a>
            </Button>
            <Button className="w-full justify-center gap-2" asChild>
              <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
                <Headphones className="w-4 h-4" /> Listen on Spotify
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}