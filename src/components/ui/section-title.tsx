
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  center = false,
  className 
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-10",
      center && "text-center",
      className
    )}>
      <h2 className="text-3xl font-bold text-icea-navy mb-3">{title}</h2>
      {subtitle && (
        <p className="text-icea-dark-gray max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
