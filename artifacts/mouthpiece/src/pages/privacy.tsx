import { Layout } from "@/components/layout/layout";

export default function Privacy() {
  return (
    <Layout>
      <main className="flex flex-col w-full min-h-screen pt-32 pb-24 px-6 md:px-12 bg-background">
        <div className="max-w-3xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-foreground text-sm font-medium mb-6 border border-secondary/20">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight">Privacy Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-li:text-muted-foreground max-w-none">
            <p className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-12">Last updated: April 16, 2025</p>
            
            <h2 className="text-2xl mt-12 mb-6">1. Introduction</h2>
            <p className="mb-6 leading-relaxed">
              The Mouthpiece ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <div className="w-12 h-px bg-border my-8"></div>

            <h2 className="text-2xl mt-12 mb-6">2. The Data We Collect About You</h2>
            <p className="mb-4 leading-relaxed">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li><strong className="text-foreground">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong className="text-foreground">Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong className="text-foreground">Story Data</strong> includes any personal experiences, stories, or information you choose to share with us through our submission forms.</li>
            </ul>

            <div className="w-12 h-px bg-border my-8"></div>

            <h2 className="text-2xl mt-12 mb-6">3. How We Use Your Personal Data</h2>
            <p className="mb-6 leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              Where we need to perform the contract we are about to enter into or have entered into with you (such as reviewing your story submission).
              Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
            </p>
            
            <div className="w-12 h-px bg-border my-8"></div>

            <h2 className="text-2xl mt-12 mb-6">4. Data Security</h2>
            <p className="mb-6 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}