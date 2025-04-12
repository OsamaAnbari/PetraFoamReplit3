import { useState } from "react";
import { Helmet } from "react-helmet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Printer, Mail, Facebook, Linkedin, Twitter, Instagram, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

// Define form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  // Define form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  // Define mutation
  const mutation = useMutation({
    mutationFn: (values: FormValues) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      form.reset();
      setSubmitted(true);
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
      });
    },
  });

  // Submit handler
  function onSubmit(data: FormValues) {
    mutation.mutate(data);
  }

  return (
    <>
      <Helmet>
        <title>{t('contact.title')} - Petra Foam</title>
        <meta name="description" content={t('contact.subtitle')} />
      </Helmet>

      <div className="bg-white section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-6">{t('contact.title')}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="bg-gray-100 rounded-lg p-8 h-full shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-6 relative after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-primary after:mt-4">
                {t('contact.info.title')}
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {t('contact.info.company')}
                </h3>
                <div className="flex items-start mb-3">
                  <span className="text-primary mr-3 mt-1"><MapPin size={18} /></span>
                  <span className="text-gray-700">{t('contact.info.address')}</span>
                </div>
                <div className="flex items-start mb-3">
                  <span className="text-primary mr-3 mt-1"><Phone size={18} /></span>
                  <span className="text-gray-700">{t('contact.info.tel')}: +962 (6) 471 1780</span>
                </div>
                <div className="flex items-start mb-3">
                  <span className="text-primary mr-3 mt-1"><Printer size={18} /></span>
                  <span className="text-gray-700">{t('contact.info.fax')}: +962 (6) 471 1708</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><Mail size={18} /></span>
                  <a href="mailto:info@petra-foam.com" className="text-gray-700 hover:text-primary transition duration-300">
                    {t('contact.info.email')}: info@petra-foam.com
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Business Hours</h3>
                <div className="flex items-start mb-3">
                  <span className="text-primary mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-700 transition duration-300">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-700 transition duration-300">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-700 transition duration-300">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-700 transition duration-300">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold text-primary mb-6 relative after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-primary after:mt-4">
                  {t('contact.form.title')}
                </h2>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-6 text-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-12 w-12 mx-auto mb-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-lg font-bold mb-2">Thank You for Your Message!</h3>
                    <p className="mb-4">We've received your inquiry and will get back to you shortly.</p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                    >
                      {t('contact.form.submitAnother')}
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t('contact.form.name')}</FormLabel>
                              <FormControl>
                                <Input {...field} />
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
                              <FormLabel>{t('contact.form.email')}</FormLabel>
                              <FormControl>
                                <Input {...field} type="email" />
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
                              <FormLabel>{t('contact.form.phone')}</FormLabel>
                              <FormControl>
                                <Input {...field} type="tel" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t('contact.form.company')}</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.subject')}</FormLabel>
                            <FormControl>
                              <Input {...field} />
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
                            <FormLabel>{t('contact.form.message')}</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                rows={5}
                                className="resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-blue-700"
                        disabled={mutation.isPending}
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                            {t('contact.form.sending')}
                          </>
                        ) : t('contact.form.submit')}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-primary mb-6 relative after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-primary after:mt-4">
              {t('contact.map.title')}
            </h2>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.4598113023386!2d35.9784461!3d31.761109999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQ1JzQwLjAiTiAzNcKwNTgnNDIuNSJF!5e0!3m2!1sen!2sus!4v1623238089745!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Petra Foam Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
