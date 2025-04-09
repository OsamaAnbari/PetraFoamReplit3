import { features } from "@/lib/data";
import { Award, Leaf, Wrench } from "lucide-react";

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'medal':
      return <Award className="h-6 w-6" />;
    case 'leaf':
      return <Leaf className="h-6 w-6" />;
    case 'tools':
      return <Wrench className="h-6 w-6" />;
    default:
      return <Award className="h-6 w-6" />;
  }
};

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Petra Foam
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Leading the industry with quality thermal solutions for over a decade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="h-full p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-600 rounded-full text-white">
                {getIconComponent(feature.icon)}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
