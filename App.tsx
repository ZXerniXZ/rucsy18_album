import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown, PartyPopper, Users } from 'lucide-react';
import AlbumPage from './components/AlbumPage';
import { ALBUMS } from './constants';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-rose-100">
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-300 rounded-full blur-[100px] opacity-20"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-300 rounded-full blur-[100px] opacity-20"></div>
        </div>

        {/* Header Content */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center justify-center p-3 mb-6 bg-white rounded-full shadow-sm border border-stone-100">
            <Crown className="w-6 h-6 text-gold-500 mr-2" />
            <span className="text-sm font-semibold tracking-widest uppercase text-stone-500">18 Maggio 2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-stone-900 mb-4 tracking-tight">
            Rucsandra
          </h1>
          <p className="text-xl md:text-2xl text-stone-500 font-serif italic">
            Benvenuti al mio diciottesimo
          </p>
        </motion.div>

        {/* Split Selection */}
        <div className="relative z-10 grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          
          {/* Ragazzi Card */}
          {/* Using standard anchor with hash to avoid Router security errors in preview environments */}
          <a href="#/ragazzi" className="group relative block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-slate-900"
            >
              {/* Background Image / Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:opacity-50 transition-opacity duration-500"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm mb-4 group-hover:bg-white/20 transition-colors">
                  <PartyPopper className="w-8 h-8 md:w-10 md:h-10 text-purple-300" />
                </div>
                <h2 className="text-3xl font-serif font-bold mb-2">Ragazzi</h2>
                <p className="text-slate-300 text-center text-sm md:text-base">
                  Musica, divertimento e momenti folli
                </p>
                <span className="mt-6 px-6 py-2 border border-white/30 rounded-full text-sm hover:bg-white hover:text-slate-900 transition-all">
                  Entra nell'album
                </span>
              </div>
            </motion.div>
          </a>

          {/* Genitori Card */}
          <a href="#/genitori" className="group relative block">
             <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-white"
            >
              {/* Background Image / Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-stone-100 opacity-90" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225468359-2996515c9711?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-800 p-6">
                <div className="bg-stone-200/50 p-4 rounded-full backdrop-blur-sm mb-4 group-hover:bg-stone-200 transition-colors">
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-gold-700" />
                </div>
                <h2 className="text-3xl font-serif font-bold mb-2">Genitori</h2>
                <p className="text-stone-600 text-center text-sm md:text-base">
                  Emozioni, famiglia e ricordi eleganti
                </p>
                <span className="mt-6 px-6 py-2 border border-stone-300 rounded-full text-sm hover:bg-stone-800 hover:text-white transition-all">
                  Sfoglia l'album
                </span>
              </div>
            </motion.div>
          </a>
        </div>

        <footer className="relative z-10 mt-16 text-center text-stone-400 text-sm">
           <p>Seleziona la tua sezione per vedere le foto</p>
        </footer>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/ragazzi" 
          element={<AlbumPage config={ALBUMS.ragazzi} />} 
        />
        <Route 
          path="/genitori" 
          element={<AlbumPage config={ALBUMS.genitori} />} 
        />
      </Routes>
    </HashRouter>
  );
};

export default App;