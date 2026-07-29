import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import HeroImage from "@/assets/hero-portrait.jpg";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Fixed full-page background — stays pinned as sections scroll over it */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0E0820]">
        <img
          src={HeroImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center -scale-x-100 opacity-90"
        />
      </div>

      <Navbar />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
}
