import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

const ProductsSection = () => {
  return (
    <section id="products" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Our Premium Products</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Discover our high-quality thermal insulation solutions designed to improve energy efficiency and comfort in all types of buildings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* XPS Product Card */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="XPS Thermal Insulation" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-heading font-bold text-2xl text-primary mb-3">Extruded Polystyrene (XPS)</h3>
              <p className="text-gray-700 mb-4">
                Our premium XPS insulation boards offer superior thermal resistance, moisture resistance, and compressive strength. Ideal for roofs, walls, and foundations.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-gray-100 text-secondary">High R-Value</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-secondary">Moisture Resistant</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-secondary">High Compressive Strength</Badge>
              </div>
              <Button asChild>
                <Link href="/products">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          
          {/* EPS Product Card */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565766546929-af019b260a66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="EPS Thermal Insulation" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-heading font-bold text-2xl text-primary mb-3">Expanded Polystyrene (EPS)</h3>
              <p className="text-gray-700 mb-4">
                Our EPS insulation is lightweight, cost-effective, and highly versatile. Perfect for wall insulation, ceiling insulation, and various construction applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="bg-gray-100 text-secondary">Lightweight</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-secondary">Cost-Effective</Badge>
                <Badge variant="secondary" className="bg-gray-100 text-secondary">Versatile Applications</Badge>
              </div>
              <Button asChild>
                <Link href="/products">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="default" 
            className="bg-yellow-500 text-primary hover:bg-yellow-400" 
            size="lg"
            asChild
          >
            <Link href="/products">
              View All Products <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
