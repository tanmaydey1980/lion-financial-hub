
import PageHeader from "@/components/layout/PageHeader";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Check } from "lucide-react";

const FileClaim = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend API
    setFormSubmitted(true);
    
    // Reset form after a delay
    setTimeout(() => {
      setFormSubmitted(false);
      // Would also reset form fields here in a real app
    }, 5000);
  };
  
  return (
    <div>
      <PageHeader 
        title="File a Claim" 
        subtitle="Submit your insurance claim quickly and easily"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
      />
      
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="personal">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
              <TabsTrigger value="personal">Personal Claims</TabsTrigger>
              <TabsTrigger value="business">Business Claims</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal">
              <Card>
                <CardContent className="pt-6">
                  {formSubmitted ? (
                    <div className="text-center py-10">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Claim Submitted Successfully</h3>
                      <p className="text-gray-600 mb-6">
                        Your claim has been received. Our claims team will review your submission and contact you shortly.
                      </p>
                      <p className="text-gray-600">
                        Claim Reference: <span className="font-semibold">CL-{Math.floor(100000 + Math.random() * 900000)}</span>
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <SectionTitle 
                        title="Personal Insurance Claim" 
                        subtitle="Please provide the details of your claim below. Our team will process it promptly."
                      />
                      
                      <div className="space-y-6 mt-8">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="policy_number">Policy Number</Label>
                            <Input id="policy_number" required placeholder="e.g., POL-123456" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="claim_type">Type of Claim</Label>
                            <select 
                              id="claim_type" 
                              className="w-full h-10 px-3 rounded-md border border-input bg-background"
                              required
                            >
                              <option value="">Select claim type</option>
                              <option value="auto">Auto Insurance</option>
                              <option value="health">Health Insurance</option>
                              <option value="home">Home Insurance</option>
                              <option value="life">Life Insurance</option>
                              <option value="travel">Travel Insurance</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="fullname">Full Name</Label>
                            <Input id="fullname" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" required />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="incident_date">Date of Incident</Label>
                            <Input id="incident_date" type="date" required />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="description">Claim Description</Label>
                          <Textarea 
                            id="description" 
                            required 
                            placeholder="Please provide details about your claim..." 
                            className="min-h-[120px]"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="documents">Supporting Documents</Label>
                          <Input id="documents" type="file" multiple className="py-2" />
                          <p className="text-sm text-gray-500 mt-1">
                            Upload relevant documents (photos, receipts, police reports, etc.)
                          </p>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="consent" 
                            className="h-4 w-4 mr-2" 
                            required 
                          />
                          <Label htmlFor="consent" className="text-sm">
                            I confirm that all provided information is accurate and complete.
                          </Label>
                        </div>
                        
                        <Button type="submit" className="bg-icea-navy text-white">Submit Claim</Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="business">
              <Card>
                <CardContent className="pt-6">
                  {formSubmitted ? (
                    <div className="text-center py-10">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Claim Submitted Successfully</h3>
                      <p className="text-gray-600 mb-6">
                        Your business claim has been received. Our commercial claims team will review your submission and contact you shortly.
                      </p>
                      <p className="text-gray-600">
                        Claim Reference: <span className="font-semibold">BIZ-{Math.floor(100000 + Math.random() * 900000)}</span>
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <SectionTitle 
                        title="Business Insurance Claim" 
                        subtitle="Please provide the details of your business insurance claim below."
                      />
                      
                      <div className="space-y-6 mt-8">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="business_policy">Policy Number</Label>
                            <Input id="business_policy" required placeholder="e.g., BIZ-123456" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="business_claim_type">Type of Claim</Label>
                            <select 
                              id="business_claim_type" 
                              className="w-full h-10 px-3 rounded-md border border-input bg-background"
                              required
                            >
                              <option value="">Select claim type</option>
                              <option value="property">Property Damage</option>
                              <option value="liability">General Liability</option>
                              <option value="workers_comp">Workers' Compensation</option>
                              <option value="business_interruption">Business Interruption</option>
                              <option value="professional_liability">Professional Liability</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="company_name">Company Name</Label>
                            <Input id="company_name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="business_contact">Contact Person</Label>
                            <Input id="business_contact" required />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="business_email">Email Address</Label>
                            <Input id="business_email" type="email" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="business_phone">Phone Number</Label>
                            <Input id="business_phone" required />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="business_incident_date">Date of Incident</Label>
                            <Input id="business_incident_date" type="date" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="business_incident_location">Incident Location</Label>
                            <Input id="business_incident_location" required />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="business_description">Claim Description</Label>
                          <Textarea 
                            id="business_description" 
                            required 
                            placeholder="Please provide detailed information about the incident and resulting damages or losses..." 
                            className="min-h-[120px]"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="business_documents">Supporting Documents</Label>
                          <Input id="business_documents" type="file" multiple className="py-2" />
                          <p className="text-sm text-gray-500 mt-1">
                            Upload relevant documents (photos, invoices, incident reports, etc.)
                          </p>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="business_consent" 
                            className="h-4 w-4 mr-2" 
                            required 
                          />
                          <Label htmlFor="business_consent" className="text-sm">
                            I confirm that I am authorized to file this claim on behalf of the business and that all provided information is accurate and complete.
                          </Label>
                        </div>
                        
                        <Button type="submit" className="bg-icea-navy text-white">Submit Business Claim</Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-10 bg-icea-gray p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Need assistance?</h3>
            <p className="mb-4">
              If you need help completing your claim or have any questions, our customer support team is ready to assist you.
            </p>
            <div className="flex flex-wrap gap-4">
              <div>
                <div className="text-sm font-medium mb-1">Call us at:</div>
                <div className="text-icea-navy font-medium">+254 20 123 4567</div>
              </div>
              <div className="border-r border-gray-300"></div>
              <div>
                <div className="text-sm font-medium mb-1">Email us at:</div>
                <div className="text-icea-navy font-medium">claims@icealion.com</div>
              </div>
              <div className="border-r border-gray-300"></div>
              <div>
                <div className="text-sm font-medium mb-1">Visit any branch:</div>
                <div className="text-icea-navy font-medium">Find a branch near you</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileClaim;
