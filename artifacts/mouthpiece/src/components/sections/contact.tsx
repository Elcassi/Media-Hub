import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateContactMessage } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

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
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have a question, partnership inquiry, or just want to say hello? Send us a message.
          </p>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>General Inquiries:</strong> hello@themouthpiece.com</p>
            <p><strong>Press/Media:</strong> press@themouthpiece.com</p>
          </div>
        </div>

        <div className="lg:w-2/3 bg-card p-8 md:p-10 rounded-2xl shadow-sm border border-border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can we help?" 
                        className="min-h-32 resize-y" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full sm:w-auto px-8 rounded-full" disabled={createMessage.isPending}>
                {createMessage.isPending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}