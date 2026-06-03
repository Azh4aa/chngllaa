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
import { Link, useNavigate } from 'react-router-dom';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-black/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-black rounded-lg group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center overflow-hidden">
              {/* Fallback box if logo.png is missing */}
              <img src="/logo.png" alt="Chnglla Logo" className="w-full h-full object-cover bg-black" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <span className="font-black text-2xl tracking-tighter text-black uppercase">{t.brand}</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#process">{t.nav_how_it_works}</NavLink>
            <NavLink href="#pricing">{t.nav_pricing}</NavLink>
            <NavLink href="#values">{t.nav_why_us}</NavLink>
            
            <button 
              onClick={toggleLang} 
              className="flex items-center gap-2 text-zinc-500 hover:text-black transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">{lang === 'en' ? 'KU' : 'EN'}</span>
            </button>
            
            <Link to="/login" className="text-sm font-bold tracking-tight text-zinc-500 hover:text-black transition-colors">
              Login
            </Link>

            <Link to="/onboarding" className="bg-black text-white hover:bg-zinc-800 transition-colors px-6 py-2.5 rounded-full text-sm font-bold tracking-tight shadow-lg shadow-black/10">
              {t.nav_get_started}
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={toggleLang} 
              className="flex items-center gap-1 text-zinc-500 hover:text-black"
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs font-bold uppercase">{lang === 'en' ? 'KU' : 'EN'}</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-black p-2">
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
            className="md:hidden bg-white border-b border-black/5 absolute w-full top-full left-0 shadow-2xl"
          >
            <div className="px-4 pt-4 pb-8 flex flex-col gap-4">
              <MobileNavLink onClick={() => setIsOpen(false)} href="#process">{t.nav_how_it_works}</MobileNavLink>
              <MobileNavLink onClick={() => setIsOpen(false)} href="#pricing">{t.nav_pricing}</MobileNavLink>
              <MobileNavLink onClick={() => setIsOpen(false)} href="#values">{t.nav_why_us}</MobileNavLink>
              
              <Link to="/login" onClick={() => setIsOpen(false)} className="text-center text-zinc-500 font-bold uppercase tracking-widest text-sm pt-4">Login</Link>
              <Link to="/onboarding" onClick={() => setIsOpen(false)} className="text-white bg-black rounded-xl block w-full text-center px-4 py-4 font-bold mt-2 uppercase tracking-widest text-sm">{t.nav_get_started}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="text-zinc-500 hover:text-black transition-colors text-sm font-bold tracking-wide uppercase">
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick: () => void }) => (
  <a href={href} onClick={onClick} className="text-black hover:text-zinc-600 block text-2xl font-black uppercase tracking-tighter border-b border-black/5 pb-4">
    {children}
  </a>
);

const Hero = ({ t, lang }: { t: any, lang: 'en' | 'ku' }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.log("Auto-play prevented", e));
    }
  }, []);

  return (
    <div className="relative pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-10">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl text-center mx-auto"
        >
          {t.hero_badge && (
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block py-1.5 px-4 rounded-full bg-black/5 text-black font-bold text-xs uppercase tracking-widest">
                {t.hero_badge}
              </span>
            </motion.div>
          )}

          <motion.h1 
            variants={fadeInUp}
            className={`text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter text-black mb-8 leading-[0.9] ${lang === 'ku' ? 'leading-[1.1] lg:leading-[1.1]' : ''}`}
          >
            <span className="block">{t.hero_title_1}</span>
            <span className="block text-zinc-400">
              {t.hero_title_2}
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl text-zinc-500 font-medium leading-relaxed"
          >
            {t.hero_subtitle}
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/onboarding" className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold text-white uppercase tracking-widest transition-all bg-black rounded-full hover:scale-105 active:scale-95 shadow-xl shadow-black/10 group">
              {t.hero_cta_1}
              <ArrowRight className={`w-5 h-5 transition-transform ${lang === 'ku' ? 'mr-3 rotate-180 group-hover:-translate-x-1' : 'ml-3 group-hover:translate-x-1'}`} />
            </Link>
            <a href="#process" className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold text-black uppercase tracking-widest transition-all bg-transparent rounded-full hover:bg-black/5 group">
              {t.hero_cta_2}
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 max-w-5xl mx-auto rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-zinc-100 border border-black/5 aspect-[16/9] shadow-2xl relative"
        >
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            src="/showcase.mp4"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f4f4f5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24px' fill='%23a1a1aa'%3EShowcase Video (Add showcase.mp4 to public folder)%3C/text%3E%3C/svg%3E"
          >
            Your browser does not support the video tag.
          </video>
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
        <div className="text-white/40 font-black text-6xl tracking-tighter leading-none">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">{title}</h3>
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Process = ({ t, lang }: { t: any, lang: 'en' | 'ku' }) => {
  const isKu = lang === 'ku';
  return (
    <section id="process" className="bg-black py-32 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="text-white/50 font-bold tracking-widest text-sm uppercase">{t.process_badge}</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9] uppercase">
              <span className="block">{t.process_title_1}</span>
              <span className="block text-zinc-500">{t.process_title_2}</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="text-xl md:text-2xl text-zinc-400 max-w-4xl leading-relaxed font-medium">
              <span className="text-2xl md:text-4xl font-black text-white">{t.process_subtitle_bold}</span>
              {t.process_subtitle_rest}
            </motion.div>
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
            <Link to="/onboarding" className="inline-flex items-center gap-4 text-white font-bold text-2xl uppercase tracking-tighter hover:text-zinc-400 transition-colors group">
              {t.start_deployment} 
              <ArrowUpRight className={`w-8 h-8 transition-transform ${isKu ? 'rotate-90 group-hover:-translate-x-2' : 'group-hover:translate-x-2 group-hover:-translate-y-2'}`}/>
            </Link>
        </motion.div>
        
      </div>
    </section>
  );
};

const ValueItem = ({ number, title, text }: { number: string, title: string, text: string }) => (
    <motion.div variants={fadeInUp} className="group border-t border-black/10 pt-8 pb-12">
        <div className="text-zinc-400 font-bold text-sm mb-6 uppercase tracking-widest">{number}</div>
        <h3 className="text-3xl md:text-4xl font-black text-black tracking-tighter uppercase mb-6">{title}</h3>
        <p className="text-zinc-600 text-xl leading-relaxed font-medium">
          {text}
        </p>
    </motion.div>
);

const Values = ({ t }: { t: any }) => {
  return (
    <section id="values" className="py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-24"
        >
          <div className="mb-6">
                <span className="text-zinc-500 font-bold tracking-widest text-sm uppercase">{t.values_badge}</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-black mb-6 tracking-tighter uppercase">{t.values_title}</h2>
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

interface PricingCardProps {
  title: string;
  desc: string;
  highlight?: boolean;
  features: string[];
  t: any;
  isKu: boolean;
}

const PricingCard = ({ title, desc, highlight, features, t, isKu }: PricingCardProps) => {
  const navigate = useNavigate();
  return (
    <motion.div 
      variants={fadeInUp}
      className={`relative flex flex-col p-10 md:p-12 transition-all duration-300 h-full rounded-3xl ${highlight ? 'bg-black text-white shadow-2xl scale-[1.02]' : 'bg-white border border-black/10 text-black hover:border-black/30'}`}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white border border-white/20 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-xl whitespace-nowrap">
          Recommended
        </div>
      )}
      
      <div className="mb-12 mt-2">
        <h3 className="text-4xl font-black mb-4 tracking-tighter uppercase">{title}</h3>
        <p className={`font-medium text-lg leading-relaxed ${highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>{desc}</p>
      </div>

      <ul className="space-y-6 mb-16 flex-1">
      {features.map((feature, idx) => {
        // Simple markdown bold parser for **text**
        const parts = feature.split(/(\*\*.*?\*\*)/g);
        
        return (
          <li key={idx} className="flex items-start gap-4">
            <div className={`mt-1 flex-shrink-0 ${highlight ? 'text-white' : 'text-black'}`}>
              <ArrowRight className={`w-5 h-5 ${isKu ? 'rotate-180' : ''}`} strokeWidth={2.5} />
            </div>
            <span className={`text-base md:text-lg leading-snug font-medium ${highlight ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={i} className={`font-black ${highlight ? 'text-white' : 'text-black'}`}>{part.slice(2, -2)}</strong>;
                }
                return part;
              })}
            </span>
          </li>
        );
      })}
    </ul>

      <button onClick={() => navigate('/onboarding')} className={`w-full py-5 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 ${highlight ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'}`}>
        {t.choose_plan}
      </button>
    </motion.div>
  );
};

const Pricing = ({ t, lang }: { t: any, lang: 'en' | 'ku' }) => {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-8xl font-black text-black mb-8 tracking-tighter uppercase">{t.pricing_title}</h2>
          <p className="text-zinc-500 max-w-3xl mx-auto text-xl md:text-2xl font-medium">
            {t.pricing_subtitle}
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch"
        >
          <PricingCard 
            title={t.plan_1_title}
            desc={t.plan_1_desc}
            features={t.plan_1_features}
            t={t}
            isKu={lang === 'ku'}
          />
          <PricingCard 
            title={t.plan_2_title}
            desc={t.plan_2_desc}
            highlight={true}
            features={t.plan_2_features}
            t={t}
            isKu={lang === 'ku'}
          />
          <PricingCard 
            title={t.plan_3_title}
            desc={t.plan_3_desc}
            features={t.plan_3_features}
            t={t}
            isKu={lang === 'ku'}
          />
          <PricingCard 
            title={t.plan_4_title}
            desc={t.plan_4_desc}
            features={t.plan_4_features}
            t={t}
            isKu={lang === 'ku'}
          />
        </motion.div>
      </div>
    </section>
  );
};

const Footer = ({ t }: { t: any }) => {
  return (
    <footer id="contact" className="bg-black pt-32 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-32">
          
          <div className="max-w-3xl">
            <h2 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              {t.footer_title_1} <br/> 
              <span className="text-zinc-600">{t.footer_title_2}</span>
            </h2>
            <p className="text-zinc-400 text-2xl md:text-3xl mb-12 font-medium">
              {t.footer_subtitle}
            </p>
            <div className="flex flex-col gap-2 mt-8">
              <a href="mailto:contact@chnglla.com" className="inline-block text-2xl md:text-4xl font-black text-white hover:text-zinc-400 transition-colors uppercase">
                contact@chnglla.com
              </a>
              <a href="tel:+9647730009898" className="inline-block text-2xl md:text-4xl font-black text-white hover:text-zinc-400 transition-colors uppercase">
                +964 773 000 9898
              </a>
              <a href="tel:+9647703962686" className="inline-block text-2xl md:text-4xl font-black text-white hover:text-zinc-400 transition-colors uppercase">
                +964 770 396 2686
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-zinc-500 font-bold text-sm uppercase tracking-wider">
          <p>© {new Date().getFullYear()} {t.brand}. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0 font-bold uppercase">
             <a href="https://www.linkedin.com/company/chnglla/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
             <a href="https://www.facebook.com/profile.php?id=61573153085767" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a>
             <a href="https://www.instagram.com/chnglla/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Landing({ lang, setLang, t }: { lang: 'en' | 'ku', setLang: (l: 'en' | 'ku') => void, t: any }) {
  return (
    <>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} lang={lang} />
      <Values t={t} />
      <Process t={t} lang={lang} />
      <Pricing t={t} lang={lang} />
      <Footer t={t} />
    </>
  );
}
