import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="text-center max-w-md">
          <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">404</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 h-12" asChild>
            <Link href="/">← Back to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
