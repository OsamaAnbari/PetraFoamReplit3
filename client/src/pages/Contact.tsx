import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Building, Phone, Printer, Mail, Clock, Mail as MailIcon } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(5, { message: "Please enter a valid phone number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, this would submit to your API
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our products or services? Get in touch with our team today.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <Card>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                            <Input placeholder="john@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 123-4567" type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project or question..." 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-1/2">
            <Card className="h-full">
              <CardContent className="p-8 h-full">
                <h3 className="font-heading font-bold text-2xl text-primary mb-6">Our Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-secondary mr-4 mt-1">
                      <Building className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg">Company Name</h4>
                      <p className="text-gray-700">Jordan Mountains Intermediate Industries co. ltd.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-secondary mr-4 mt-1">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg">Phone</h4>
                      <p className="text-gray-700">+962 (6) 471 1780</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-secondary mr-4 mt-1">
                      <Printer className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg">Fax</h4>
                      <p className="text-gray-700">+962 (6) 471 1708</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-secondary mr-4 mt-1">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg">Email</h4>
                      <p className="text-gray-700">info@petra-foam.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-secondary mr-4 mt-1">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg">Business Hours</h4>
                      <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-heading font-semibold text-lg mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-secondary transition">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-secondary transition">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.12 1.191 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-secondary transition">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-secondary transition">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="font-heading font-bold text-3xl text-primary mb-8 text-center">Our Location</h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217782.0991411789!2d35.84427361899693!3d31.954336711674998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2sAmman%2C%20Jordan!5e0!3m2!1sen!2sus!4v1625124456936!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Call to Action section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">Get Answers to Your Questions</h2>
          <p className="text-lg text-white opacity-90 max-w-3xl mx-auto mb-8">
            Our team of experts is ready to help you with any questions about our products and services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" className="rounded-md">
              <MailIcon className="mr-2 h-5 w-5" />
              Email Us Now
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary rounded-md">
              <Phone className="mr-2 h-5 w-5" />
              Call +962 (6) 471 1780
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
