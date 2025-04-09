import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const AboutSummary = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img 
              src="https://images.unsplash.com/photo-1581094289810-adf5d25690e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Modern building with thermal insulation" 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">Leaders in Thermal Insulation</h2>
            <p className="text-gray-800 text-lg mb-6">
              Jordan Mountains Intermediate Industries, one of the region's leading Arab companies producing extruded polystyrene boards for thermal insulation according to the latest international standards and using the best manufacturing techniques.
            </p>
            <p className="text-gray-800 text-lg mb-6">
              Our thermal insulation products provide significant energy savings, with studies showing that properly insulated buildings recover the cost of insulation within two years through reduced heating and cooling expenses.
            </p>
            <Button variant="link" className="text-secondary hover:text-primary p-0 h-auto" asChild>
              <Link href="/about">
                Learn more about us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
