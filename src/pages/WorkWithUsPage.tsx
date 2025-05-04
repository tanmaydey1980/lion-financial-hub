
import PageHeader from "@/components/layout/PageHeader";
import { SectionTitle } from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WorkWithUsPage = () => {
  return (
    <div>
      <PageHeader 
        title="Work With Us" 
        subtitle="Explore career opportunities and join the ICEA Lion family"
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
      />
      
      <div className="container py-12">
        <Tabs defaultValue="career">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8">
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="whistleblowing">Whistleblowing</TabsTrigger>
            <TabsTrigger value="agency">Agency Force</TabsTrigger>
            <TabsTrigger value="academy">Academy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="career" id="career">
            <SectionTitle 
              title="Careers at ICEA Lion" 
              subtitle="Join our team of professionals dedicated to excellence in financial services"
            />
            
            <div className="mt-8 space-y-12">
              <p>Placeholder for Career content</p>
            </div>
          </TabsContent>
          
          <TabsContent value="whistleblowing" id="whistleblowing">
            <SectionTitle 
              title="Whistleblowing Policy" 
              subtitle="Our commitment to ethical business practices and transparency"
            />
            
            <div className="mt-8 space-y-12">
              <p>Placeholder for Whistleblowing content</p>
            </div>
          </TabsContent>
          
          <TabsContent value="agency" id="agency-force">
            <SectionTitle 
              title="Join Our Agency Force" 
              subtitle="Become an ICEA Lion insurance agent and grow your career"
            />
            
            <div className="mt-8 space-y-12">
              <p>Placeholder for Agency Force content</p>
            </div>
          </TabsContent>
          
          <TabsContent value="academy" id="academy">
            <SectionTitle 
              title="ICEA Lion Academy" 
              subtitle="Learning and development opportunities for insurance professionals"
            />
            
            <div className="mt-8 space-y-12">
              <p>Placeholder for Academy content</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WorkWithUsPage;
