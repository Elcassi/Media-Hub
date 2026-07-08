import { Heart, Sun, Bookmark } from "lucide-react";

export function WhyMatter() {
  return (
    <section className="py-24 md:py-32 bg-background border-b border-border/60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-foreground text-sm font-medium mb-6 border border-secondary/20">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Our Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">Why These Stories Matter</h2>
          <p className="text-muted-foreground text-lg">We create a dignified safe space to honor the journey of those who remain.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="bg-card p-8 rounded-3xl border border-border/60 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Healing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Speaking truth to pain diminishes its power. By validating the complex emotions of grief, we offer a pathway toward genuine emotional restoration.
            </p>
          </div>
          <div className="bg-card p-8 rounded-3xl border border-border/60 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Hope</h3>
            <p className="text-muted-foreground leading-relaxed">
              Seeing others survive the unimaginable plants a seed of possibility. We showcase the quiet resilience of the human spirit.
            </p>
          </div>
          <div className="bg-card p-8 rounded-3xl border border-border/60 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Bookmark className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Legacy</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every loved one deserves to be remembered. We help preserve their memory through the profound impact they left on those who survive them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}