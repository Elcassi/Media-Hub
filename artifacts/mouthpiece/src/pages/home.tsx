import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Mission } from "@/components/sections/mission";
import { FeaturedStories } from "@/components/sections/featured-stories";
import { WhyMatter } from "@/components/sections/why-matter";
import { Scripture } from "@/components/sections/scripture";
import { Watch } from "@/components/sections/watch";
import { Listen } from "@/components/sections/listen";
import { ShareStory } from "@/components/sections/share-story";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col w-full min-h-screen">
        <Hero />
        <About />
        <Mission />
        <FeaturedStories />
        <WhyMatter />
        <Scripture />
        <Watch />
        <Listen />
        <ShareStory />
        <Testimonials />
        <Contact />
      </main>
    </Layout>
  );
}
