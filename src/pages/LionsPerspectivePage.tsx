
import PageHeader from "@/components/layout/PageHeader";
import { SectionTitle } from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Video } from "lucide-react";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Insurance Basics",
    excerpt: "Learn the fundamental concepts of insurance and how different policies can protect you and your assets.",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "May 2, 2023",
    author: "James Mwangi",
    slug: "understanding-insurance-basics",
    category: "Insurance"
  },
  {
    id: 2,
    title: "Retirement Planning in Your 30s",
    excerpt: "Discover why starting your retirement planning early can significantly impact your financial future.",
    image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "April 18, 2023",
    author: "Sarah Kimani",
    slug: "retirement-planning-30s",
    category: "Financial Planning"
  },
  {
    id: 3,
    title: "Investment Strategies for Uncertain Times",
    excerpt: "Explore effective investment approaches during economic uncertainty and how to position your portfolio.",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 27, 2023",
    author: "David Ochieng",
    slug: "investment-strategies-uncertain-times",
    category: "Investments"
  },
  {
    id: 4,
    title: "The Digital Transformation of Insurance",
    excerpt: "How technology is reshaping the insurance industry and improving customer experiences.",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 15, 2023",
    author: "Jane Waithera",
    slug: "digital-transformation-insurance",
    category: "Technology"
  },
  {
    id: 5,
    title: "Understanding Risk Management for Small Businesses",
    excerpt: "Practical approaches to identify, assess, and mitigate risks for small business owners.",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "February 28, 2023",
    author: "Michael Kamau",
    slug: "risk-management-small-businesses",
    category: "Business"
  },
  {
    id: 6,
    title: "Healthcare Insurance: What You Need to Know",
    excerpt: "A comprehensive guide to understanding healthcare insurance options and making informed choices.",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "February 12, 2023",
    author: "Grace Muthoni",
    slug: "healthcare-insurance-guide",
    category: "Health"
  }
];

// Mock webinar data
const webinars = [
  {
    id: 1,
    title: "Financial Planning for Young Professionals",
    description: "Learn how to build a strong financial foundation early in your career.",
    date: "June 15, 2023",
    duration: "60 minutes",
    thumbnail: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    videoUrl: "#",
    presenter: "Dr. Emily Wanjiku, Financial Advisor"
  },
  {
    id: 2,
    title: "Understanding Insurance for Business Protection",
    description: "Essential insurance coverage every business should consider.",
    date: "May 20, 2023",
    duration: "45 minutes",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    videoUrl: "#",
    presenter: "Robert Kiprono, Business Insurance Expert"
  },
  {
    id: 3,
    title: "Investment Strategies in a Changing Economy",
    description: "Navigate market volatility with strategic investment approaches.",
    date: "April 10, 2023",
    duration: "75 minutes",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    videoUrl: "#",
    presenter: "Maria Njeri, Investment Analyst"
  }
];

const LionsPerspectivePage = () => {
  return (
    <div>
      <PageHeader 
        title="Lion's Perspective" 
        subtitle="Insights, analysis and expert views on financial matters"
        backgroundImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
      />
      
      <div className="container py-12">
        <Tabs defaultValue="blog">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
          </TabsList>
          
          {/* Blog Section */}
          <TabsContent value="blog" id="blog">
            <SectionTitle 
              title="Latest Articles" 
              subtitle="Insights and analysis from our financial experts"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-xs font-medium px-2 py-1 bg-icea-gray rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-icea-navy mb-2">{post.title}</h3>
                    <p className="text-icea-dark-gray mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">By {post.author}</span>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="link" className="text-icea-blue p-0">Read More</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Webinars Section */}
          <TabsContent value="webinars" id="webinars">
            <SectionTitle 
              title="Expert Webinars" 
              subtitle="Watch our educational webinars on financial topics"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {webinars.map((webinar) => (
                <Card key={webinar.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={webinar.thumbnail} 
                      alt={webinar.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="bg-white bg-opacity-80 rounded-full p-3">
                        <Video size={24} className="text-icea-navy" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{webinar.date}</span>
                      <span className="mx-2">•</span>
                      <span>{webinar.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-icea-navy mb-2">{webinar.title}</h3>
                    <p className="text-icea-dark-gray mb-3">{webinar.description}</p>
                    <p className="text-sm font-medium text-gray-600 mb-4">
                      Presenter: {webinar.presenter}
                    </p>
                    <a href={webinar.videoUrl}>
                      <Button variant="outline" className="w-full">Watch Webinar</Button>
                    </a>
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

export default LionsPerspectivePage;
