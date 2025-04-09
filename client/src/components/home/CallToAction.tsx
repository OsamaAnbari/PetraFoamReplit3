import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="section-padding bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Contact our team today to discuss your thermal insulation needs.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8">
            Get in Touch
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
