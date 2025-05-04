
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-icea-navy text-white pt-16 pb-8">
      <div className="container">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              ICEA <span className="text-icea-gold">LION</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              ICEA Lion Group is a one-stop financial services provider offering innovative products and services in insurance, pensions, investments and trusts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/profiles" className="text-gray-300 hover:text-white">Profiles</Link></li>
              <li><Link to="/newsroom" className="text-gray-300 hover:text-white">Newsroom</Link></li>
              <li><Link to="/sustainability" className="text-gray-300 hover:text-white">Sustainability</Link></li>
              <li><Link to="/lions-perspective" className="text-gray-300 hover:text-white">Lion's Perspective</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/customer-support#contact-us" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link to="/customer-support#faqs" className="text-gray-300 hover:text-white">FAQs</Link></li>
              <li><Link to="/file-claim" className="text-gray-300 hover:text-white">File a Claim</Link></li>
              <li><Link to="/customer-support#find-branch" className="text-gray-300 hover:text-white">Find a Branch</Link></li>
              <li><Link to="/customer-support#privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button variant="secondary" className="bg-icea-gold text-icea-navy">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} ICEA Lion Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
