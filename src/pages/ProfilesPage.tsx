
import PageHeader from "@/components/layout/PageHeader";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const ProfilesPage = () => {
  return (
    <div>
      <PageHeader 
        title="Company Profiles" 
        subtitle="Explore our financial reports, statements, and branch network"
        backgroundImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
      />
      
      <div className="container py-12">
        <Tabs defaultValue="reports">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8">
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="statements">Statements</TabsTrigger>
            <TabsTrigger value="fact-sheets">Fact Sheets</TabsTrigger>
            <TabsTrigger value="branches">Branches</TabsTrigger>
          </TabsList>
          
          {/* Integrated Reports Section */}
          <TabsContent value="reports" id="integrated-reports">
            <SectionTitle 
              title="Integrated Reports" 
              subtitle="Annual integrated reports providing comprehensive overview of our performance and strategic direction."
            />
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[2023, 2022, 2021].map(year => (
                <Card key={year}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <FileText size={36} className="text-icea-navy" />
                      <span className="text-lg font-medium">{year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Annual Integrated Report {year}</h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive report showcasing our financial performance, sustainability efforts, and strategic vision.
                    </p>
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      <Download size={16} />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Financial Statements Section */}
          <TabsContent value="statements" id="financial-statements">
            <SectionTitle 
              title="Financial Statements" 
              subtitle="Detailed financial statements including quarterly and annual reports."
            />
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { year: 2023, type: "Annual Financial Statement" },
                { year: 2023, type: "Q3 Financial Statement" },
                { year: 2023, type: "Q2 Financial Statement" },
                { year: 2023, type: "Q1 Financial Statement" },
                { year: 2022, type: "Annual Financial Statement" },
                { year: 2022, type: "Q3 Financial Statement" }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <FileText size={36} className="text-icea-navy" />
                      <span className="text-lg font-medium">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.type}</h3>
                    <p className="text-gray-600 mb-4">
                      Financial statement covering the period ending {item.type.includes("Q") ? "September" : "December"} {item.year}.
                    </p>
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      <Download size={16} />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Fund Fact Sheets Section */}
          <TabsContent value="fact-sheets" id="fund-fact-sheets">
            <SectionTitle 
              title="Fund Fact Sheets" 
              subtitle="Detailed information about our various investment funds and their performance."
            />
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                "ICEA Lion Money Market Fund",
                "ICEA Lion Equity Fund",
                "ICEA Lion Bond Fund",
                "ICEA Lion Balanced Fund",
                "ICEA Lion Growth Fund",
                "ICEA Lion Income Fund"
              ].map((fund, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <FileText size={36} className="text-icea-navy" />
                      <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">Updated Monthly</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{fund}</h3>
                    <p className="text-gray-600 mb-4">
                      Current fund performance, investment objectives, risk profile, and asset allocation.
                    </p>
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      <Download size={16} />
                      Download Fact Sheet
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Branch Network Section */}
          <TabsContent value="branches" id="branch-network">
            <SectionTitle 
              title="Our Branch Network" 
              subtitle="Find an ICEA Lion branch near you across East Africa."
            />
            
            <div className="bg-gray-100 rounded-lg overflow-hidden h-[400px] mb-8">
              <div className="bg-gray-300 h-full w-full flex items-center justify-center">
                <p className="text-gray-600">Interactive Map Placeholder</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { city: "Nairobi", address: "ICEA Lion Centre, Riverside Park", phone: "+254 20 123 4567" },
                { city: "Mombasa", address: "Moi Avenue, City Centre", phone: "+254 41 234 5678" },
                { city: "Kisumu", address: "Oginga Odinga Street", phone: "+254 57 345 6789" },
                { city: "Eldoret", address: "Uganda Road", phone: "+254 53 456 7890" },
                { city: "Nakuru", address: "Kenyatta Avenue", phone: "+254 51 567 8901" },
                { city: "Dar es Salaam", address: "Morocco Square, Ali Hassan", phone: "+255 22 678 9012" }
              ].map((branch, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-icea-navy mb-2">{branch.city} Branch</h3>
                    <p className="text-gray-600 mb-1">{branch.address}</p>
                    <p className="text-gray-600 mb-4">{branch.phone}</p>
                    <Link to="/customer-support#find-branch">
                      <Button variant="outline" className="w-full">Get Directions</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilesPage;
