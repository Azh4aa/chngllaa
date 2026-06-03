import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ArrowRight, 
  Menu, 
  X,
  Globe,
  ArrowUpRight
} from 'lucide-react';
import { translations } from './translations';

/* --- Animations --- */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

/* --- Components --- */

const Navbar = ({ lang, setLang, t }: { lang: 'en' | 'ku', setLang: (l: 'en' | 'ku') => void, t: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    const nextLang = lang === 'en' ? 'ku' : 'en';
    setLang(nextLang);
    document.body.dir = nextLang === 'ku' ? 'rtl' : 'ltr';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-4 h-4 bg-lime-400 rounded-sm"></div>
            <span className="font-bold text-2xl tracking-tighter text-white uppercase">{t.brand}</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#process">{t.nav_how_it_works}</NavLink>
            <NavLink href="#pricing">{t.nav_pricing}</NavLink>
            <NavLink href="#values">{t.nav_why_us}</NavLink>
            
            <button 
              onClick={toggleLang} 
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">{lang === 'en' ? 'KU' : 'EN'}</span>
            </button>
            
            <a href="#contact" className="bg-white text-black hover:bg-lime-400 transition-colors px-6 py-2.5 rounded-full text-sm font-bold tracking-tight">
              {t.nav_get_started}
            </a>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={toggleLang} 
              className="flex items-center gap-1 text-zinc-400 hover:text-white"
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs font-bold uppercase">{lang === 'en' ? 'KU' : 'EN'}</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black border-b border-white/10 absolute w-full top-full left-0 shadow-2xl"
          >
            <div className="px-4 pt-4 pb-8 flex flex-col gap-4">
              <MobileNavLink onClick={() => setIsOpen(false)} href="#process">{t.nav_how_it_works}</MobileNavLink>
              <MobileNavLink onClick={() => setIsOpen(false)} href="#pricing">{t.nav_pricing}</MobileNavLink>
              <MobileNavLink onClick={() => setIsOpen(false)} href="#values">{t.nav_why_us}</MobileNavLink>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-black bg-lime-400 block w-full text-center px-4 py-4 font-bold mt-4 uppercase tracking-widest text-sm">{t.nav_get_started}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="text-zinc-400 hover:text-white transition-colors text-sm font-bold tracking-wide uppercase">
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick: () => void }) => (
  <a href={href} onClick={onClick} className="text-zinc-300 hover:text-white block text-2xl font-bold uppercase tracking-tighter border-b border-white/10 pb-4">
    {children}
  </a>
);

const Hero = ({ t, lang }: { t: any, lang: 'en' | 'ku' }) => {
  return (
    <div className="relative min-h-screen flex items-center bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-10">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-block py-1.5 px-4 bg-lime-400 text-black font-bold text-xs uppercase tracking-widest">
              {t.hero_badge}
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className={`text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white mb-8 leading-[0.85] ${lang === 'ku' ? 'leading-tight lg:leading-tight' : ''}`}
          >
            <span className="block">{t.hero_title_1}</span>
            <span className="block text-zinc-500">
              {t.hero_title_2}
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="mt-8 max-w-2xl text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed"
          >
            {t.hero_subtitle}
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="mt-16 flex flex-col sm:flex-row gap-6"
          >
            <a href="#pricing" className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold text-black uppercase tracking-widest transition-all bg-lime-400 hover:bg-white group">
              {t.hero_cta_1}
              <ArrowRight className={`w-5 h-5 transition-transform ${lang === 'ku' ? 'mr-3 rotate-180 group-hover:-translate-x-2' : 'ml-3 group-hover:translate-x-2'}`} />
            </a>
            <a href="#process" className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold text-white uppercase tracking-widest transition-all bg-transparent border border-white/20 hover:border-white group">
              {t.hero_cta_2}
            </a>
          </motion.div>
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
    className="border-t border-white/20 pt-10 pb-16"
  >
    <div className="flex flex-col md:flex-row gap-6 md:gap-16">
      <div className="md:w-32 flex-shrink-0">
        <div className="text-lime-400 font-black text-6xl tracking-tighter leading-none opacity-80">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter uppercase">{title}</h3>
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Process = ({ t, lang }: { t: any, lang: 'en' | 'ku' }) => {
  const isKu = lang === 'ku';
  return (
    <section id="process" className="bg-zinc-950 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="text-lime-400 font-bold tracking-widest text-sm uppercase">{t.process_badge}</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9] uppercase">
              <span className="block">{t.process_title_1}</span>
              <span className="block text-zinc-600">{t.process_title_2}</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-2xl text-zinc-400 max-w-3xl leading-relaxed font-medium">
              {t.process_subtitle}
            </motion.p>
          </motion.div>
        </div>

        <div className="space-y-0">
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
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-16 border-t border-white/20"
        >
            <a href="#contact" className="inline-flex items-center gap-4 text-white font-bold text-2xl uppercase tracking-tighter hover:text-lime-400 transition-colors group">
              {t.start_deployment} 
              <ArrowUpRight className={`w-8 h-8 transition-transform ${isKu ? 'rotate-90 group-hover:-translate-x-2' : 'group-hover:translate-x-2 group-hover:-translate-y-2'}`}/>
            </a>
        </motion.div>
        
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
    variants={fadeInUp}
    className={`relative flex flex-col p-10 md:p-12 transition-all duration-300 h-full ${highlight ? 'bg-zinc-900 border-2 border-lime-400' : 'bg-black border border-white/10 hover:border-white/30'}`}
  >
    {highlight && (
      <div className="absolute top-0 right-0 bg-lime-400 text-black px-4 py-2 text-xs font-black tracking-widest uppercase">
        Recommended
      </div>
    )}
    
    <div className="mb-12 mt-4">
      <h3 className={`text-4xl font-black mb-4 tracking-tighter uppercase ${highlight ? 'text-lime-400' : 'text-white'}`}>{title}</h3>
      <p className="text-zinc-400 font-medium text-lg leading-relaxed">{desc}</p>
    </div>

    <ul className="space-y-6 mb-16 flex-1">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-4">
          <div className={`mt-1 flex-shrink-0 ${highlight ? 'text-lime-400' : 'text-white'}`}>
            <ArrowRight className={`w-5 h-5 ${isKu ? 'rotate-180' : ''}`} strokeWidth={2.5} />
          </div>
          <span className="text-base md:text-lg leading-snug font-medium text-zinc-300">{feature}</span>
        </li>
      ))}
    </ul>

    <button className={`w-full py-5 font-bold text-sm tracking-widest uppercase transition-all duration-300 ${highlight ? 'bg-lime-400 text-black hover:bg-white' : 'bg-white text-black hover:bg-lime-400'}`}>
      {t.choose_plan}
    </button>
  </motion.div>
);

const Pricing = ({ t, lang }: { t: any, lang: 'en' | 'ku' }) => {
  return (
    <section id="pricing" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase">{t.pricing_title}</h2>
          <p className="text-zinc-400 max-w-3xl text-2xl font-medium">
            {t.pricing_subtitle}
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch"
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

const ValueItem = ({ number, title, text }: { number: string, title: string, text: string }) => (
    <motion.div variants={fadeInUp} className="group border-t border-white/20 pt-8 pb-12">
        <div className="text-lime-400 font-bold text-sm mb-6 uppercase tracking-widest">{number}</div>
        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-6">{title}</h3>
        <p className="text-zinc-400 text-xl leading-relaxed font-medium">
          {text}
        </p>
    </motion.div>
);

const Values = ({ t }: { t: any }) => {
  return (
    <section id="values" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-24"
        >
          <div className="mb-6">
                <span className="text-lime-400 font-bold tracking-widest text-sm uppercase">{t.values_badge}</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase">{t.values_title}</h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0"
        >
            <ValueItem 
                number="01"
                title={t.value_1_title}
                text={t.value_1_text}
            />
            <ValueItem 
                number="02"
                title={t.value_2_title}
                text={t.value_2_text}
            />
             <ValueItem 
                number="03"
                title={t.value_3_title}
                text={t.value_3_text}
            />
             <ValueItem 
                number="04"
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
    <footer id="contact" className="bg-lime-400 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-32">
          
          <div className="max-w-3xl">
            <h2 className="text-7xl md:text-9xl font-black text-black mb-8 tracking-tighter uppercase leading-[0.85]">
              {t.footer_title_1} <br/> 
              <span className="text-zinc-800">{t.footer_title_2}</span>
            </h2>
            <p className="text-zinc-800 text-3xl mb-12 font-medium">
              {t.footer_subtitle}
            </p>
            <a href="mailto:contact@chnglla.com" className="inline-block border-b-4 border-black pb-2 text-4xl md:text-5xl font-black text-black hover:text-white hover:border-white transition-all uppercase">
              contact@chnglla.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-black/20 flex flex-col md:flex-row justify-between items-center text-zinc-900 font-bold text-sm uppercase tracking-wider">
          <p>© {new Date().getFullYear()} {t.brand}. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'ku'>('en');

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
    <div className={`min-h-screen bg-black text-white selection:bg-lime-400 selection:text-black ${lang === 'ku' ? 'font-ku' : 'font-en'}`}>
      <Navbar lang={lang} setLang={handleSetLang} t={t} />
      <Hero t={t} lang={lang} />
      <Process t={t} lang={lang} />
      <Pricing t={t} lang={lang} />
      <Values t={t} />
      <Footer t={t} />
    </div>
  );
}