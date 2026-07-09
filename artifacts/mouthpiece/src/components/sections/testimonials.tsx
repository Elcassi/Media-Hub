import { MessageCircle } from "lucide-react";

const quotes = [
  {
    quote: "Hearing someone else articulate the exact kind of pain I felt was the first time I breathed properly in months.",
    author: "Sarah J.",
    role: "Listener"
  },
  {
    quote: "The Mouthpiece isn't just an interview show. It's a sanctuary for those of us learning to live after loss.",
    author: "Michael T.",
    role: "Guest"
  },
  {
    quote: "I watched three episodes and finally found the courage to talk about my own grief. Thank you for this.",
    author: "Elena R.",
    role: "Listener"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background border-b border-border/60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Community
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Words from our listeners</h2>
          <p className="text-lg text-muted-foreground">The impact of shared stories ripples further than we can know.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((q, i) => (
            <div key={i} className="bg-card p-8 rounded-3xl border border-border/60 shadow-sm relative group hover:border-primary/30 transition-colors">
              <MessageCircle className="w-8 h-8 text-primary/20 mb-6 group-hover:text-primary/40 transition-colors" />
              <p className="text-lg text-foreground leading-relaxed mb-8 font-serif">"{q.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground font-bold font-serif">
                  {q.author[0]}
                </div>
                <div>
                  <p className="text-foreground font-bold text-sm">{q.author}</p>
                  <p className="text-muted-foreground text-xs">{q.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}