import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg text-white py-32 relative overflow-hidden border-t border-white/10">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2 space-y-10">
            <h2 className="text-5xl font-extralight tracking-tighter leading-tight italic">Vamos repensar seu guarda-roupa <br/> juntos?</h2>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed tracking-wide">
              Receba avisos antecipados sobre drops exclusivos e dicas de curadoria sustentável diretamente no seu e-mail.
            </p>
            <form className="flex max-w-md bg-white/[0.03] border border-white/10 p-1 focus-within:border-brand/40 transition-colors">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-transparent flex-1 px-6 outline-none text-xs tracking-widest placeholder:text-gray-600"
              />
              <button 
                type="submit"
                className="bg-brand text-black px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-white"
              >
                Participar
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand italic">Navegação</h4>
            <ul className="space-y-4 text-gray-500 text-xs tracking-widest">
              <li><a href="#coleções" className="hover:text-white transition-colors">Coleções</a></li>
              <li><a href="#sustentabilidade" className="hover:text-white transition-colors">Arquivos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustentabilidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand italic">Conecte-se</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-brand transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-700 mt-12 leading-relaxed">
              © 2024 RE·WEAR MARKEPLACE. <br />CURADORIA ÉTICA & ATEMPORAL.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-12 border-t border-white/5">
          <div className="text-2xl font-light tracking-[0.2em]">
            RE·WEAR<span className="text-brand">.</span>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
