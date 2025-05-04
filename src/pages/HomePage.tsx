
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import StatisticsSection from "@/components/home/StatisticsSection";
import LatestPerspectives from "@/components/home/LatestPerspectives";
import CtaSection from "@/components/home/CtaSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <StatisticsSection />
      <LatestPerspectives />
      <CtaSection />
    </div>
  );
};

export default HomePage;
