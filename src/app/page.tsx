'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header, type TabId } from '@/components/mun/header';
import { Hero } from '@/components/mun/hero';
import { Mun101 } from '@/components/mun/mun101';
import { Rules } from '@/components/mun/rules';
import { India } from '@/components/mun/india';
import { Toolkit } from '@/components/mun/toolkit';
import { Quiz } from '@/components/mun/quiz';
import { Footer } from '@/components/mun/footer';

export default function Home() {
  const [tab, setTab] = useState<TabId>('home');

  const navigate = (t: TabId) => {
    setTab(t);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header active={tab} onNavigate={navigate} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            {tab === 'home' && <Hero onNavigate={navigate} />}
            {tab === 'basics' && <Mun101 />}
            {tab === 'rules' && <Rules />}
            {tab === 'india' && <India />}
            {tab === 'tools' && <Toolkit />}
            {tab === 'quiz' && <Quiz />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
