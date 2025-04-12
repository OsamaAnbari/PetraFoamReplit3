import { Link } from "wouter";
import { type Product } from "@/lib/data";
import { Ruler, Move } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useTranslation();

  const getProductTranslation = (productId: number, field: 'name' | 'description') => {
    const category = product.category;
    const productTypes = {
      1: 'standard',
      2: 'highDensity',
      3: 'facade',
      4: 'perimeter',
      5: 'standard',
      6: 'roof',
      7: 'floor',
      8: 'decorative'
    };
    const type = productTypes[productId as keyof typeof productTypes];
    return t(`products.${category}.products.${type}.${field}`);
  };

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img 
        src={product.image} 
        alt={getProductTranslation(product.id, 'name')} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-primary mb-3">
          {getProductTranslation(product.id, 'name')}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
          {getProductTranslation(product.id, 'description')}
        </p>
        <div className="flex flex-wrap text-sm text-gray-800">
          <span className="mr-4 mb-2 flex items-center">
            <Ruler className="mr-1 text-primary h-4 w-4" /> 
            <span className="font-medium">{t('products.dimensions')}:</span> {product.dimensions}
          </span>
          <span className="mr-4 mb-2 flex items-center">
            <Move className="mr-1 text-primary h-4 w-4" /> 
            <span className="font-medium">{t('products.thickness')}:</span> {product.thickness}
          </span>
        </div>
        <Link href="/contact">
          <a className="mt-5 inline-block text-primary hover:text-blue-700 font-medium text-sm">
            {t('nav.contact')} <span className="ml-1">→</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
