import { motion, AnimatePresence } from 'framer-motion';
import { Ban } from 'lucide-react';

interface SecurityAlertProps {
  isOpen: boolean;
}

const SecurityAlert = ({ isOpen }: SecurityAlertProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-[#1a1a1a] border border-red-500/30 p-8 rounded-3xl text-center max-w-md w-full shadow-[0_0_50px_rgba(239,68,68,0.2)]"
          >
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Ban className="w-10 h-10 text-red-500" />
            </div>

            <h2 className="text-3xl font-bold text-white mb-2">HOPPSS! 🤚</h2>
            <h3 className="text-xl font-bold text-red-400 mb-4">Yakalandın Kardeşim!</h3>
            
            <p className="text-slate-300 text-lg leading-relaxed">
              "Kodlar da bizde kalsın, deneme öyle meraklı şeyler..." 😎
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-500">
              Fluxify Security System v1.0(BETA)
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SecurityAlert;