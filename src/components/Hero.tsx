import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-bg">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 py-20 border-r border-white/10 pr-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand text-xs uppercase tracking-[0.3em] mb-4 font-semibold italic block">
              Edição Curada No. 14
            </span>
            <h1 className="text-6xl md:text-[84px] leading-[0.9] font-extralight tracking-tighter text-white">
              Moda com <br /> 
              <span className="italic font-serif">Propósito.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-gray-400 max-w-sm leading-relaxed tracking-wide"
          >
            Garimpos selecionados à mão para a geração que valoriza a história das peças e o futuro do planeta. Descarte o fast-fashion, abrace o único.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4"
          >
            <button className="bg-brand text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
              Ver Novidades
            </button>
            <button className="border border-white/20 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-white transition-all">
              Nossa Missão
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative pl-12"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-sm border border-white/5 relative">
            <img 
              src="https://images.unsplash.com/photo-1540221652346-e5dd6b20f9c6?q=80&w=2069&auto=format&fit=crop" 
              alt="Sustainable Fashion" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <div className="absolute bottom-8 left-8 flex items-center space-x-3 text-white">
               <div className="w-px h-12 bg-brand" />
               <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Destaque da Semana</p>
                  <p className="text-sm font-serif italic">Alfaiataria Anos 90</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
