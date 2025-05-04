
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Calendar, Share2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Mock blog data - in a real app, this would come from an API
const blogPosts = {
  "understanding-insurance-basics": {
    title: "Understanding Insurance Basics",
    date: "May 2, 2023",
    author: "James Mwangi",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    content: `
      <p class="mb-4">Insurance can seem complex, but understanding the basics is crucial for making informed decisions about protecting yourself, your family, and your assets. This guide breaks down the fundamental concepts of insurance and helps you navigate the various policy options available.</p>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">What Is Insurance?</h2>
      <p class="mb-4">At its core, insurance is a financial arrangement that redistributes the cost of potential losses among many individuals and entities. You pay a premium to an insurance company, which promises to cover specified losses or damages you might face.</p>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">Key Insurance Terms</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Premium:</strong> The amount you pay for your insurance policy, usually on a monthly, quarterly, or annual basis.</li>
        <li><strong>Deductible:</strong> The amount you must pay out of pocket before your insurance coverage begins.</li>
        <li><strong>Coverage Limit:</strong> The maximum amount your insurer will pay for a covered loss.</li>
        <li><strong>Claim:</strong> A formal request to your insurance company for coverage or compensation for a covered loss or event.</li>
        <li><strong>Policy:</strong> The formal contract between you and your insurance company, detailing coverages, limits, and exclusions.</li>
      </ul>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">Common Types of Insurance</h2>
      <p class="mb-4"><strong>Life Insurance</strong> - Provides financial protection to your beneficiaries in the event of your death. There are various types, including term life and permanent life insurance.</p>
      
      <p class="mb-4"><strong>Health Insurance</strong> - Covers medical expenses incurred due to illness or injury. Policies can vary significantly in terms of coverage, deductibles, and provider networks.</p>
      
      <p class="mb-4"><strong>Auto Insurance</strong> - Protects against financial losses from accidents, theft, or damage to your vehicle. Most jurisdictions legally require at least minimal coverage.</p>
      
      <p class="mb-4"><strong>Home Insurance</strong> - Covers damage to your home and personal belongings due to covered perils like fire, theft, or natural disasters. It also typically includes liability coverage.</p>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">How to Choose the Right Insurance</h2>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li>Assess your needs based on your life stage, financial situation, and responsibilities.</li>
        <li>Compare quotes from multiple insurance providers to ensure you're getting the best value.</li>
        <li>Read the policy details carefully to understand what is and isn't covered.</li>
        <li>Consider working with an insurance agent who can provide personalized guidance.</li>
        <li>Review and update your coverage periodically as your circumstances change.</li>
      </ol>
      
      <p class="mb-4">Remember that the cheapest policy isn't always the best. Focus on finding coverage that meets your needs at a reasonable price.</p>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">Conclusion</h2>
      <p class="mb-4">Insurance is an essential part of financial planning. By understanding these basics, you can make more informed decisions about protecting what matters most to you. If you have specific questions about which insurance products might be right for you, consider consulting with one of our financial advisors.</p>
    `,
    tags: ["Insurance", "Financial Planning", "Protection"],
    related: ["retirement-planning-30s", "investment-strategies-uncertain-times"]
  },
  "retirement-planning-30s": {
    title: "Retirement Planning in Your 30s",
    date: "April 18, 2023",
    author: "Sarah Kimani",
    image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    content: `
      <p class="mb-4">Your 30s is a critical decade for retirement planning. While retirement may seem far away, the financial decisions you make now can significantly impact your future financial security. This article explores why starting early and how to approach retirement planning in your 30s.</p>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">The Power of Compound Interest</h2>
      <p class="mb-4">Perhaps the most compelling reason to start retirement planning in your 30s is compound interest. Simply put, compound interest is interest earned on both your initial investment and accumulated interest. The earlier you start saving, the more time your money has to grow.</p>
      
      <p class="mb-4">For example, if you start saving $500 monthly at age 30, assuming an average annual return of 7%, you could have approximately $1,000,000 by age 65. If you wait until 40 to start, you'd need to save around $1,000 monthly to achieve the same result.</p>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">Balancing Multiple Financial Priorities</h2>
      <p class="mb-4">Your 30s often come with competing financial priorities: paying off student loans, saving for a home, starting a family, and building an emergency fund. While these are all important, neglecting retirement savings can be costly in the long run.</p>
      
      <p class="mb-4">Consider adopting the 50/30/20 budgeting rule: allocate 50% of your income to necessities, 30% to wants, and 20% to savings and debt repayment. Within that 20%, prioritize high-interest debt, then your emergency fund, and then retirement savings.</p>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">Retirement Savings Strategies</h2>
      <ol class="list-decimal pl-6 mb-4 space-y-2">
        <li><strong>Maximize employer matches:</strong> If your employer offers a retirement plan with matching contributions, contribute at least enough to get the full match. Not doing so is essentially leaving free money on the table.</li>
        <li><strong>Consider tax advantages:</strong> Understand the tax implications of different retirement accounts. Traditional retirement accounts offer immediate tax benefits, while Roth accounts provide tax-free withdrawals in retirement.</li>
        <li><strong>Automate your savings:</strong> Set up automatic transfers to your retirement accounts to ensure consistent contributions.</li>
        <li><strong>Diversify your investments:</strong> In your 30s, you generally have time to weather market volatility, so consider a diversified portfolio with a higher allocation to equities.</li>
      </ol>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">Building Financial Literacy</h2>
      <p class="mb-4">Take time to educate yourself about personal finance and investment strategies. Understanding concepts like asset allocation, risk tolerance, and investment fees can help you make more informed decisions.</p>
      
      <p class="mb-4">Consider working with a financial advisor who can provide personalized guidance based on your specific situation and goals.</p>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">Conclusion</h2>
      <p class="mb-4">Starting retirement planning in your 30s gives you a significant advantage in building financial security for your future. By making informed decisions and consistent contributions now, you can set yourself up for a comfortable retirement later. Remember, the best investment strategy is the one you start today.</p>
    `,
    tags: ["Retirement", "Financial Planning", "Investment"],
    related: ["understanding-insurance-basics", "investment-strategies-uncertain-times"]
  },
  "investment-strategies-uncertain-times": {
    title: "Investment Strategies for Uncertain Times",
    date: "March 27, 2023",
    author: "David Ochieng",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    content: `
      <p class="mb-4">Economic uncertainty can make even experienced investors nervous. Whether it's market volatility, inflation concerns, or geopolitical tensions, navigating investments during uncertain times requires a thoughtful approach. This article explores strategies to position your portfolio for resilience.</p>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">Maintain a Long-Term Perspective</h2>
      <p class="mb-4">During periods of volatility, it's natural to focus on short-term market movements. However, successful investing typically requires a long-term perspective. Historical data shows that markets have generally trended upward over time, despite periodic downturns.</p>
      
      <p class="mb-4">Remember your investment timeline and goals. If you're investing for retirement decades away, short-term volatility may have little impact on your long-term outcomes.</p>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">Diversification: Your First Line of Defense</h2>
      <p class="mb-4">Diversification remains one of the most effective strategies during uncertain times. By spreading investments across different asset classes, sectors, and geographical regions, you can reduce the impact of poor performance in any single area.</p>
      
      <p class="mb-4">Consider including assets that historically perform differently under various economic conditions: stocks for growth, bonds for stability, and potentially alternative investments like real estate or commodities as further diversifiers.</p>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">Defensive Sectors and Quality Companies</h2>
      <p class="mb-4">Some sectors tend to perform better during economic downturns. These "defensive sectors" include healthcare, utilities, and consumer staples – areas where demand remains relatively stable regardless of economic conditions.</p>
      
      <p class="mb-4">Within your equity allocation, consider quality companies with strong balance sheets, stable cash flows, and sustainable competitive advantages. These businesses are often better positioned to weather economic challenges.</p>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">Dollar-Cost Averaging</h2>
      <p class="mb-4">Dollar-cost averaging – investing a fixed amount regularly regardless of market conditions – can be particularly effective during volatile periods. This approach means you automatically buy more shares when prices are lower and fewer when prices are higher.</p>
      
      <p class="mb-4">This strategy removes the emotional aspect of trying to "time the market" and can reduce the impact of volatility on your overall investment returns.</p>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">Maintain an Emergency Fund</h2>
      <p class="mb-4">Before focusing on investments, ensure you have an adequate emergency fund – typically 3-6 months of living expenses in easily accessible accounts. This financial buffer can prevent you from having to sell investments at inopportune times due to unexpected expenses.</p>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">Consider Professional Guidance</h2>
      <p class="mb-4">During particularly complex or volatile periods, professional financial guidance can be valuable. A financial advisor can help you navigate uncertainty, providing objective advice tailored to your specific situation and goals.</p>
      
      <h2 class="text-xl font-semibold mt-8 mb-3">Conclusion</h2>
      <p class="mb-4">Uncertain times don't necessarily call for dramatic portfolio changes. Instead, focus on time-tested principles: maintain diversification, invest consistently, focus on quality, and align your strategy with your long-term goals. By staying disciplined and avoiding emotional reactions to market volatility, you can position your portfolio for long-term success regardless of short-term uncertainty.</p>
    `,
    tags: ["Investment", "Financial Planning", "Market Volatility"],
    related: ["understanding-insurance-basics", "retirement-planning-30s"]
  },
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  
  useEffect(() => {
    // In a real app, this would fetch data from an API
    if (slug && slug in blogPosts) {
      setPost(blogPosts[slug as keyof typeof blogPosts]);
    }
  }, [slug]);
  
  if (!post) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link to="/lions-perspective">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <div
        className="relative bg-icea-navy py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.85), rgba(26, 31, 44, 0.9)), url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Link to="/lions-perspective" className="inline-flex items-center text-white mb-6 hover:text-icea-gold transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Lion's Perspective
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center text-gray-300 gap-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </article>
            
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span key={tag} className="bg-icea-gray text-icea-navy px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="ghost" className="text-icea-navy">
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-icea-gray p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Related Articles</h3>
              <div className="space-y-4">
                {post.related.map((relatedSlug: string) => {
                  const relatedPost = blogPosts[relatedSlug as keyof typeof blogPosts];
                  return (
                    <div key={relatedSlug} className="border-b pb-4 last:border-b-0">
                      <Link 
                        to={`/blog/${relatedSlug}`} 
                        className="hover:text-icea-blue transition-colors block"
                      >
                        <h4 className="font-medium mb-1">{relatedPost.title}</h4>
                        <p className="text-sm text-gray-600">{relatedPost.date}</p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-white border rounded-lg p-6 mt-6">
              <h3 className="text-xl font-medium mb-4">Need Assistance?</h3>
              <p className="text-gray-600 mb-4">
                Our team of experts is ready to help you with your insurance and investment needs.
              </p>
              <Link to="/customer-support#contact-us">
                <Button className="w-full bg-icea-navy text-white">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
