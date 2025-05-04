
import PageHeader from "@/components/layout/PageHeader";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

// Mock product data
const products = {
  personal: [
    {
      id: 1,
      name: "Auto Insurance",
      description: "Comprehensive coverage for your vehicle with flexible payment options.",
      icon: "🚗",
      price: "From KES 15,000/year",
      features: ["Third-party liability", "Comprehensive coverage", "24/7 roadside assistance"]
    },
    {
      id: 2,
      name: "Health Insurance",
      description: "Quality healthcare coverage for you and your family.",
      icon: "🏥",
      price: "From KES 25,000/year",
      features: ["Outpatient coverage", "Inpatient coverage", "Dental & optical benefits"]
    },
    {
      id: 3,
      name: "Home Insurance",
      description: "Protect your home and valuables against risks.",
      icon: "🏠",
      price: "From KES 10,000/year",
      features: ["Building coverage", "Contents protection", "Liability coverage"]
    },
    {
      id: 4,
      name: "Life Insurance",
      description: "Secure your family's financial future.",
      icon: "🔒",
      price: "From KES 12,000/year",
      features: ["Death benefit", "Terminal illness benefit", "Premium waiver option"]
    },
    {
      id: 5,
      name: "Travel Insurance",
      description: "Peace of mind while you travel domestically or internationally.",
      icon: "✈️",
      price: "From KES 5,000/trip",
      features: ["Medical coverage", "Trip cancellation", "Luggage protection"]
    },
    {
      id: 6,
      name: "Education Plan",
      description: "Save for your children's education with guaranteed returns.",
      icon: "🎓",
      price: "Flexible contributions",
      features: ["Guaranteed education fund", "Flexible premium payment", "Life cover"]
    }
  ],
  business: [
    {
      id: 1,
      name: "General Liability Insurance",
      description: "Protect your business against third-party claims.",
      icon: "🏢",
      price: "Customized quotes",
      features: ["Third-party injury coverage", "Property damage coverage", "Legal defense costs"]
    },
    {
      id: 2,
      name: "Property Insurance",
      description: "Coverage for business property against various risks.",
      icon: "🏗️",
      price: "Customized quotes",
      features: ["Building coverage", "Equipment protection", "Inventory coverage"]
    },
    {
      id: 3,
      name: "Workers' Compensation",
      description: "Coverage for employee injuries and workplace illnesses.",
      icon: "👷",
      price: "Based on payroll",
      features: ["Medical expense coverage", "Wage replacement", "Compliance with regulations"]
    },
    {
      id: 4,
      name: "Professional Liability",
      description: "Protection for professional service providers against claims of negligence.",
      icon: "⚖️",
      price: "Industry-specific rates",
      features: ["Negligence claims", "Defense costs", "Judgments & settlements"]
    }
  ],
  investments: [
    {
      id: 1,
      name: "Money Market Fund",
      description: "Low-risk investment with competitive returns and high liquidity.",
      icon: "💰",
      price: "Min. KES 5,000",
      features: ["High liquidity", "Low risk", "Competitive returns"]
    },
    {
      id: 2,
      name: "Equity Fund",
      description: "Long-term growth through investments in stocks and equity instruments.",
      icon: "📈",
      price: "Min. KES 10,000",
      features: ["Long-term growth potential", "Diversified portfolio", "Professional management"]
    },
    {
      id: 3,
      name: "Balanced Fund",
      description: "Mix of equities and fixed income investments for moderate growth with stability.",
      icon: "⚖️",
      price: "Min. KES 10,000",
      features: ["Balanced risk profile", "Regular income", "Capital appreciation"]
    },
    {
      id: 4,
      name: "Pension Plans",
      description: "Long-term retirement savings with tax advantages.",
      icon: "🏦",
      price: "Flexible contributions",
      features: ["Tax advantages", "Long-term saving", "Retirement income"]
    }
  ]
};

const ShopPage = () => {
  return (
    <div>
      <PageHeader 
        title="Shop" 
        subtitle="Explore our comprehensive range of insurance and investment products"
        backgroundImage="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
      />
      
      <div className="container py-12">
        <Tabs defaultValue="personal">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="investments">Investments</TabsTrigger>
          </TabsList>
          
          {/* Personal Insurance Products */}
          <TabsContent value="personal">
            <SectionTitle 
              title="Personal Insurance Products" 
              subtitle="Tailored protection for individuals and families"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {products.personal.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-semibold text-icea-navy mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-lg font-medium text-icea-navy mb-4">{product.price}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-icea-navy text-white">Get Quote</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Business Insurance Products */}
          <TabsContent value="business">
            <SectionTitle 
              title="Business Insurance Solutions" 
              subtitle="Comprehensive coverage for businesses of all sizes"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {products.business.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-semibold text-icea-navy mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-lg font-medium text-icea-navy mb-4">{product.price}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-icea-navy text-white">Contact Sales</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Investment Products */}
          <TabsContent value="investments">
            <SectionTitle 
              title="Investment Products" 
              subtitle="Grow your wealth with our range of investment solutions"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {products.investments.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-semibold text-icea-navy mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-lg font-medium text-icea-navy mb-4">{product.price}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-icea-navy text-white">Learn More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 bg-icea-gray p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-icea-navy mb-4">Not sure what you need?</h2>
              <p className="text-gray-600 mb-6">
                Our financial advisors are ready to help you find the right insurance and investment solutions for your specific needs.
              </p>
              <div className="flex space-x-4">
                <Link to="/customer-support#contact-us">
                  <Button className="bg-icea-navy text-white">Contact an Advisor</Button>
                </Link>
                <Link to="/customer-support#find-branch">
                  <Button variant="outline">Find a Branch</Button>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-icea-navy mb-4">Need a custom quote?</h2>
              <p className="text-gray-600 mb-6">
                We offer tailored solutions for individuals and businesses. Get a personalized quote today.
              </p>
              <Button className="bg-icea-gold text-icea-navy">Request Custom Quote</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
