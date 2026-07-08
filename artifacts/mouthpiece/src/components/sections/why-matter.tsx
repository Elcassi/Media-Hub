export function WhyMatter() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-background">Why These Stories Matter</h2>
          <p className="text-background/70 text-lg">We create a dignified safe space to honor the journey of those who remain.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-primary mb-6 text-xl font-serif">01</div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-background">Healing</h3>
            <p className="text-background/70 leading-relaxed">
              Speaking truth to pain diminishes its power. By validating the complex emotions of grief, we offer a pathway toward genuine emotional restoration.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-primary mb-6 text-xl font-serif">02</div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-background">Hope</h3>
            <p className="text-background/70 leading-relaxed">
              Seeing others survive the unimaginable plants a seed of possibility. We showcase the quiet resilience of the human spirit.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-primary mb-6 text-xl font-serif">03</div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-background">Legacy</h3>
            <p className="text-background/70 leading-relaxed">
              Every loved one deserves to be remembered. We help preserve their memory through the profound impact they left on those who survive them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}