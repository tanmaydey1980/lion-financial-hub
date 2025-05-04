
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-6xl font-bold text-icea-navy mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-icea-navy text-white hover:bg-opacity-90">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
