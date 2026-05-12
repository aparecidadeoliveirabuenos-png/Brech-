import { motion } from 'motion/react';
import ProductCard from './ProductCard';
import { Product } from '../types';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Blazer Estruturado Areia',
    price: 189.90,
    category: 'Alfaiataria',
    size: 'M',
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Vestido Floral Anos 90',
    price: 145.00,
    category: 'Vestidos',
    size: 'P',
    condition: 'Vintage',
    image: 'https://images.unsplash.com/photo-1572804013307-a9a111281b68?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Jeans Reta Sustentável',
    price: 120.00,
    category: 'Denim',
    size: '38',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Tricô Oversized Menta',
    price: 98.00,
    category: 'Tricô',
    size: 'G',
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1620799147076-291195be5d6d?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function Showcase() {
  return (
    <section id="coleções" className="py-32 bg-dark-bg border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand text-xs uppercase tracking-[0.3em] mb-4 font-semibold italic block"
            >
              Curadoria Arquivo
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extralight tracking-tighter text-white"
            >
              Peças com <span className="italic font-serif">história.</span>
            </motion.h2>
          </div>
          <button className="text-[11px] uppercase tracking-widest border border-white/20 px-8 py-3 hover:bg-white hover:text-black transition-colors">
            Ver Todos os Arquivos
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {MOCK_PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-bg"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
