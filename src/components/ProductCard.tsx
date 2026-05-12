import { motion } from 'motion/react';
import { ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-dark-bg p-6 flex flex-col justify-end border border-white/5 hover:border-brand/30 transition-all duration-500"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 mb-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Category Tag */}
        <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">
          {product.category}
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-sm font-light tracking-wide text-white group-hover:text-brand transition-colors">{product.name}</h3>
          <p className="text-brand font-serif italic text-lg mt-1">R$ {product.price.toFixed(2)}</p>
        </div>
        <span className="text-[10px] uppercase border border-white/20 px-2 py-1 text-white/60 tracking-widest">{product.size}</span>
      </div>
    </motion.div>
  );
}
