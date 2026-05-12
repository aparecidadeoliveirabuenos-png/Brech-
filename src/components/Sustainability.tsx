import { motion } from 'motion/react';
import { Leaf, Recycle, Heart, ShieldCheck } from 'lucide-react';

const PHILOSOPHY = [
  {
    icon: Leaf,
    title: 'Impacto Reduzido',
    description: 'Cada peça reutilizada economiza até 75% da sua pegada hídrica e carbônica.'
  },
  {
    icon: Recycle,
    title: 'Circularidade',
    description: 'Promovemos o ciclo de vida infinito das roupas, de uma mulher incrível para outra.'
  },
  {
    icon: Heart,
    title: 'Curadoria Ética',
    description: 'Selecionamos apenas o que amamos, garantindo qualidade e procedência justa.'
  }
];

export default function Sustainability() {
  return (
    <section id="sustentabilidade" className="py-32 bg-dark-bg overflow-hidden relative">
      {/* Decorative vertical lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 py-12 lg:pr-12">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand text-xs uppercase tracking-[0.3em] mb-4 font-semibold italic block"
              >
                Consciência & Estilo
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-extralight tracking-tighter text-white"
              >
                Moda com <span className="italic font-serif">Futuro.</span>
              </motion.h2>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed tracking-wide max-w-md">
              Acreditamos que a moda não precisa ser descartável. O RE·WEAR nasceu para democratizar o acesso a peças de alta qualidade, enquanto damos um descanso necessário ao nosso meio ambiente. A economia circular é a nossa única direção.
            </p>

            <div className="grid sm:grid-cols-1 gap-8">
              {PHILOSOPHY.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-brand group-hover:text-brand transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-light text-white text-sm tracking-widest uppercase mb-1">{item.title}</h4>
                    <p className="text-[12px] text-gray-500 leading-snug tracking-wide">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-12">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="overflow-hidden aspect-[4/5] border border-white/5 relative bg-neutral-900"
            >
              <img 
                src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1000&auto=format&fit=crop" 
                alt="Working sustainably" 
                className="w-full h-full object-cover grayscale brightness-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent mix-blend-overlay" />
            </motion.div>
            
            {/* Stats floating card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-10 -left-10 bg-brand text-black p-10 shadow-2xl space-y-4 max-w-[240px]"
            >
              <ShieldCheck className="w-10 h-10" />
              <p className="text-4xl font-extralight tracking-tighter">5.000+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold leading-tight">LITROS DE ÁGUA ECONOMIZADOS <br /> POR CADA PEÇA GARIMPADA</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
