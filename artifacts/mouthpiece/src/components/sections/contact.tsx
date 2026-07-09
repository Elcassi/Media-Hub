import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateContactMessage } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export function Contact() {
  const { toast } = useToast();
  const createMessage = useCreateContactMessage();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    createMessage.mutate({ data }, {
      onSuccess: () => {
        toast({
          title: "Message Sent",
          description: "We've received your message and will get back to you shortly.",
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: "Something went wrong",
          description: "Please check your information and try again.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background border-b border-border/60">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-5/12 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-foreground text-sm font-medium mb-6 border border-secondary/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Have a question, partnership inquiry, or just want to say hello? Send us a message. We try to respond to all inquiries within 48 hours.
          </p>
          <div className="flex items-center gap-4 bg-muted p-4 rounded-2xl border border-border/60">
            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center border border-border/40 shadow-sm">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <a href="mailto:info@mouthpiecemedia.org" className="hover:text-primary transition-colors">info@mouthpiecemedia.org</a>
            </div>
          </div>
        </div>

        <div className="lg:w-7/12 bg-card p-8 md:p-12 rounded-3xl shadow-sm border border-border/60">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-foreground">Name</FormLabel>
                      <FormControl>
                        <Input className="h-12 bg-background border-border/60 focus-visible:ring-primary rounded-xl" placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-foreground">Email</FormLabel>
                      <FormControl>
                        <Input className="h-12 bg-background border-border/60 focus-visible:ring-primary rounded-xl" type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-foreground">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can we help?" 
                        className="min-h-40 resize-y bg-background border-border/60 focus-visible:ring-primary rounded-xl p-4" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full sm:w-auto px-10 h-14 rounded-full font-semibold bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all" disabled={createMessage.isPending}>
                {createMessage.isPending ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}