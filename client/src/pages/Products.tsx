import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { products, technicalSpecs } from "@/lib/data";
import ProductCard from "@/components/products/ProductCard";
import { useLocation } from "wouter";

const Products = () => {
  const [location] = useLocation();
  const { t } = useTranslation();
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
        <title>{t('products.title')} - Petra Foam</title>
        <meta name="description" content={t('products.subtitle')} />
      </Helmet>
      
      <div className="bg-white section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-6">{t('products.title')}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>

          {/* XPS Products */}
          <div className="mb-16" ref={xpsRef} id="xps">
            <h2 className="text-3xl font-bold text-primary mb-6 relative after:content-[''] after:block after:w-[50px] after:h-[3px] after:bg-primary after:mt-4">
              {t('products.xps.title')}
            </h2>
            <p className="text-gray-600 mb-8 max-w-4xl">
              {t('products.xps.description')}
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
              {t('products.eps.title')}
            </h2>
            <p className="text-gray-600 mb-8 max-w-4xl">
              {t('products.eps.description')}
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
              {t('products.specs.title')}
            </h2>
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-primary text-white text-left">
                    <th className="py-3 px-4">{t('products.specs.property')}</th>
                    <th className="py-3 px-4">{t('products.specs.xpsStandard')}</th>
                    <th className="py-3 px-4">{t('products.specs.xpsHighDensity')}</th>
                    <th className="py-3 px-4">{t('products.specs.epsStandard')}</th>
                  </tr>
                </thead>
                <tbody>
                  {technicalSpecs.map((spec, index) => (
                    <tr key={index} className={index % 2 === 1 ? "border-b bg-gray-50" : "border-b"}>
                      <td className="py-3 px-4 font-medium">{t(`products.specs.properties.${spec.property.toLowerCase().replace(/\s+/g, '')}`)}</td>
                      <td className="py-3 px-4">{spec.xpsStandard}</td>
                      <td className="py-3 px-4">{spec.xpsHighDensity}</td>
                      <td className="py-3 px-4">{spec.epsStandard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              {t('products.specs.disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
