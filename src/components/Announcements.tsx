import { announcements } from '../data/announcements';
import { Bell, Calendar, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Announcements = () => {
  return (
    <section className="py-20 bg-brand-dark relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        { }
        <div className="flex items-center gap-3 mb-10">
          <div className="p-3 bg-brand-primary/10 rounded-lg">
            <Bell className="w-6 h-6 text-brand-primary" />
          </div>
          <h2 className="text-3xl font-bold text-white">
            Son <span className="text-brand-primary">Duyurular</span>
          </h2>
        </div>
        <div className="space-y-6">
          {announcements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative pl-8 border-l-2 border-white/10 hover:border-brand-primary transition-colors pb-2"
            >
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-dark border-2 border-white/20 group-hover:border-brand-primary group-hover:scale-125 transition-all" />
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <span className="text-sm text-brand-secondary font-mono flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {item.date}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded border ${
                    item.type === 'güncelleme' ? 'border-green-500/30 text-green-400 bg-green-500/10' :
                    item.type === 'haber' ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' :
                    'border-orange-500/30 text-orange-400 bg-orange-500/10'
                } uppercase tracking-wider`}>
                  {item.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        { }
        <div className="mt-10 pt-6 border-t border-white/5 flex items-center gap-2 text-slate-500 text-sm">
            <Zap className="w-4 h-4" />
            <span>Tüm güncellemeler anlık olarak sisteme işlenmektedir.</span>
        </div>

      </div>
    </section>
  );
};

export default Announcements;