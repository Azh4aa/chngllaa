import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Onboarding({ t }: { t: any }) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    
    // TODO: Replace with your actual Formspree endpoint (https://formspree.io/f/your-id)
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });
      
      if (response.ok) {
        // Success! Redirect to dashboard or a thank you page
        navigate('/dashboard');
      } else {
        // Fallback if Formspree is not set up, just proceed for now
        console.warn("Formspree error. Did you replace YOUR_FORM_ID?");
        navigate('/dashboard');
      }
    } catch (error) {
      console.error(error);
      navigate('/dashboard');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-8 flex justify-between items-center">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-black font-bold text-sm uppercase tracking-widest transition-colors">
          <ArrowLeft className="w-4 h-4" /> {t.onboarding_cancel}
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
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">{t.onboarding_title}</h2>
              <p className="text-zinc-500 font-medium mb-8">{t.onboarding_subtitle}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">{t.onboarding_name}</label>
                  <input type="text" name="name" required className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">{t.onboarding_company}</label>
                  <input type="text" name="company" required className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all" placeholder="Chnglla" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">{t.onboarding_email}</label>
                  <input type="email" name="email" required className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all" placeholder="hello@company.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">{t.onboarding_phone}</label>
                  <input type="tel" name="phone" className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black outline-none transition-all" placeholder="+964..." />
                </div>

                <div className="pt-6">
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-black text-white px-8 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-zinc-800 transition-colors disabled:opacity-50">
                    {isSubmitting ? '...' : t.onboarding_submit} {!isSubmitting && <ArrowRight className="w-4 h-4" />}
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
