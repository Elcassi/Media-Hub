import ScriptureImage from "@/assets/scripture.png";

export function Scripture() {
  return (
    <section className="relative py-32 overflow-hidden bg-background border-b border-border/40">
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
        <img src={ScriptureImage} alt="Soft flowing water light" className="w-full h-full object-cover object-center grayscale" />
      </div>
      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif font-medium leading-relaxed text-foreground italic mb-10">
          "And there shall be no more night there; and they need no candle, neither light of the sun; for the Lord God giveth them light: and they shall reign for ever and ever."
        </h2>
        <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Inspired by Revelation 22:1-5</p>
        <p className="text-muted-foreground">A symbol of ultimate healing, pure restoration, and everlasting hope.</p>
      </div>
    </section>
  );
}