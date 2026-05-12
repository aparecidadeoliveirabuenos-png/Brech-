/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Sustainability from './components/Sustainability';
import Process from './components/Process';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-brand z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="bg-dark-bg">
        <Hero />
        
        {/* Trust Bar / Logos (Mock) */}
        <section className="py-20 border-y border-white/5 bg-dark-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-between items-center gap-12 opacity-20 grayscale brightness-200">
              {['VOGUE', 'ELLE', 'GLAMOUR', 'MARIE CLAIRE', 'BAZAAR'].map(brand => (
                <span key={brand} className="text-2xl font-light tracking-[0.4em]">{brand}</span>
              ))}
            </div>
          </div>
        </section>

        <Showcase />
        
        <Process />
        
        <Sustainability />

        {/* Call to Action Quote */}
        <section className="py-60 bg-dark-bg text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/5 blur-[120px] rounded-full" />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h3 className="text-5xl md:text-7xl font-extralight leading-tight italic text-white tracking-tighter">
                "O consumo consciente é o ato mais revolucionário que podemos praticar."
              </h3>
              <div className="w-12 h-px bg-brand mx-auto" />
              <p className="uppercase tracking-[0.4em] font-bold text-[10px] text-brand">RE·WEAR PHILOSOPHY</p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
