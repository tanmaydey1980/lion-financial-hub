
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-icea-navy to-icea-dark-gray text-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Financial Future?</h2>
            <p className="text-lg text-gray-300 mb-6">
              Our experienced team is ready to help you find the right insurance and investment solutions for your specific needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button className="bg-icea-gold text-icea-navy hover:bg-opacity-90">
                  Explore Products
                </Button>
              </Link>
              <Link to="/customer-support#contact-us">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-icea-navy">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/5 border border-white/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Why Choose ICEA Lion?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-icea-gold h-6 w-6 rounded-full flex items-center justify-center text-icea-navy mr-3 mt-0.5">✓</div>
                  <p>Decades of trusted expertise in East Africa</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-icea-gold h-6 w-6 rounded-full flex items-center justify-center text-icea-navy mr-3 mt-0.5">✓</div>
                  <p>Comprehensive range of financial products</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-icea-gold h-6 w-6 rounded-full flex items-center justify-center text-icea-navy mr-3 mt-0.5">✓</div>
                  <p>Award-winning customer service</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-icea-gold h-6 w-6 rounded-full flex items-center justify-center text-icea-navy mr-3 mt-0.5">✓</div>
                  <p>Innovative digital solutions</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-icea-gold h-6 w-6 rounded-full flex items-center justify-center text-icea-navy mr-3 mt-0.5">✓</div>
                  <p>Strong financial stability and security</p>
                </li>
              </ul>
            </div>
            <div className="hidden md:block absolute -bottom-4 -right-4 bg-icea-gold w-32 h-32 rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
