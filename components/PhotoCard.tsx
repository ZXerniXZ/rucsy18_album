import React, { useState } from 'react';
import { Download, Loader2, ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';
import { Photo } from '../types';

interface PhotoCardProps {
  photo: Photo;
  theme: 'light' | 'dark';
  onClick: (photo: Photo) => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, theme, onClick }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDownloading(true);
    
    // Per Google Drive e la maggior parte dei file server statici,
    // aprire il link di download in una nuova scheda è il metodo più sicuro
    // per evitare blocchi CORS e garantire che il browser gestisca il file stream.
    setTimeout(() => {
      const downloadLink = photo.downloadUrl || photo.url;
      window.open(downloadLink, '_blank');
      setIsDownloading(false);
    }, 500);
  };

  const isDark = theme === 'dark';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative group overflow-hidden rounded-xl shadow-lg break-inside-avoid mb-6 cursor-pointer
        ${isDark ? 'bg-slate-800' : 'bg-white'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(photo)}
    >
      <div className="relative aspect-auto">
        <img
          src={photo.url}
          alt={photo.caption || "Foto del diciottesimo"}
          className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            // Fallback se l'immagine non carica (es. permessi Drive errati)
            e.currentTarget.style.opacity = '0.5';
          }}
        />
        
        {/* Overlay Gradient */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}
          bg-gradient-to-t from-black/80 via-black/20 to-transparent
        `}>
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end z-20">
             {photo.caption && (
               <p className="text-white text-sm font-medium line-clamp-2 flex-1 mr-2 font-sans drop-shadow-md">
                 {photo.caption}
               </p>
             )}
             
             <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`p-2 rounded-full backdrop-blur-md transition-colors flex-shrink-0 shadow-lg
                ${isDark 
                  ? 'bg-purple-600 hover:bg-purple-500 text-white' 
                  : 'bg-white hover:bg-slate-100 text-slate-900'
                }
              `}
              title="Scarica foto originale"
             >
               {isDownloading ? (
                 <Loader2 className="w-5 h-5 animate-spin" />
               ) : (
                 <Download className="w-5 h-5" />
               )}
             </button>
          </div>
          
          {/* Zoom Icon in center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIn className="w-8 h-8 text-white/90 drop-shadow-lg" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PhotoCard;