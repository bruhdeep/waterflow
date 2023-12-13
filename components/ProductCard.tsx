// components/ProductCard.tsx
import React from 'react';
import Product from '../components/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded overflow-hidden mb-4 h-[400px] w-[200px] p-3">
      <img
        src={product.image}
        alt={product.title}
        className="w-full max-h-[200px]"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 text-sm">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
