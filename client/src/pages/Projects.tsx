import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">Our Projects</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our portfolio of successful thermal insulation projects across various sectors, 
          showcasing the quality and versatility of our products.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="grid w-full md:w-[600px] grid-cols-3 mx-auto mb-8">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="commercial">Commercial</TabsTrigger>
          <TabsTrigger value="residential">Residential</TabsTrigger>
        </TabsList>

        {/* All Projects */}
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Commercial Office Building" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-bold text-xl text-primary">Commercial Office Building</h3>
                  <Badge>Commercial</Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  Complete thermal insulation solution for a 12-story office building, resulting in 40% energy savings.
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-primary">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury Residential Complex" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-bold text-xl text-primary">Luxury Residential Complex</h3>
                  <Badge>Residential</Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  Premium XPS insulation for an upscale residential development, enhancing comfort and energy efficiency.
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-primary">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1561118241-3677fc9dc996?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Industrial Manufacturing Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-bold text-xl text-primary">Industrial Manufacturing Facility</h3>
                  <Badge>Industrial</Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  Comprehensive insulation solution for a large industrial complex, providing temperature control and energy efficiency.
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-primary">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Healthcare Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-bold text-xl text-primary">Healthcare Facility</h3>
                  <Badge>Commercial</Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  High-performance insulation for a state-of-the-art medical center, ensuring consistent temperatures and energy efficiency.
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-primary">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Project 5 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Educational Campus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-bold text-xl text-primary">Educational Campus</h3>
                  <Badge>Commercial</Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  Complete thermal insulation package for a university campus, delivering optimal comfort and reduced energy costs.
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-primary">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Project 6 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Villa Development" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-bold text-xl text-primary">Modern Villa Development</h3>
                  <Badge>Residential</Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  Premium insulation solutions for a luxury villa project, providing superior comfort and energy performance.
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-primary">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Commercial Projects */}
        <TabsContent value="commercial">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Commercial Office Building" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-bold text-xl text-primary">Commercial Office Building</h3>
                  <Badge>Commercial</Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  Complete thermal insulation solution for a 12-story office building, resulting in 40% energy savings.
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-primary">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Healthcare Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-bold text-xl text-primary">Healthcare Facility</h3>
                  <Badge>Commercial</Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  High-performance insulation for a state-of-the-art medical center, ensuring consistent temperatures and energy efficiency.
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-primary">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Project 5 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Educational Campus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-bold text-xl text-primary">Educational Campus</h3>
                  <Badge>Commercial</Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  Complete thermal insulation package for a university campus, delivering optimal comfort and reduced energy costs.
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-primary">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Residential Projects */}
        <TabsContent value="residential">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 2 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury Residential Complex" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-bold text-xl text-primary">Luxury Residential Complex</h3>
                  <Badge>Residential</Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  Premium XPS insulation for an upscale residential development, enhancing comfort and energy efficiency.
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-primary">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Project 6 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Villa Development" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-bold text-xl text-primary">Modern Villa Development</h3>
                  <Badge>Residential</Badge>
                </div>
                <p className="text-gray-700 mb-4">
                  Premium insulation solutions for a luxury villa project, providing superior comfort and energy performance.
                </p>
                <Button variant="link" className="p-0 h-auto text-secondary hover:text-primary">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-primary text-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h2 className="font-heading font-bold text-2xl mb-2">Have a Project in Mind?</h2>
            <p className="opacity-90">
              Contact our team of experts to discuss your thermal insulation requirements.
            </p>
          </div>
          <Button variant="secondary" className="whitespace-nowrap" asChild>
            <a href="/contact">Contact Us Today</a>
          </Button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-heading font-bold text-3xl text-primary mb-8 text-center">Project Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-heading font-bold text-xl text-primary mb-4">Commercial Tower Energy Retrofit</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Commercial Tower Before" 
                  className="w-full h-48 object-cover rounded-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1577193120433-797e2cf21356?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Commercial Tower After" 
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Challenge:</strong> An aging commercial tower was experiencing significant energy loss through its facade.
                </p>
                <p>
                  <strong>Solution:</strong> Installation of our premium XPS insulation as part of a comprehensive building envelope retrofit.
                </p>
                <p>
                  <strong>Results:</strong> 45% reduction in energy consumption, improved indoor comfort, and extended building lifespan.
                </p>
              </div>
              
              <Button className="mt-4 w-full md:w-auto">
                Read Full Case Study
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-heading font-bold text-xl text-primary mb-4">Residential Complex Thermal Upgrade</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Residential Complex Before" 
                  className="w-full h-48 object-cover rounded-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Residential Complex After" 
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Challenge:</strong> A large residential complex suffering from poor thermal performance and high utility costs.
                </p>
                <p>
                  <strong>Solution:</strong> Implementation of a comprehensive EPS insulation system for all external walls and roof.
                </p>
                <p>
                  <strong>Results:</strong> 38% energy savings, elimination of thermal bridges, and enhanced comfort for residents.
                </p>
              </div>
              
              <Button className="mt-4 w-full md:w-auto">
                Read Full Case Study
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
