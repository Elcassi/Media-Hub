import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateStorySubmission } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  story: z.string().min(10, "Please share a brief summary of your story"),
  preferredContactMethod: z.enum(["email", "phone", "either"]),
});

export function ShareStory() {
  const { toast } = useToast();
  const createStory = useCreateStorySubmission();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      story: "",
      preferredContactMethod: "email",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    createStory.mutate({ data }, {
      onSuccess: () => {
        toast({
          title: "Application Received",
          description: "Thank you for trusting us with your story. We will be in touch soon.",
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
    <section id="share" className="py-24 md:py-32 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Share Your Story</h2>
            <p className="text-lg text-muted-foreground">
              Your voice matters. If you'd like to share your journey of grief and healing on The Mouthpiece, 
              please fill out the application below. This is a safe space.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} />
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jane@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1 (555) 000-0000" {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="preferredContactMethod"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Preferred Contact Method</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-wrap gap-4"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="email" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">Email</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="phone" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">Phone</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="either" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">Either</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="story"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tell Us About Your Story</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Briefly describe your experience and what you'd like to share..." 
                          className="min-h-32 resize-y" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full rounded-full" disabled={createStory.isPending}>
                  {createStory.isPending ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                  Apply to Share Your Story
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}