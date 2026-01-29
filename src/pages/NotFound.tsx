import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

/**
 * 404 Not Found Page
 * 
 * Displays a user-friendly error page when a route doesn't exist.
 */
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="glass p-12 max-w-md w-full text-center animate-slide-in-up">
        <div className="mb-6">
          <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="hover-lift"
          >
            <ArrowLeft className="mr-2" size={16} />
            Go Back
          </Button>
          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-gradient-primary hover:glow-primary"
          >
            <Home className="mr-2" size={16} />
            Return Home
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
