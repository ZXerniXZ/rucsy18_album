import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Heart, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { AlbumConfig } from '../types';
import PhotoCard from './PhotoCard';

interface AlbumPageProps {
  config: AlbumConfig;
}

const AlbumPage: React.FC<AlbumPageProps> = ({ config }) => {
  const isDark = config.theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-stone-50 text-stone-800'
    }`}>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link 
            to="/"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isDark ? 'text-slate-400 hover:text-white' : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla Home
          </Link>
          <span className="font-serif font-bold text-lg tracking-wider">
            18° RUCSANDRA
          </span>
          <div className="w-20"></div> {/* Spacer for balance */}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-sm uppercase tracking-[0.2em] mb-4 font-semibold ${
             isDark ? 'text-purple-400' : 'text-gold-700'
          }`}>
            {config.subtitle}
          </h2>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            {config.title}
          </h1>
          <p className={`max-w-xl mx-auto text-lg leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-stone-600'
          }`}>
            {config.description}
          </p>
        </motion.div>
      </header>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {config.photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} theme={config.theme} />
          ))}
        </div>
        
        {config.photos.length === 0 && (
          <div className="text-center py-20 opacity-50">
            <Camera className="w-12 h-12 mx-auto mb-4" />
            <p>Nessuna foto disponibile al momento.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`py-8 text-center border-t space-y-2 ${
         isDark ? 'border-slate-800 text-slate-500' : 'border-stone-200 text-stone-500'
      }`}>
        <p className="flex items-center justify-center gap-2 text-sm">
          Creato con <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> per Rucsandra
        </p>
        <p className="text-xs opacity-80 flex items-center justify-center gap-1">
          <Camera className="w-3 h-3" />
          Foto di 
          <a 
            href="https://www.instagram.com/fede_foto_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`font-semibold hover:underline flex items-center gap-1 ${
              isDark ? 'text-slate-300 hover:text-white' : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <Instagram className="w-3 h-3" />
            @fede_foto_
          </a>
        </p>
      </footer>
    </div>
  );
};

export default AlbumPage;