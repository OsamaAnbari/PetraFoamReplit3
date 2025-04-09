import { Zap, ShieldCheck, Leaf, Wrench } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Why Choose Our Insulation</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Our thermal insulation products provide numerous benefits that improve building performance and occupant comfort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Benefit 1 */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
            <div className="inline-block p-4 bg-secondary rounded-full mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Energy Savings</h3>
            <p className="opacity-90">Reduces heating and cooling costs by maintaining indoor temperature.</p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
            <div className="inline-block p-4 bg-secondary rounded-full mb-4">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Moisture Resistance</h3>
            <p className="opacity-90">Prevents moisture infiltration and structural damage to buildings.</p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
            <div className="inline-block p-4 bg-secondary rounded-full mb-4">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Eco-Friendly</h3>
            <p className="opacity-90">Reduces carbon footprint through improved energy efficiency.</p>
          </div>
          
          {/* Benefit 4 */}
          <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
            <div className="inline-block p-4 bg-secondary rounded-full mb-4">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Easy Installation</h3>
            <p className="opacity-90">Designed for simple, efficient installation in various applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
