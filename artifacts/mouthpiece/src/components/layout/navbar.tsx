import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import Logo from "@assets/Mouth-Piece_1783521164614.png";
import { Menu, X, Share } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent bg-background",
        isScrolled
          ? "border-border/60 py-4 shadow-sm"
          : "border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3 group z-50">
            <img src={Logo} alt="The Mouthpiece" className="h-10 w-auto" />
            <span className="font-serif font-bold text-2xl tracking-tight hidden sm:block group-hover:text-primary transition-colors text-foreground">
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
                      className="text-[15px] font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[15px] font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 h-12" asChild>
            <a href="#share">
               Share Your Story
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-foreground"
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
          <div className="flex flex-col mt-auto">
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