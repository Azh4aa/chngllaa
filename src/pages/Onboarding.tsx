import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Onboarding({ t }: { t: any }) {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-8">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-black font-bold text-sm uppercase tracking-widest transition-colors">
          <ArrowLeft className="w-4 h-4" /> Cancel
        </Link>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-16">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${s === step ? 'bg-black text-white' : s < step ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                  {s < step ? <CheckCircle2 className="w-5 h-5" /> : s}
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${s <= step ? 'text-black' : 'text-zinc-400'}`}>
                  {s === 1 ? 'Details' : s === 2 ? 'Socials' : 'Checkout'}
                </span>
              </div>
            ))}
            <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-sm h-[2px] bg-zinc-100 -z-10 mt-[-24px]">
              <div className="h-full bg-black transition-all duration-500" style={{ width: `${((step - 1) / 2) * 100}%` }} />
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/5 min-h-[400px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Tell us about you.</h2>
                  <p className="text-zinc-500 font-medium mb-8">Let's set up your brand profile.</p>

                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Company / Brand Name</label>
                    <input type="text" className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all" placeholder="Chnglla" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all" placeholder="hello@company.com" />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Connect Socials.</h2>
                  <p className="text-zinc-500 font-medium mb-8">Where should we distribute the content?</p>

                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Instagram Handle</label>
                    <input type="text" className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all" placeholder="@yourbrand" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">TikTok Handle</label>
                    <input type="text" className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all" placeholder="@yourbrand" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Brand Voice / Notes</label>
                    <textarea rows={3} className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all" placeholder="E.g., Professional but casual, dark aesthetic..."></textarea>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 text-center pt-8"
                >
                  <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">You're All Set.</h2>
                  <p className="text-zinc-500 font-medium mb-8 max-w-sm mx-auto">Your profile is ready. Continue to your dashboard to activate your plan and upload your first raw files.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 flex justify-between items-center pt-8 border-t border-zinc-100">
              {step > 1 ? (
                <button onClick={() => setStep(step - 1)} className="text-zinc-500 hover:text-black font-bold uppercase tracking-widest text-sm transition-colors">
                  Back
                </button>
              ) : <div></div>}
              
              <button onClick={handleNext} className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-zinc-800 transition-colors">
                {step === 3 ? 'Go to Dashboard' : 'Continue'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
