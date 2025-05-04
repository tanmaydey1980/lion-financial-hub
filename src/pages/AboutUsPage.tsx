
import PageHeader from "@/components/layout/PageHeader";
import { SectionTitle } from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutUsPage = () => {
  return (
    <div>
      <PageHeader 
        title="About Us" 
        subtitle="Our heritage, values, and achievements"
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
      />
      
      <div className="container py-12">
        <Tabs defaultValue="heritage">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
            <TabsTrigger value="heritage">Our Heritage</TabsTrigger>
            <TabsTrigger value="achievements">Our Achievements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="heritage" id="heritage">
            <SectionTitle 
              title="Our Heritage" 
              subtitle="A legacy of excellence in financial services"
            />
            
            <div className="mt-8 space-y-12">
              <p>Placeholder for Heritage content</p>
            </div>
          </TabsContent>
          
          <TabsContent value="achievements" id="achievements">
            <SectionTitle 
              title="Our Achievements" 
              subtitle="Recognition and milestones in our journey"
            />
            
            <div className="mt-8 space-y-12">
              <p>Placeholder for Achievements content</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AboutUsPage;
