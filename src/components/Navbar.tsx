import { motion } from 'motion/react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-light tracking-[0.2em] text-white"
        >
          RE·WEAR<span className="text-brand">.</span>
        </motion.div>

        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-widest font-medium">
          {['Coleções', 'Arquivos', 'Sustentabilidade', 'Sobre'].map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-light-text hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <button className="hover:text-brand transition-colors text-white/70">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-brand transition-colors relative text-white/70">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-brand text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
          <button 
            className="md:hidden hover:text-brand transition-colors text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-bg border-t border-white/10 px-6 py-10 space-y-6"
        >
          {['Coleções', 'Arquivos', 'Sustentabilidade', 'Sobre'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-xl font-light tracking-widest text-light-text hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
