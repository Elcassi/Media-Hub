import ScriptureImage from "@/assets/scripture.png";
import { Quote } from "lucide-react";

export function Scripture() {
  return (
    <section className="relative py-32 overflow-hidden bg-background border-b border-border/60">
      <div className="absolute inset-0 z-0 flex justify-end opacity-40 mix-blend-multiply">
        <div className="w-full lg:w-1/2 h-full">
           <img src={ScriptureImage} alt="Soft flowing water light" className="w-full h-full object-cover object-left" />
           <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
      </div>
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <Quote className="w-12 h-12 text-primary/20 mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight text-foreground italic mb-10">
            "And there shall be no more night there; and they need no candle, neither light of the sun; for the Lord God giveth them light: and they shall reign for ever and ever."
          </h2>
          <div className="flex items-center gap-6">
            <div className="w-12 h-1 bg-secondary rounded-full"></div>
            <div>
              <p className="text-foreground font-bold tracking-widest uppercase text-sm mb-1">Revelation 22:1-5</p>
              <p className="text-muted-foreground text-sm">A symbol of ultimate healing and everlasting hope.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}