const quotes = [
  {
    quote: "Hearing someone else articulate the exact kind of pain I felt was the first time I breathed properly in months.",
    author: "Sarah J."
  },
  {
    quote: "The Mouthpiece isn't just an interview show. It's a sanctuary for those of us learning to live after loss.",
    author: "Michael T."
  },
  {
    quote: "I watched three episodes and finally found the courage to talk about my own grief. Thank you for this.",
    author: "Elena R."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-16">Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((q, i) => (
            <div key={i} className="bg-muted/30 p-8 rounded-2xl border border-border/50 flex flex-col justify-between">
              <p className="text-lg text-foreground italic mb-8">"{q.quote}"</p>
              <p className="text-muted-foreground font-medium">— {q.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}