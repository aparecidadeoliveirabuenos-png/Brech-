import { motion } from 'motion/react';
import { Search, Package, Sparkles } from 'lucide-react';

const STEPS = [
  {
    icon: Search,
    title: 'Curadoria Rigorosa',
    description: 'Garimpamos peças de alta qualidade, focando em materiais nobres e marcas atemporais.'
  },
  {
    icon: Sparkles,
    title: 'Tratamento & Higiene',
    description: 'Cada peça passa por um processo de higienização profissional e pequenos reparos artesanais.'
  },
  {
    icon: Package,
    title: 'Drops Semanais',
    description: 'Lançamos novas coleções todas as terças-feiras às 20h. Peças únicas para mulheres únicas.'
  }
];

export default function Process() {
  return (
    <section className="py-32 bg-dark-bg relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand text-xs uppercase tracking-[0.3em] font-semibold italic block"
          >
            Nosso Método
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white uppercase tracking-widest">A Jornada da Peça</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="text-center space-y-6 group p-8 border border-white/5 hover:bg-white/5 transition-all duration-500 rounded-px"
            >
              <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:border-brand group-hover:text-brand text-white/50">
                <step.icon className="w-6 h-6" />
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-xl italic text-white tracking-wide">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed max-w-[220px] mx-auto tracking-wide">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
