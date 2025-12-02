import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AlbumConfig } from '../types';

interface PasswordGateProps {
  config: AlbumConfig;
  children: React.ReactNode;
}

const PasswordGate: React.FC<PasswordGateProps> = ({ config, children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputCode, setInputCode] = useState('');
  const [error, setError] = useState(false);

  // Check session storage to keep user logged in during session
  useEffect(() => {
    const sessionKey = `auth_${config.title.replace(/\s/g, '')}`;
    if (sessionStorage.getItem(sessionKey) === 'true') {
      setIsAuthenticated(true);
    }
  }, [config.title]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Normalize input and password for case-insensitive comparison
    if (config.password && inputCode.toUpperCase().trim() === config.password.toUpperCase()) {
      const sessionKey = `auth_${config.title.replace(/\s/g, '')}`;
      sessionStorage.setItem(sessionKey, 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      // Shake animation trigger could be added here
      setTimeout(() => setError(false), 2000);
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  const isDark = config.theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-500 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-stone-50 text-stone-800'
    }`}>
      <Link 
        to="/"
        className={`absolute top-6 left-6 flex items-center gap-2 text-sm font-medium transition-colors ${
          isDark ? 'text-slate-400 hover:text-white' : 'text-stone-500 hover:text-stone-900'
        }`}
      >
        <ArrowLeft className="w-4 h-4" />
        Torna indietro
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`w-full max-w-md p-8 rounded-2xl shadow-2xl ${
          isDark ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-stone-200'
        }`}
      >
        <div className="flex flex-col items-center mb-8">
          <div className={`p-4 rounded-full mb-4 ${
            isDark ? 'bg-slate-800 text-purple-400' : 'bg-stone-100 text-gold-500'
          }`}>
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-center mb-2">
            Area Riservata
          </h2>
          <p className={`text-center text-sm ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>
            Inserisci il codice di accesso per visualizzare l'album <strong>{config.title}</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              value={inputCode}
              onChange={(e) => {
                setInputCode(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Inserisci codice"
              className={`w-full px-4 py-3 text-center text-lg tracking-widest uppercase rounded-xl border-2 outline-none transition-all ${
                error 
                  ? 'border-red-500 bg-red-50 text-red-900 placeholder-red-300' 
                  : isDark
                    ? 'bg-slate-950 border-slate-700 focus:border-purple-500 text-white placeholder-slate-600'
                    : 'bg-white border-stone-200 focus:border-gold-500 text-stone-900 placeholder-stone-400'
              }`}
            />
            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-6 left-0 right-0 text-center text-xs text-red-500 font-medium"
              >
                Codice non valido. Riprova.
              </motion.p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all transform active:scale-95 ${
              isDark
                ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/20'
                : 'bg-gold-500 hover:bg-gold-300 text-white shadow-lg shadow-gold-500/20'
            }`}
          >
            {isAuthenticated ? <Unlock className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            Accedi all'Album
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default PasswordGate;