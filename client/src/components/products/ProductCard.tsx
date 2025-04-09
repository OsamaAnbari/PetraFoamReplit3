import { Link } from "wouter";
import { type Product } from "@/lib/data";
import { Ruler, Move } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-primary mb-3">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
        <div className="flex flex-wrap text-sm text-gray-800">
          <span className="mr-4 mb-2 flex items-center">
            <Ruler className="mr-1 text-primary h-4 w-4" /> {product.dimensions}
          </span>
          <span className="mr-4 mb-2 flex items-center">
            <Move className="mr-1 text-primary h-4 w-4" /> {product.thickness}
          </span>
        </div>
        <Link href="/contact">
          <a className="mt-5 inline-block text-primary hover:text-blue-700 font-medium text-sm">
            Request info <span className="ml-1">→</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
