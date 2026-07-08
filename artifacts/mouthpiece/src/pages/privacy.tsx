import { Layout } from "@/components/layout/layout";

export default function Privacy() {
  return (
    <Layout>
      <main className="flex flex-col w-full min-h-screen pt-32 pb-24 px-6 md:px-12 bg-background">
        <div className="max-w-3xl mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-muted-foreground mb-6">Last updated: April 16, 2025</p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-6">
              The Mouthpiece ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. The Data We Collect About You</h2>
            <p className="text-muted-foreground mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Story Data</strong> includes any personal experiences, stories, or information you choose to share with us through our submission forms.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. How We Use Your Personal Data</h2>
            <p className="text-muted-foreground mb-6">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              Where we need to perform the contract we are about to enter into or have entered into with you (such as reviewing your story submission).
              Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}