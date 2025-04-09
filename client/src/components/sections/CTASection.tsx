import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const CTASection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">Ready to Improve Your Building's Efficiency?</h2>
        <p className="text-lg text-white opacity-90 max-w-3xl mx-auto mb-8">
          Contact our team today to learn how our thermal insulation solutions can help you save energy and improve comfort.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            asChild
            variant="default"
            className="bg-yellow-500 text-primary hover:bg-yellow-400 font-heading font-semibold"
            size="lg"
          >
            <Link href="/contact">
              Contact Us Today
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-heading font-semibold"
            size="lg"
          >
            <Link href="/products">
              Explore Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
