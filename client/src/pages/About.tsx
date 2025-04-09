import { Helmet } from "react-helmet";
import { timelineItems } from "@/lib/data";
import { Building, Factory, Award, Globe, CheckCircle } from "lucide-react";

const getTimelineIcon = (iconName: string) => {
  switch (iconName) {
    case 'building':
      return <Building className="h-4 w-4" />;
    case 'industry':
      return <Factory className="h-4 w-4" />;
    case 'certificate':
      return <Award className="h-4 w-4" />;
    case 'globe':
      return <Globe className="h-4 w-4" />;
    default:
      return <Building className="h-4 w-4" />;
  }
};

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Petra Foam Thermal Insulation</title>
        <meta name="description" content="Learn about Petra Foam, our company history, mission, and our commitment to providing high-quality thermal insulation solutions." />
      </Helmet>
      
      <div className="bg-white section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-6">About Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about our company, our mission, and our commitment to providing high-quality thermal insulation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Company Overview */}
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold text-primary mb-6 relative after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-primary after:mt-4">
                Company Overview
              </h2>
              <p className="text-gray-700 mb-6">
                Jordan Mountains Intermediate Industries, one of the region's leader Arab companies producing extruded polystyrene boards for thermal insulation according to the latest international standards and using the best Manufacturing techniques.
              </p>
              <p className="text-gray-700 mb-6">
                The company has always sought to improve and develop their products to meet the needs and requirements specifications and requirements required. The company diversifies the concept of thermal insulation for all sectors because of its many benefits and the buildings of thermal changes and records of the past that the products positive, such as providing cooling and heating energy savings.
              </p>
              <p className="text-gray-700">
                Thermal Insulation of any studies and experiments have shown that the buildings of thermal facility leads to the energy savings and Cooling and that the cost for a savings of a period not exceeding two years is equal to or more than the price of thermal insulation.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To provide high-quality, innovative thermal insulation solutions that help our customers save energy, reduce costs, and contribute to a more sustainable future.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be the leading provider of thermal insulation solutions in the Middle East, recognized for quality, innovation, and customer service.
                </p>
              </div>
            </div>

            {/* Company Image and Values */}
            <div>
              <div className="relative h-80 lg:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Petra Foam Headquarters" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">Our Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1"><CheckCircle className="h-5 w-5" /></span>
                    <div>
                      <h4 className="font-bold text-gray-800">Quality Excellence</h4>
                      <p className="text-gray-600">We maintain the highest standards in our products and services</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1"><CheckCircle className="h-5 w-5" /></span>
                    <div>
                      <h4 className="font-bold text-gray-800">Innovation</h4>
                      <p className="text-gray-600">We continuously improve our products and processes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1"><CheckCircle className="h-5 w-5" /></span>
                    <div>
                      <h4 className="font-bold text-gray-800">Sustainability</h4>
                      <p className="text-gray-600">We are committed to environmentally responsible practices</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1"><CheckCircle className="h-5 w-5" /></span>
                    <div>
                      <h4 className="font-bold text-gray-800">Customer Focus</h4>
                      <p className="text-gray-600">We prioritize our customers' needs in everything we do</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center relative after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-primary after:mt-4 after:mx-auto">
              Our Journey
            </h2>
            
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <div key={item.id} className="relative flex md:justify-between items-center flex-col md:flex-row">
                    <div className={`md:w-5/12 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                      {index % 2 === 0 ? (
                        <>
                          <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                          <p className="text-gray-600 mt-2">{item.description}</p>
                        </>
                      ) : (
                        <span className="text-xl font-bold text-amber-500">{item.year}</span>
                      )}
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center order-1 md:order-2 z-10">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                        {getTimelineIcon(item.icon)}
                      </div>
                    </div>
                    
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'} order-3 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                      {index % 2 === 0 ? (
                        <span className="text-xl font-bold text-amber-500">{item.year}</span>
                      ) : (
                        <>
                          <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                          <p className="text-gray-600 mt-2">{item.description}</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
