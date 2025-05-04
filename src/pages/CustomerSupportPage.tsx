
import PageHeader from "@/components/layout/PageHeader";
import { SectionTitle } from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Check, Mail, Phone, MapPin } from "lucide-react";

const CustomerSupportPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <div>
      <PageHeader 
        title="Customer Support" 
        subtitle="We're here to help you with any questions or concerns"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
      />
      
      <div className="container py-12">
        <Tabs defaultValue="contact">
          <TabsList className="w-full max-w-xl mx-auto grid grid-cols-5 mb-8">
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="find-branch">Find Branch</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="data">Data Protection</TabsTrigger>
          </TabsList>
          
          {/* Contact Us Section */}
          <TabsContent value="contact" id="contact-us">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <SectionTitle 
                  title="Get in Touch" 
                  subtitle="We're here to answer any questions you may have about our services"
                />
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 rounded-full p-2 mr-3">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="text-lg font-medium text-green-800">Message Sent Successfully</h3>
                    </div>
                    <p className="text-green-700">
                      Thank you for contacting us. We have received your message and will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        required 
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="bg-icea-navy text-white">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
              
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-icea-navy mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="mr-4 bg-icea-gray p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-icea-navy" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                        <p className="text-gray-600">
                          ICEA Lion Centre, Riverside Park<br />
                          Chiromo Road, Westlands<br />
                          P.O. Box 30190-00100<br />
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4 bg-icea-gray p-3 rounded-full">
                        <Phone className="h-6 w-6 text-icea-navy" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Call Us</h3>
                        <p className="text-gray-600">
                          +254 20 123 4567<br />
                          +254 709 123 000
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4 bg-icea-gray p-3 rounded-full">
                        <Mail className="h-6 w-6 text-icea-navy" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Email Us</h3>
                        <p className="text-gray-600">
                          info@icealion.com<br />
                          customerservice@icealion.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-medium mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday & Holidays:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Find Branch Section */}
          <TabsContent value="find-branch" id="find-branch">
            <SectionTitle 
              title="Find a Branch" 
              subtitle="Locate the nearest ICEA Lion branch in your area"
            />
            
            <div className="mt-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-[400px] mb-8">
                <div className="bg-gray-300 h-full w-full flex items-center justify-center">
                  <p className="text-gray-600">Interactive Map Placeholder</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <p>Placeholder for branch finder content</p>
              </div>
            </div>
          </TabsContent>
          
          {/* FAQs Section */}
          <TabsContent value="faqs" id="faqs">
            <SectionTitle 
              title="Frequently Asked Questions" 
              subtitle="Find answers to common questions about our services"
            />
            
            <div className="mt-8 max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I file an insurance claim?</AccordionTrigger>
                  <AccordionContent>
                    You can file a claim through our online portal, by calling our claims hotline, or by visiting any of our branch offices. The process requires you to provide your policy details, information about the incident, and any supporting documentation.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>What insurance products do you offer?</AccordionTrigger>
                  <AccordionContent>
                    ICEA Lion offers a comprehensive range of insurance products including life insurance, health insurance, general insurance (auto, home, travel), and business insurance solutions. We also provide investment and retirement planning services.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I make premium payments?</AccordionTrigger>
                  <AccordionContent>
                    Premium payments can be made through various channels including mobile money transfer, bank transfers, direct debit arrangements, or in person at any of our branches. You can also make payments through our secure online portal.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I manage my policy online?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can manage your policy through our secure client portal. After registering and logging in, you can view policy details, make payments, update personal information, download documents, and track claims.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>What investment options do you provide?</AccordionTrigger>
                  <AccordionContent>
                    We offer various investment options including unit trusts, equity funds, money market funds, balanced funds, and fixed income instruments. Our financial advisors can help you choose investments that align with your financial goals and risk tolerance.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>How do I get a quote for insurance?</AccordionTrigger>
                  <AccordionContent>
                    You can request an insurance quote through our website, by calling our customer service line, or by visiting any of our branches. For personalized quotes, our financial advisors are available for consultation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
          
          {/* Privacy Policy Section */}
          <TabsContent value="privacy" id="privacy-policy">
            <SectionTitle 
              title="Group Privacy Policy" 
              subtitle="How we collect, use, and protect your personal information"
            />
            
            <div className="mt-8 prose max-w-4xl mx-auto">
              <p>Placeholder for privacy policy content</p>
            </div>
          </TabsContent>
          
          {/* Data Protection Section */}
          <TabsContent value="data" id="data-protection">
            <SectionTitle 
              title="Data Protection" 
              subtitle="Our commitment to safeguarding your personal data"
            />
            
            <div className="mt-8 prose max-w-4xl mx-auto">
              <p>Placeholder for data protection content</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CustomerSupportPage;
