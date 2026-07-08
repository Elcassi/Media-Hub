import { Layout } from "@/components/layout/layout";

export default function Terms() {
  return (
    <Layout>
      <main className="flex flex-col w-full min-h-screen pt-32 pb-24 px-6 md:px-12 bg-background">
        <div className="max-w-3xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-foreground text-sm font-medium mb-6 border border-secondary/20">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight">Terms of Use</h1>
          
          <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none">
            <p className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-12">Last updated: April 16, 2025</p>
            
            <h2 className="text-2xl mt-12 mb-6">1. Acceptance of Terms</h2>
            <p className="mb-6 leading-relaxed">
              By accessing and using The Mouthpiece website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <div className="w-12 h-px bg-border my-8"></div>

            <h2 className="text-2xl mt-12 mb-6">2. Story Submissions</h2>
            <p className="mb-6 leading-relaxed">
              By submitting your story to The Mouthpiece, you grant us permission to review and consider your submission for feature on our platform. Submission does not guarantee that your story will be published or recorded. If selected, a formal agreement regarding the recording and sharing of your story will be provided prior to any publication.
            </p>

            <div className="w-12 h-px bg-border my-8"></div>

            <h2 className="text-2xl mt-12 mb-6">3. Intellectual Property</h2>
            <p className="mb-6 leading-relaxed">
              The platform and its original content, features, and functionality are owned by The Mouthpiece and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            
            <div className="w-12 h-px bg-border my-8"></div>

            <h2 className="text-2xl mt-12 mb-6">4. Disclaimer</h2>
            <p className="mb-6 leading-relaxed">
              The Mouthpiece is a storytelling platform and is not a substitute for professional mental health care, counseling, or therapy. The stories shared on this platform are personal experiences and should not be taken as medical or professional advice.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}