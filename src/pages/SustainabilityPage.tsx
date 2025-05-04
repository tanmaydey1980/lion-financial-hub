
import PageHeader from "@/components/layout/PageHeader";
import { SectionTitle } from "@/components/ui/section-title";

const SustainabilityPage = () => {
  return (
    <div>
      <PageHeader 
        title="Sustainability" 
        subtitle="Our commitment to environmental, social, and governance initiatives"
        backgroundImage="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
      />
      
      <div className="container py-12">
        <SectionTitle 
          title="Our Sustainability Journey" 
          subtitle="At ICEA Lion, sustainability is integrated into our core business strategies and operations"
        />
        
        <div className="mt-8 space-y-12">
          <p>Placeholder for Sustainability content</p>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPage;
