import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { products, technicalSpecs } from "@/lib/data";
import ProductCard from "@/components/products/ProductCard";
import { useLocation } from "wouter";

const Products = () => {
  const [location] = useLocation();
  const xpsRef = useRef<HTMLDivElement>(null);
  const epsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the correct section based on hash in URL
    if (location.includes('#')) {
      const section = location.split('#')[1];
      if (section === 'xps' && xpsRef.current) {
        xpsRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'eps' && epsRef.current) {
        epsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  const xpsProducts = products.filter(product => product.category === 'xps');
  const epsProducts = products.filter(product => product.category === 'eps');

  return (
    <>
      <Helmet>
        <title>Products - Petra Foam Thermal Insulation</title>
        <meta name="description" content="Explore our range of high-quality thermal insulation solutions including XPS and EPS products for optimal performance." />
      </Helmet>
      
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Our Products</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our range of high-quality thermal insulation solutions designed for optimal performance.
            </p>
          </div>

          {/* XPS Products */}
          <div className="mb-16" ref={xpsRef} id="xps">
            <h2 className="text-3xl font-bold text-primary mb-6 relative after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-primary after:mt-4">
              XPS Insulation
            </h2>
            <p className="text-gray-600 mb-8 max-w-4xl">
              Extruded Polystyrene (XPS) insulation boards provide exceptional thermal performance and moisture resistance, making them ideal for demanding applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {xpsProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* EPS Products */}
          <div className="mb-16" ref={epsRef} id="eps">
            <h2 className="text-3xl font-bold text-primary mb-6 relative after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-primary after:mt-4">
              EPS Insulation
            </h2>
            <p className="text-gray-600 mb-8 max-w-4xl">
              Expanded Polystyrene (EPS) provides cost-effective thermal insulation with excellent versatility for various construction applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {epsProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Technical Specs */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-primary mb-6 relative after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-primary after:mt-4">
              Technical Specifications
            </h2>
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-primary text-white text-left">
                    <th className="py-3 px-4">Property</th>
                    <th className="py-3 px-4">XPS Standard</th>
                    <th className="py-3 px-4">XPS High Density</th>
                    <th className="py-3 px-4">EPS Standard</th>
                  </tr>
                </thead>
                <tbody>
                  {technicalSpecs.map((spec, index) => (
                    <tr key={index} className={index % 2 === 1 ? "border-b bg-gray-50" : "border-b"}>
                      <td className="py-3 px-4 font-medium">{spec.property}</td>
                      <td className="py-3 px-4">{spec.xpsStandard}</td>
                      <td className="py-3 px-4">{spec.xpsHighDensity}</td>
                      <td className="py-3 px-4">{spec.epsStandard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              * Values may vary depending on specific product variants. Contact us for detailed technical datasheets.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
