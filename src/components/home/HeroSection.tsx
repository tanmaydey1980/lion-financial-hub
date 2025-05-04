
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-icea-navy to-icea-dark-gray">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border-r border-b border-white/10"></div>
          ))}
        </div>
      </div>

      <div className="container relative z-10 py-24 md:py-28 lg:py-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Secure Your Future with ICEA Lion
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Comprehensive insurance and investment solutions for individuals and businesses across East Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button className="bg-icea-gold text-icea-navy hover:bg-opacity-90 py-6 px-8 text-lg rounded-md">
                  Explore Products
                </Button>
              </Link>
              <Link to="/customer-support#contact-us">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-icea-navy py-6 px-8 text-lg rounded-md">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-icea-navy font-semibold text-xl mb-6">Quick Access</h3>
            <div className="space-y-4">
              <Link to="/file-claim" className="flex items-center justify-between p-4 border rounded-md hover:bg-icea-gray transition-colors">
                <span className="font-medium text-icea-navy">File a Claim</span>
                <ArrowRight size={18} className="text-icea-gold" />
              </Link>
              <Link to="/customer-support#find-branch" className="flex items-center justify-between p-4 border rounded-md hover:bg-icea-gray transition-colors">
                <span className="font-medium text-icea-navy">Find a Branch</span>
                <ArrowRight size={18} className="text-icea-gold" />
              </Link>
              <Link to="/client-login" className="flex items-center justify-between p-4 border rounded-md hover:bg-icea-gray transition-colors">
                <span className="font-medium text-icea-navy">Client Login</span>
                <ArrowRight size={18} className="text-icea-gold" />
              </Link>
              <Link to="/customer-support#faqs" className="flex items-center justify-between p-4 border rounded-md hover:bg-icea-gray transition-colors">
                <span className="font-medium text-icea-navy">FAQs</span>
                <ArrowRight size={18} className="text-icea-gold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
