
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Insurance Basics",
    excerpt: "Learn the fundamental concepts of insurance and how different policies can protect you and your assets.",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "May 2, 2023",
    slug: "understanding-insurance-basics"
  },
  {
    id: 2,
    title: "Retirement Planning in Your 30s",
    excerpt: "Discover why starting your retirement planning early can significantly impact your financial future.",
    image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "April 18, 2023",
    slug: "retirement-planning-30s"
  },
  {
    id: 3,
    title: "Investment Strategies for Uncertain Times",
    excerpt: "Explore effective investment approaches during economic uncertainty and how to position your portfolio.",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 27, 2023",
    slug: "investment-strategies-uncertain-times"
  },
];

const LatestPerspectives = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <SectionTitle 
            title="Lion's Perspective" 
            subtitle="Insights, analysis and guidance from our financial experts"
            className="md:mb-0"
          />
          <Link to="/lions-perspective">
            <Button variant="outline" className="mt-4 md:mt-0">View All Posts</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold text-icea-navy mb-2">{post.title}</h3>
                <p className="text-icea-dark-gray">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link to={`/blog/${post.slug}`} className="w-full">
                  <Button variant="outline" className="w-full">Read Article</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPerspectives;
