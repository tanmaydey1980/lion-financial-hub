
import { SectionTitle } from "@/components/ui/section-title";

const stats = [
  {
    value: "40+",
    label: "Years of Experience",
  },
  {
    value: "500k+",
    label: "Satisfied Clients",
  },
  {
    value: "50+",
    label: "Branches",
  },
  {
    value: "$2.5B+",
    label: "Assets Managed",
  },
];

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-icea-gray">
      <div className="container">
        <SectionTitle 
          title="Our Impact"
          subtitle="For decades, ICEA Lion has been a trusted partner in securing the financial future of our clients."
          center
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-icea-navy mb-2">
                {stat.value}
              </div>
              <p className="text-icea-dark-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
