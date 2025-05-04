
import PageHeader from "@/components/layout/PageHeader";
import { SectionTitle } from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NewsroomPage = () => {
  return (
    <div>
      <PageHeader 
        title="Newsroom" 
        subtitle="Latest news, press releases and events from ICEA Lion"
        backgroundImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
      />
      
      <div className="container py-12">
        <Tabs defaultValue="press">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
            <TabsTrigger value="press">Press Releases</TabsTrigger>
            <TabsTrigger value="events">Events Calendar</TabsTrigger>
          </TabsList>
          
          <TabsContent value="press" id="press-releases">
            <SectionTitle 
              title="Press Releases" 
              subtitle="Official announcements from ICEA Lion Group"
            />
            
            <div className="mt-8 space-y-12">
              <p>Placeholder for Press Releases content</p>
            </div>
          </TabsContent>
          
          <TabsContent value="events" id="events-calendar">
            <SectionTitle 
              title="Events Calendar" 
              subtitle="Upcoming events, webinars, and activities"
            />
            
            <div className="mt-8 space-y-12">
              <p>Placeholder for Events Calendar content</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NewsroomPage;
