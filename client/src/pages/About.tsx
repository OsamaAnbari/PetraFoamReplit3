import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Award, Users, Factory, Target, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">About Petra Foam</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Learn about our story, mission, and commitment to providing high-quality thermal insulation solutions.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="lg:w-1/2">
          <h2 className="font-heading font-bold text-3xl text-primary mb-6">Our Story</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4 text-lg">
              Jordan Mountains Intermediate Industries, one of the region's leader Arab companies producing extruded polystyrene boards for thermal insulation according to the latest international standards and using the best Manufacturing techniques.
            </p>
            <p className="mb-4 text-lg">
              The company has always sought "to improve and develop their products to meet the needs and Requirements specifications and requirements required. The company diversifies the concept of thermal insulation for all sectors because of its many benefits and the buildings of thermal changes and records of the past that the products Positive, such as providing cooling and heating energy savings.
            </p>
            <p className="mb-4 text-lg">
              Thermal Insulation of any studies and experiments have shown that the buildings of thermal facility leads to the energy savings and Cooling and that the cost for a savings of a period not exceeding two years is equal to or more than the price of thermal insulation.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-4xl font-heading font-bold text-secondary mb-2">25+</div>
              <p className="text-gray-700">Years Experience</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-heading font-bold text-secondary mb-2">500+</div>
              <p className="text-gray-700">Projects Completed</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-heading font-bold text-secondary mb-2">15+</div>
              <p className="text-gray-700">Countries Served</p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Modern building exterior" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Insulation material closeup" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Manufacturing facility" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1581094251723-0a6f8df0a08c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Building construction" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <Separator className="my-16" />

      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl text-primary mb-4">Our Mission & Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Petra Foam, we're driven by our commitment to excellence and sustainable building practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 text-secondary">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To provide innovative thermal insulation solutions that improve energy efficiency, reduce environmental impact, and enhance building comfort across the region.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 text-secondary">
                <TrendingUp className="h-10 w-10" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary mb-2">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading provider of thermal insulation solutions in the Middle East, driving innovation in energy-efficient construction practices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 text-secondary">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary mb-2">Quality Commitment</h3>
              <p className="text-gray-700">
                We maintain the highest standards of product quality, consistently meeting or exceeding international specifications and customer expectations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 text-secondary">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary mb-2">Sustainability</h3>
              <p className="text-gray-700">
                We're committed to environmentally responsible manufacturing practices and developing products that contribute to sustainable construction.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 text-secondary">
                <Factory className="h-10 w-10" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary mb-2">Innovation</h3>
              <p className="text-gray-700">
                We continuously invest in research and development to improve our products and manufacturing processes, staying at the forefront of insulation technology.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 text-secondary">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary mb-2">Customer Focus</h3>
              <p className="text-gray-700">
                We prioritize understanding and meeting our customers' needs, providing exceptional service and technical support throughout every project.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl text-primary mb-4">Manufacturing Excellence</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art production facility ensures consistent quality and innovation in thermal insulation products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <img 
            src="https://images.unsplash.com/photo-1581092160607-ee22bc773ac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Manufacturing facility" 
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
          <div>
            <h3 className="font-heading font-semibold text-2xl text-primary mb-4">Advanced Production Process</h3>
            <p className="text-gray-700 mb-4">
              Our manufacturing facility utilizes cutting-edge technology to produce XPS and EPS insulation boards with precise specifications and consistent quality. Every step of the production process is carefully monitored to ensure our products meet the highest standards.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1" />
                <p className="text-gray-700">Automated production lines for consistent quality</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1" />
                <p className="text-gray-700">Strict quality control at every production stage</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1" />
                <p className="text-gray-700">Advanced testing facilities to verify product performance</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1" />
                <p className="text-gray-700">Environmentally responsible manufacturing practices</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1" />
                <p className="text-gray-700">ISO certified production processes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white p-8 rounded-lg">
        <div className="text-center">
          <h2 className="font-heading font-bold text-2xl mb-4">Join the Petra Foam Team</h2>
          <p className="opacity-90 max-w-3xl mx-auto mb-6">
            We're always looking for talented individuals to join our growing team. If you're passionate about sustainability and innovation, check out our current opportunities.
          </p>
          <a 
            href="/careers" 
            className="inline-block bg-white text-primary font-heading font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition"
          >
            View Career Opportunities
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
