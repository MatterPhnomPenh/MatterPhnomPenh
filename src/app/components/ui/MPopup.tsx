

"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

interface MPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MPopup({ isOpen, onClose }: MPopupProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="backdrop-blur-sm rounded-3xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-full transition z-10 bg-transparent"
        >
          <X className="w-5 h-5 text-white" />
        </button>
        <div className="w-128 h-128 bg-transparent rounded-lg flex items-center justify-center">
          <div
            className="w-full h-full rounded-lg"
            style={{ backgroundImage: 'url(/matter1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}