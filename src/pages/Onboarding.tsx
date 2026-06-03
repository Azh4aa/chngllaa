import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Onboarding({ t }: { t: any }) {
  const navigate = useNavigate();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-8 flex justify-between items-center">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-black font-bold text-sm uppercase tracking-widest transition-colors">
          <ArrowLeft className="w-4 h-4" /> Cancel
        </Link>
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center overflow-hidden">
          <img src="/logo.png" alt="Chnglla Logo" className="w-full h-full object-cover bg-black" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-lg">
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/5 relative overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">Let's Talk.</h2>
              <p className="text-zinc-500 font-medium mb-8">Leave your contact details and we'll reach out to set up your content engine.</p>

              <form onSubmit={handleNext} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" required className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Company / Brand Name</label>
                  <input type="text" required className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all" placeholder="Chnglla" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Email</label>
                  <input type="email" required className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all" placeholder="hello@company.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Phone (Optional)</label>
                  <input type="tel" className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all" placeholder="+964..." />
                </div>

                <div className="pt-6">
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-black text-white px-8 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-zinc-800 transition-colors">
                    Submit <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
