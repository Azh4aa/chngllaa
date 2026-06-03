import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ArrowRight, 
  Hexagon, 
  Layers, 
  Zap, 
  TrendingUp, 
  MonitorPlay, 
  Menu, 
  X,
  MousePointer2,
  Play,
  Star,
  Globe
} from 'lucide-react';
import { translations } from './translations';

/* --- Animations --- */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

/* --- Components --- */

const Navbar = ({ lang, setLang, t }: { lang: 'en' | 'ku', setLang: (l: 'en' | 'ku') => void, t: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    const nextLang = lang === 'en' ? 'ku' : 'en';
    setLang(nextLang);
    document.body.dir = nextLang === 'ku' ? 'rtl' : 'ltr';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-black/70 backdrop-blur-xl border-white/10' : 'bg-transparent border-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 blur-md opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <Hexagon className="w-8 h-8 text-white fill-white/10 relative z-10" strokeWidth={1.5} />
            </div>
            <span className="font-bold text-xl tracking-tighter text-white">{t.brand}</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="#process">{t.nav_how_it_works}</NavLink>
            <NavLink href="#pricing">{t.nav_pricing}</NavLink>
            <NavLink href="#values">{t.nav_why_us}</NavLink>
            
            <button 
              onClick={toggleLang} 
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">{lang === 'en' ? 'KU' : 'EN'}</span>
            </button>
            
            <a href="#contact" className="relative group overflow-hidden bg-white text-black hover:text-white transition-all px-6 py-2 rounded-full text-sm font-bold tracking-tight transform hover:scale-105 active:scale-95">
              <span className="relative z-10">{t.nav_get_started}</span>
              <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </a>
          </div>

          <div className="-mr-2 flex md:hidden items-center gap-4">
            <button 
              onClick={toggleLang} 
              className="flex items-center gap-1 text-zinc-400 hover:text-white"
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs font-bold uppercase">{lang === 'en' ? 'KU' : 'EN'}</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-white/5 absolute w-full overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              <MobileNavLink onClick={() => setIsOpen(false)} href="#process">{t.nav_how_it_works}</MobileNavLink>
              <MobileNavLink onClick={() => setIsOpen(false)} href="#pricing">{t.nav_pricing}</MobileNavLink>
              <MobileNavLink onClick={() => setIsOpen(false)} href="#values">{t.nav_why_us}</MobileNavLink>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-black bg-white block w-full text-center px-3 py-3 rounded-lg font-bold mt-4">{t.nav_get_started}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="text-zinc-400 hover:text-white transition-colors px-2 py-2 text-sm font-medium tracking-tight">
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick: () => void }) => (
  <a href={href} onClick={onClick} className="text-zinc-300 hover:text-white block px-3 py-3 text-lg font-medium border-b border-white/5">
    {children}
  </a>
);

const Hero = ({ t, lang }: { t: any, lang: 'en' | 'ku' }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      <div className="absolute inset-0 hex-bg opacity-30 pointer-events-none"></div>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2"
      ></motion.div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 pt-10">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm hover:border-indigo-500/50 hover:bg-white/10 transition-all cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold text-zinc-200 uppercase tracking-widest">{t.hero_badge}</span>
        </motion.div>

        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[1.1] md:leading-[0.95] ${lang === 'ku' ? 'leading-tight lg:leading-tight' : ''}`}
        >
          <motion.span variants={fadeInUp} className="block">{t.hero_title_1}</motion.span>
          <motion.span variants={fadeInUp} className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-indigo-200 to-zinc-500 mt-2">
            {t.hero_title_2}
          </motion.span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-zinc-400 font-medium leading-relaxed tracking-tight"
        >
          {t.hero_subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#pricing" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-300 bg-white rounded-full overflow-hidden hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)]">
            <span className="relative z-10 flex items-center">
              {t.hero_cta_1}
              <ArrowRight className={`w-5 h-5 transition-transform ${lang === 'ku' ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'}`} />
            </span>
          </a>
          <a href="#process" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-zinc-900/50 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 focus:outline-none backdrop-blur-md active:scale-95">
            {t.hero_cta_2}
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center gap-6 md:gap-12"
        >
           <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">{t.trusted_by}</span>
           <div className="flex gap-8 items-center opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
              <span className="text-zinc-300 font-bold text-lg tracking-tight">YouTube</span>
              <span className="text-zinc-300 font-bold text-lg tracking-tight">Twitch</span>
              <span className="text-zinc-300 font-bold text-lg tracking-tight">Kick</span>
              <span className="text-zinc-300 font-bold text-lg tracking-tight">Spotify</span>
           </div>
        </motion.div>
      </div>
    </div>
  );
};

const ProcessStep = ({ number, title, description, isKu }: { number: string; title: string; description: string, isKu: boolean }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    className={`relative ${isKu ? 'pr-8 md:pr-0' : 'pl-8 md:pl-0'}`}
  >
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 group">
      <div className="hidden md:flex flex-shrink-0 flex-col items-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 text-white font-bold text-xl shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:bg-indigo-900/50 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-500">
          {number}
        </div>
        <div className="h-full w-px bg-gradient-to-b from-zinc-700 to-transparent mt-4 min-h-[180px] group-hover:from-indigo-500/50 transition-colors duration-500"></div>
      </div>
      <div className="pb-16 md:pb-24 pt-2">
        <div className="md:hidden mb-4 inline-block px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-sm font-bold">{number}</div>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{title}</h3>
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-lg font-medium">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Process = ({ t, lang }: { t: any, lang: 'en' | 'ku' }) => {
  const isKu = lang === 'ku';
  return (
    <section id="process" className="bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-20 lg:py-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6">
                <Hexagon className="w-5 h-5 text-indigo-500 fill-indigo-500/20" />
                <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase">{t.process_badge}</span>
              </motion.div>
              
              <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[1.1] md:leading-[0.95]">
                <span className="block">{t.process_title_1}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{t.process_title_2}</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-zinc-400 mb-12 max-w-md leading-relaxed font-medium">
                {t.process_subtitle}
              </motion.p>
              
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 max-w-md">
                 <div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm group hover:border-indigo-500/30 transition-colors">
                    <Layers className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-bold text-white tracking-tight">3.5k+</div>
                    <div className="text-sm text-zinc-500 font-bold mt-2 uppercase tracking-wide">{t.clips_per_month}</div>
                 </div>
                 <div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm group hover:border-purple-500/30 transition-colors">
                    <TrendingUp className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-bold text-white tracking-tight">75M+</div>
                    <div className="text-sm text-zinc-500 font-bold mt-2 uppercase tracking-wide">{t.total_views}</div>
                 </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 lg:py-32 pb-24">
            <ProcessStep 
              number="01"
              title={t.step_1_title}
              description={t.step_1_desc}
              isKu={isKu}
            />
            <ProcessStep 
              number="02"
              title={t.step_2_title}
              description={t.step_2_desc}
              isKu={isKu}
            />
            <ProcessStep 
              number="03"
              title={t.step_3_title}
              description={t.step_3_desc}
              isKu={isKu}
            />
            
            <motion.div 
              initial={{ opacity: 0, x: isKu ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`pt-10 ${isKu ? 'pr-0 md:pr-24' : 'pl-0 md:pl-24'}`}
            >
               <a href="#contact" className="inline-flex items-center gap-3 text-white font-bold text-xl hover:text-indigo-400 transition-colors group">
                  {t.start_deployment} 
                  <ArrowRight className={`w-6 h-6 transition-transform ${isKu ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`}/>
               </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  title: string;
  desc: string;
  highlight?: boolean;
  features: string[];
  t: any;
  isKu: boolean;
}

const PricingCard = ({ title, desc, highlight, features, t, isKu }: PricingCardProps) => (
  <motion.div 
    variants={scaleIn}
    className={`relative flex flex-col p-8 rounded-[2rem] transition-all duration-500 h-full group ${highlight ? 'bg-gradient-to-b from-indigo-900/40 to-zinc-950 border border-indigo-500/40 shadow-[0_0_80px_-15px_rgba(99,102,241,0.25)] md:-mt-8 md:mb-8' : 'bg-zinc-950/50 border border-white/5 hover:border-white/20'}`}
  >
    {highlight && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-indigo-500/30 whitespace-nowrap">
        Most Popular
      </div>
    )}
    
    <div className="mb-8">
      <h3 className={`text-2xl font-bold mb-3 tracking-tight ${highlight ? 'text-white' : 'text-zinc-300'}`}>{title}</h3>
      <p className="text-zinc-500 font-medium text-sm leading-relaxed min-h-[40px]">{desc}</p>
    </div>

    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full mb-8"></div>

    <ul className="space-y-5 mb-12 flex-1">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-4">
          <div className={`mt-1 p-1 rounded-full flex-shrink-0 ${highlight ? 'bg-indigo-500/20 text-indigo-400' : 'bg-white/5 text-zinc-500 group-hover:text-zinc-300'}`}>
            <Check className="w-4 h-4" strokeWidth={3} />
          </div>
          <span className={`text-sm leading-snug font-bold ${highlight ? 'text-zinc-200' : 'text-zinc-400 group-hover:text-zinc-300'} transition-colors`}>{feature}</span>
        </li>
      ))}
    </ul>

    <button className={`w-full py-4 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-xl ${highlight ? 'bg-white text-black hover:bg-indigo-50 hover:scale-[1.02] active:scale-[0.98]' : 'bg-zinc-900 text-white hover:bg-zinc-800 border border-white/5 hover:border-white/10 hover:scale-[1.02] active:scale-[0.98]'}`}>
      {t.choose_plan}
    </button>
  </motion.div>
);

const Pricing = ({ t, lang }: { t: any, lang: 'en' | 'ku' }) => {
  return (
    <section id="pricing" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">{t.pricing_title}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-xl font-medium">
            {t.pricing_subtitle}
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch"
        >
          <PricingCard 
            title={t.plan_1_title}
            desc={t.plan_1_desc}
            features={[
              t.plan_1_feature_1,
              t.plan_1_feature_2,
              t.plan_1_feature_3
            ]}
            t={t}
            isKu={lang === 'ku'}
          />
          <PricingCard 
            title={t.plan_2_title}
            desc={t.plan_2_desc}
            highlight={true}
            features={[
              t.plan_2_feature_1,
              t.plan_2_feature_2,
              t.plan_2_feature_3,
              t.plan_2_feature_4
            ]}
            t={t}
            isKu={lang === 'ku'}
          />
          <PricingCard 
            title={t.plan_3_title}
            desc={t.plan_3_desc}
            features={[
              t.plan_3_feature_1,
              t.plan_3_feature_2,
              t.plan_3_feature_3
            ]}
            t={t}
            isKu={lang === 'ku'}
          />
          <PricingCard 
            title={t.plan_4_title}
            desc={t.plan_4_desc}
            features={[
              "End-to-End Enterprise Solution",
              "Custom Content Volume",
              "Bespoke Market Strategy",
              "Dedicated Account Director"
            ]}
            t={t}
            isKu={lang === 'ku'}
          />
        </motion.div>
      </div>
    </section>
  );
};

const ValueItem = ({ icon: Icon, title, text }: { icon: any, title: string, text: string }) => (
    <motion.div variants={fadeInUp} className="group p-8 md:p-10 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-500">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
          <div className="inline-flex p-4 bg-black rounded-2xl border border-white/10 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500">
              <Icon className="w-8 h-8 text-zinc-300 group-hover:text-indigo-400 transition-colors" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl font-bold text-white tracking-tight">{title}</h3>
        </div>
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
          {text}
        </p>
    </motion.div>
);

const Values = ({ t }: { t: any }) => {
  return (
    <section id="values" className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 text-purple-500 fill-purple-500/20" />
                <span className="text-purple-400 font-bold tracking-widest text-xs uppercase">{t.values_badge}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">{t.values_title}</h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
            <ValueItem 
                icon={MousePointer2}
                title={t.value_1_title}
                text={t.value_1_text}
            />
            <ValueItem 
                icon={Layers}
                title={t.value_2_title}
                text={t.value_2_text}
            />
             <ValueItem 
                icon={Play}
                title={t.value_3_title}
                text={t.value_3_text}
            />
             <ValueItem 
                icon={Hexagon}
                title={t.value_4_title}
                text={t.value_4_text}
            />
        </motion.div>
      </div>
    </section>
  );
};

const Footer = ({ t }: { t: any }) => {
  return (
    <footer id="contact" className="bg-black pt-32 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/10 blur-[150px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
              {t.footer_title_1} <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">{t.footer_title_2}</span>
            </h2>
            <p className="text-zinc-400 text-2xl mb-12 max-w-lg font-medium">
              {t.footer_subtitle}
            </p>
            <a href="mailto:contact@chnglla.com" className="inline-block border-b-2 border-white pb-2 text-3xl md:text-4xl font-bold text-white hover:text-indigo-400 hover:border-indigo-400 transition-all">
              contact@chnglla.com
            </a>
          </div>

          <div className="flex flex-col gap-10 lg:pt-8">
             <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-lg font-bold">
                <a href="#" className="text-zinc-500 hover:text-white hover:-translate-y-1 transition-all">Instagram</a>
                <a href="#" className="text-zinc-500 hover:text-white hover:-translate-y-1 transition-all">Twitter</a>
                <a href="#" className="text-zinc-500 hover:text-white hover:-translate-y-1 transition-all">LinkedIn</a>
                <a href="#" className="text-zinc-500 hover:text-white hover:-translate-y-1 transition-all">YouTube</a>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-zinc-600 font-medium text-sm">
          <p>© {new Date().getFullYear()} {t.brand}. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'ku'>('en');

  // Load language preference if any
  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as 'en' | 'ku';
    if (savedLang) {
      setLang(savedLang);
      document.body.dir = savedLang === 'ku' ? 'rtl' : 'ltr';
    }
  }, []);

  const handleSetLang = (newLang: 'en' | 'ku') => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = translations[lang];

  return (
    <div className={`min-h-screen bg-black text-white selection:bg-indigo-500/30 selection:text-indigo-200 ${lang === 'ku' ? 'font-ku' : 'font-en'}`}>
      <Navbar lang={lang} setLang={handleSetLang} t={t} />
      <Hero t={t} lang={lang} />
      <Process t={t} lang={lang} />
      <Pricing t={t} lang={lang} />
      <Values t={t} />
      <Footer t={t} />
    </div>
  );
}