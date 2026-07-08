import { Play } from "lucide-react";
import Story1 from "@/assets/story1.png";
import Story2 from "@/assets/story2.png";
import Story3 from "@/assets/story3.png";
import Story4 from "@/assets/story4.png";

const stories = [
  {
    id: 1,
    title: "Finding Light After the Unexpected",
    name: "Eleanor Vance",
    excerpt: "I thought the silence would last forever, but finding the courage to speak became my rescue.",
    duration: "42:15",
    image: Story1
  },
  {
    id: 2,
    title: "The Weight of What Remains",
    name: "Marcus Thorne",
    excerpt: "Grief isn't something you fix. It's something you learn to carry, day by day.",
    duration: "38:20",
    image: Story2
  },
  {
    id: 3,
    title: "Echoes of a Father's Love",
    name: "David Chen",
    excerpt: "He left us too soon, but the love he poured into those twenty years sustains me still.",
    duration: "45:10",
    image: Story3
  },
  {
    id: 4,
    title: "A Sister's Unbroken Bond",
    name: "Maya Rostova",
    excerpt: "Death takes the body, but it cannot touch the connection. She is still with me.",
    duration: "31:45",
    image: Story4
  }
];

export function FeaturedStories() {
  return (
    <section id="stories" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Featured Stories</h2>
            <p className="text-lg text-muted-foreground">Documentary conversations exploring the raw, beautiful reality of survival and hope.</p>
          </div>
          <a href="#watch" className="inline-block text-primary font-medium hover:text-primary/80 transition-colors">
            View All Episodes →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted mb-6">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white">
                    <Play className="w-8 h-8 fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-md">
                  {story.duration}
                </div>
              </div>
              <h4 className="text-primary font-medium text-sm mb-2">{story.name}</h4>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 leading-snug">{story.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{story.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}