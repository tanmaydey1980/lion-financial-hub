
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";

const products = [
  {
    id: 1,
    title: "Personal Insurance",
    description: "Protection for individuals and families, including health, auto, and home insurance options.",
    icon: "🏡",
    path: "/shop",
  },
  {
    id: 2,
    title: "Business Insurance",
    description: "Comprehensive coverage tailored to your company's specific risks and industry requirements.",
    icon: "🏢",
    path: "/shop",
  },
  {
    id: 3,
    title: "Investment Solutions",
    description: "Optimize your investments through our diverse range of mutual funds and retirement plans.",
    icon: "📈",
    path: "/shop",
  },
  {
    id: 4,
    title: "Pension Plans",
    description: "Secure your future with our range of pension plans designed for long-term financial security.",
    icon: "🔐",
    path: "/shop",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <SectionTitle 
          title="Our Products & Services" 
          subtitle="Discover our comprehensive range of insurance and investment solutions designed for your specific needs."
          center
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <Card key={product.id} className="border-t-4 border-t-icea-gold hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-semibold text-icea-navy mb-2">{product.title}</h3>
                <p className="text-icea-dark-gray">{product.description}</p>
              </CardContent>
              <CardFooter>
                <Link to={product.path} className="w-full">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/shop">
            <Button className="bg-icea-navy text-white">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
