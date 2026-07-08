import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
}