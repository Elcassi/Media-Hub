import { Layout } from "@/components/layout/layout";

export default function Terms() {
  return (
    <Layout>
      <main className="flex flex-col w-full min-h-screen pt-32 pb-24 px-6 md:px-12 bg-background">
        <div className="max-w-3xl mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Terms of Use</h1>
          
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-muted-foreground mb-6">Last updated: April 16, 2025</p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing and using The Mouthpiece website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Story Submissions</h2>
            <p className="text-muted-foreground mb-6">
              By submitting your story to The Mouthpiece, you grant us permission to review and consider your submission for feature on our platform. Submission does not guarantee that your story will be published or recorded. If selected, a formal agreement regarding the recording and sharing of your story will be provided prior to any publication.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">
              The platform and its original content, features, and functionality are owned by The Mouthpiece and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Disclaimer</h2>
            <p className="text-muted-foreground mb-6">
              The Mouthpiece is a storytelling platform and is not a substitute for professional mental health care, counseling, or therapy. The stories shared on this platform are personal experiences and should not be taken as medical or professional advice.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}