
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  User
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Monitor scroll to add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigation = [
    {
      name: "Profiles",
      path: "/profiles",
      submenu: [
        { name: "Integrated Reports", path: "/profiles#integrated-reports" },
        { name: "Financial Statements", path: "/profiles#financial-statements" },
        { name: "Fund Fact Sheets", path: "/profiles#fund-fact-sheets" },
        { name: "Branch Network", path: "/profiles#branch-network" },
      ],
    },
    {
      name: "Work With Us",
      path: "/work-with-us",
      submenu: [
        { name: "Career", path: "/work-with-us#career" },
        { name: "Whistleblowing", path: "/work-with-us#whistleblowing" },
        { name: "Agency Force", path: "/work-with-us#agency-force" },
        { name: "Academy", path: "/work-with-us#academy" },
      ],
    },
    {
      name: "Sustainability",
      path: "/sustainability",
      submenu: [],
    },
    {
      name: "Lion's Perspective",
      path: "/lions-perspective",
      submenu: [
        { name: "Blog", path: "/lions-perspective#blog" },
        { name: "Webinars", path: "/lions-perspective#webinars" },
      ],
    },
    {
      name: "Newsroom",
      path: "/newsroom",
      submenu: [
        { name: "Press Releases", path: "/newsroom#press-releases" },
        { name: "Events Calendar", path: "/newsroom#events-calendar" },
      ],
    },
    {
      name: "Customer Support",
      path: "/customer-support",
      submenu: [
        { name: "Contact Us", path: "/customer-support#contact-us" },
        { name: "Find a Branch", path: "/customer-support#find-branch" },
        { name: "FAQs", path: "/customer-support#faqs" },
        { name: "Privacy Policy", path: "/customer-support#privacy-policy" },
        { name: "Data Protection", path: "/customer-support#data-protection" },
      ],
    },
    {
      name: "About Us",
      path: "/about-us",
      submenu: [
        { name: "Our Heritage", path: "/about-us#heritage" },
        { name: "Our Achievements", path: "/about-us#achievements" },
      ],
    },
    {
      name: "Shop",
      path: "/shop",
      submenu: [],
    },
  ];

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header
      className={`sticky top-0 z-50 bg-white ${
        isScrolled ? "shadow-md" : ""
      } transition-shadow duration-300`}
    >
      <div className="container">
        {/* Top section with logo, search and login button */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-icea-navy">
              ICEA <span className="text-icea-gold">LION</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-icea-navy">
              <Search size={20} />
            </Button>
            <div className="border-r h-6 mx-2 border-gray-200"></div>
            <Link to="/file-claim">
              <Button variant="outline" className="border-icea-navy text-icea-navy">
                File a Claim
              </Button>
            </Link>
            <Link to="/client-login">
              <Button className="bg-icea-navy text-white flex items-center gap-2">
                <User size={18} />
                Client Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-icea-navy"
            onClick={toggleMobileMenu}
          >
            <Menu size={24} />
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block border-t">
          <ul className="flex justify-between py-4">
            {navigation.map((item) => (
              <li
                key={item.name}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative"
              >
                <Link
                  to={item.path}
                  className="flex items-center gap-1 text-icea-navy hover:text-icea-blue transition-colors px-3 py-2"
                >
                  <span>{item.name}</span>
                  {item.submenu.length > 0 && <ChevronDown size={16} />}
                </Link>
                
                {/* Dropdown menu */}
                {item.submenu.length > 0 && hoveredItem === item.name && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md min-w-48 py-2 z-50 animate-fade-in">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        to={subitem.path}
                        className="block px-4 py-2 text-sm text-icea-navy hover:bg-icea-gray hover:text-icea-blue transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="container">
            <div className="flex items-center justify-between py-4">
              <Link to="/" className="flex items-center">
                <div className="text-2xl font-bold text-icea-navy">
                  ICEA <span className="text-icea-gold">LION</span>
                </div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-icea-navy"
                onClick={toggleMobileMenu}
              >
                <X size={24} />
              </Button>
            </div>
            
            <nav className="py-6">
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.name} className="border-b border-gray-100 pb-2">
                    <Link
                      to={item.path}
                      className="block text-lg font-medium text-icea-navy py-2"
                    >
                      {item.name}
                    </Link>
                    
                    {item.submenu.length > 0 && (
                      <ul className="pl-4 space-y-2 mt-1">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.name}>
                            <Link
                              to={subitem.path}
                              className="block text-sm text-icea-dark-gray py-1"
                            >
                              {subitem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                
                <li>
                  <Link to="/file-claim" className="block py-2">
                    <Button variant="outline" className="w-full border-icea-navy text-icea-navy">
                      File a Claim
                    </Button>
                  </Link>
                </li>
                
                <li>
                  <Link to="/client-login" className="block py-2">
                    <Button className="w-full bg-icea-navy text-white flex items-center justify-center gap-2">
                      <User size={18} />
                      Client Login
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
