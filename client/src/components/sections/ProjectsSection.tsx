import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Our Featured Projects</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Explore our portfolio of successful insulation projects across various sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <Card className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Commercial Building Project" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-heading font-bold text-xl text-primary mb-2">Commercial Office Building</h3>
              <p className="text-gray-700 mb-4">Complete thermal insulation solution for a 12-story office building, resulting in 40% energy savings.</p>
              <Button variant="link" className="p-0 h-auto text-secondary font-heading font-semibold hover:text-primary" asChild>
                <Link href="/projects">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          {/* Project 2 */}
          <Card className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Residential Complex Project" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-heading font-bold text-xl text-primary mb-2">Luxury Residential Complex</h3>
              <p className="text-gray-700 mb-4">Premium XPS insulation for an upscale residential development, enhancing comfort and energy efficiency.</p>
              <Button variant="link" className="p-0 h-auto text-secondary font-heading font-semibold hover:text-primary" asChild>
                <Link href="/projects">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          {/* Project 3 */}
          <Card className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1561118241-3677fc9dc996?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Industrial Facility Project" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-heading font-bold text-xl text-primary mb-2">Industrial Manufacturing Facility</h3>
              <p className="text-gray-700 mb-4">Comprehensive insulation solution for a large industrial complex, providing temperature control and energy efficiency.</p>
              <Button variant="link" className="p-0 h-auto text-secondary font-heading font-semibold hover:text-primary" asChild>
                <Link href="/projects">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/projects">
              View All Projects <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
