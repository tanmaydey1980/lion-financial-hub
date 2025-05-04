
import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
}) => {
  return (
    <div
      className="relative bg-icea-navy py-20 mb-12"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.85), rgba(26, 31, 44, 0.9)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-gray-300">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
