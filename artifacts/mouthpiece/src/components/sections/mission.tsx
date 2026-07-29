import Story3 from "@/assets/mission-conversation.png";

export function Mission() {
  return (
    <section id="mission" className="py-24 md:py-32 bg-background border-b border-border/60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:pl-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-foreground text-sm font-medium mb-6 border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              The Mission
            </div>
            <blockquote className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              "Bringing healing, one testimony at a time."
            </blockquote>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Shared experience creates profound connection. By providing a dignified space for honest conversations about grief and survival, we remind each other that no one has to walk through the valley alone.
            </p>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-lg">
              <img src={Story3} alt="A genuine connection" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-secondary/20 rounded-full blur-[40px] z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}