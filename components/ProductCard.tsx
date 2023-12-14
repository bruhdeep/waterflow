// components/ProductCard.tsx
import React from 'react';
import Product from '../components/Product';
import {TiPlus} from 'react-icons/ti';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='group max-w-xs max-h-[420px] overflow-hidden bg-[#ffffff] p-5 shadow-md md:text-xs m-5 rounded-md text-black font-sans hover:text-white hover:bg-slate-700 transition duration-500'>
      <div className='h-[70%] overflow-hidden rounded-md bg-[rgb(255,255,255)] shadow-[20px_20px_60px_rgb(190,190,190),-20px_-20px_60px_rgb(255,255,255)] group-hover:shadow-none'>
        <img className='' src={product.image} alt={product.title} />
      </div>
      <h4 className='text-sm mt-2 font-bold h-[20%] pt-2 overflow-hidden'>{product.title}</h4>
      <div className='text-sm flex justify-between items-center'>
        <span>${product.price}</span>
        <button className='bg-black text-white border-none rounded-[50%] w-8 h-8 text-lg flex justify-center items-center group-hover:bg-white group-hover:text-black'><TiPlus/></button>
      </div>
    </div>
  );
};

export default ProductCard;
