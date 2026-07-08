import { Play, Mic2 } from "lucide-react";
import Story1 from "@/assets/story1.png";
import Story2 from "@/assets/story2.png";
import Story3 from "@/assets/story3.png";
import Story4 from "@/assets/story4.png";

const stories = [
  {
    id: 1,
    title: "Finding Light After the Unexpected",
    name: "Eleanor Vance",
    category: "Healing",
    duration: "42:15",
    image: Story1
  },
  {
    id: 2,
    title: "The Weight of What Remains",
    name: "Marcus Thorne",
    category: "Grief",
    duration: "38:20",
    image: Story2
  },
  {
    id: 3,
    title: "Echoes of a Father's Love",
    name: "David Chen",
    category: "Legacy",
    duration: "45:10",
    image: Story3
  },
  {
    id: 4,
    title: "A Sister's Unbroken Bond",
    name: "Maya Rostova",
    category: "Survival",
    duration: "31:45",
    image: Story4
  }
];

export function FeaturedStories() {
  return (
    <section id="stories" className="py-24 md:py-32 bg-background border-b border-border/60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Latest Episodes</h2>
            <p className="text-lg text-muted-foreground">Conversations exploring the raw, beautiful reality of survival and hope.</p>
          </div>
          <a href="#watch" className="inline-block text-primary font-medium hover:text-primary/80 transition-colors">
            View All Episodes →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-2xl bg-muted mb-6 shadow-sm border border-border/40">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-md text-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  {story.duration}
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20 text-secondary-foreground">
                  <Mic2 className="w-3 h-3 text-secondary-foreground" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary-foreground">{story.category}</span>
                <span className="text-muted-foreground/50 text-xs">•</span>
                <span className="text-muted-foreground text-xs font-medium">{story.name}</span>
              </div>
              
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">{story.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}