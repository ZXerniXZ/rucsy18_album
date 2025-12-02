import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Photo } from '../types';

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ photo, onClose, onNext, onPrev }) => {
  
  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNext, onPrev]);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    const downloadLink = photo.downloadUrl || photo.url;
    window.open(downloadLink, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
      >
        {/* Top Bar Controls */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-50 bg-gradient-to-b from-black/60 to-transparent">
          <div className="text-white/80 text-sm font-medium ml-2">
            {photo.caption && <span>{photo.caption}</span>}
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleDownload}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md"
              title="Scarica"
            >
              <Download className="w-6 h-6" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-red-500/80 text-white transition-colors backdrop-blur-md"
              title="Chiudi"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        {onPrev && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-40 hidden md:block"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}

        {onNext && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-40 hidden md:block"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        )}

        {/* Main Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-full max-h-screen p-4 flex items-center justify-center"
          onClick={(e) => e.stopPropagation()} // Clicking image doesn't close
        >
          <img
            src={photo.url}
            alt={photo.caption}
            className="max-h-[85vh] max-w-full object-contain shadow-2xl rounded-sm"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;