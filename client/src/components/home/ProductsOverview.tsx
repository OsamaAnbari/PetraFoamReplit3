import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const ProductsOverview = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Premium Insulation Products
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative solutions designed for maximum thermal efficiency and energy savings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="XPS Insulation" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-3">XPS Insulation</h3>
              <p className="text-gray-600 mb-4">
                Extruded Polystyrene boards providing superior thermal resistance with high compression strength.
              </p>
              <Link href="/products#xps">
                <a className="inline-flex items-center text-primary hover:text-blue-700 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <img 
              src="https://images.unsplash.com/photo-1621619856624-94189668553d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="EPS Insulation" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-3">EPS Insulation</h3>
              <p className="text-gray-600 mb-4">
                Expanded Polystyrene solutions that offer excellent thermal performance with cost-effective implementation.
              </p>
              <Link href="/products#eps">
                <a className="inline-flex items-center text-primary hover:text-blue-700 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsOverview;
