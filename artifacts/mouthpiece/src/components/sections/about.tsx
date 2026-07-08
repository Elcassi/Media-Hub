import Story2 from "@/assets/story2.png";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden border-b border-border/60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-lg">
              <img src={Story2} alt="A quiet moment of reflection" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-[40px] z-[-1]"></div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-foreground text-sm font-medium mb-6 border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Our Purpose
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-8">
              We preserve the stories that often stay hidden behind silence.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              When we speak our pain, we break its hold—and offer a lifeline to others walking the same dark path. 
              The Mouthpiece is not just an interview show; it is a dedicated space where the bereaved can find their voice.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that genuine healing begins with feeling heard, and that no one should have to navigate their hardest days feeling completely alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}