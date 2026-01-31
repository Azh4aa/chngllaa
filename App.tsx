import React, { useState, useEffect } from 'react';
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
  Star
} from 'lucide-react';

/* --- Components --- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-black/50 backdrop-blur-xl border-white/5' : 'bg-transparent border-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <Hexagon className="w-8 h-8 text-white fill-white/10 relative z-10" strokeWidth={1.5} />
            </div>
            <span className="font-bold text-xl tracking-tighter text-white">CHNGLLA</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <NavLink href="#process">How it Works</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#values">Why Us</NavLink>
              <div className="pl-6">
                <a href="#contact" className="bg-white text-black hover:bg-zinc-200 transition-all px-5 py-2 rounded-full text-sm font-bold tracking-tight transform hover:scale-105 active:scale-95">
                  Get Started
                </a>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-white/5 absolute w-full">
          <div className="px-4 pt-4 pb-8 space-y-2">
            <MobileNavLink onClick={() => setIsOpen(false)} href="#process">How it Works</MobileNavLink>
            <MobileNavLink onClick={() => setIsOpen(false)} href="#pricing">Pricing</MobileNavLink>
            <MobileNavLink onClick={() => setIsOpen(false)} href="#values">Why Us</MobileNavLink>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-black bg-white block w-full text-center px-3 py-3 rounded-lg font-bold mt-4">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="text-zinc-400 hover:text-white transition-colors px-4 py-2 text-sm font-medium tracking-tight">
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick: () => void }) => (
  <a href={href} onClick={onClick} className="text-zinc-300 hover:text-white block px-3 py-3 text-lg font-medium border-b border-white/5">
    {children}
  </a>
);

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 hex-bg opacity-40 pointer-events-none"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-sm animate-fade-in-up hover:border-white/20 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Accepting New Clients</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
          We Do The Work. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-700">
            You Get The Fame.
          </span>
        </h1>

        <p className="mt-2 max-w-2xl text-lg md:text-xl text-zinc-400 font-light leading-relaxed tracking-tight">
          Your entire content strategy, completely automated. 
          We turn your long-form content into a viral hive of clips using human expertise, not generic AI.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#pricing" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-200 bg-white rounded-full focus:outline-none hover:bg-zinc-200 hover:scale-105">
            View Plans
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#process" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 focus:outline-none backdrop-blur-sm">
            How it Works
          </a>
        </div>

        {/* Social Proof / Trust */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">Trusted by creators from</span>
           <div className="flex gap-8 items-center">
              <span className="text-zinc-300 font-bold text-lg tracking-tight">YouTube</span>
              <span className="text-zinc-300 font-bold text-lg tracking-tight">Twitch</span>
              <span className="text-zinc-300 font-bold text-lg tracking-tight">Kick</span>
              <span className="text-zinc-300 font-bold text-lg tracking-tight">Spotify</span>
           </div>
        </div>
      </div>
    </div>
  );
};

const ProcessStep = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="relative pl-8 md:pl-0">
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 group">
      {/* Icon/Number */}
      <div className="hidden md:flex flex-shrink-0 flex-col items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 text-white font-bold text-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-indigo-500/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-500">
          {number}
        </div>
        <div className="h-full w-px bg-gradient-to-b from-zinc-800 to-transparent mt-4 min-h-[150px]"></div>
      </div>

      {/* Content */}
      <div className="pb-12 md:pb-20 pt-1">
        <div className="md:hidden mb-4 inline-block px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-sm font-bold">{number}</div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h3>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">{description}</p>
      </div>
    </div>
  </div>
);

const Process = () => {
  return (
    <section id="process" className="bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Sticky Left Side */}
          <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-20 lg:py-0">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <Hexagon className="w-5 h-5 text-indigo-500 fill-indigo-500/20" />
                <span className="text-indigo-400 font-medium tracking-wide text-sm uppercase">The Process</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
                A Hive of <br/> Content.
              </h2>
              <p className="text-xl text-zinc-400 mb-10 max-w-md leading-relaxed">
                A single viral video is luck. Hundreds of them is a strategy. We construct an unavoidable presence using a proven pipeline.
              </p>
              
              <div className="grid grid-cols-2 gap-4 max-w-md">
                 <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm">
                    <Layers className="w-8 h-8 text-indigo-400 mb-4" />
                    <div className="text-3xl font-bold text-white tracking-tight">3.5k+</div>
                    <div className="text-sm text-zinc-500 font-medium mt-1">Clips per month</div>
                 </div>
                 <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm">
                    <TrendingUp className="w-8 h-8 text-indigo-400 mb-4" />
                    <div className="text-3xl font-bold text-white tracking-tight">75M+</div>
                    <div className="text-sm text-zinc-500 font-medium mt-1">Total Views</div>
                 </div>
              </div>
            </div>
          </div>

          {/* Scrolling Right Side */}
          <div className="lg:w-1/2 lg:py-32 pb-24 space-y-20 lg:space-y-32">
            <ProcessStep 
              number="01"
              title="You Do Almost Nothing"
              description="Simply grant us access to your raw, long-form content. Whether it's podcasts, streams, or raw footage. That's it. Your work is done. No uploading to Google Drive manually, we pull directly from your source."
            />
            <ProcessStep 
              number="02"
              title="We Build Your Content Army"
              description="We create hundreds—or thousands—of compelling clips. No AI fluff. Real editors, strategic hooks, and perfect optimization for viral reach. We identify the moments that will actually retain attention."
            />
            <ProcessStep 
              number="03"
              title="We Deploy & Dominate"
              description="We manage and post your content avalanche from a network of accounts (sub-accounts), making you impossible to ignore on TikTok, Shorts, and Reels. You become ubiquitous in your niche."
            />
            
            {/* CTA at end of scroll */}
            <div className="pl-0 md:pl-20 pt-10">
               <a href="#contact" className="inline-flex items-center gap-3 text-white font-bold text-lg hover:text-indigo-400 transition-colors group">
                  Start Deployment <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform"/>
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  clips: string;
  views: string;
  highlight?: boolean;
  features: string[];
}

const PricingCard = ({ title, price, clips, views, highlight, features }: PricingCardProps) => (
  <div className={`relative flex flex-col p-8 rounded-3xl transition-all duration-500 h-full group ${highlight ? 'glass-card border-indigo-500/30 shadow-[0_0_60px_-15px_rgba(99,102,241,0.2)] md:-mt-8 md:mb-8' : 'bg-zinc-950/50 border border-white/5 hover:border-white/10'}`}>
    {highlight && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-5 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-indigo-500/20">
        Most Popular
      </div>
    )}
    
    <div className="mb-8">
      <h3 className={`text-lg font-bold mb-3 uppercase tracking-wider ${highlight ? 'text-indigo-400' : 'text-zinc-500'}`}>{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter">{price}</span>
        <span className="text-zinc-600 font-medium">/mo</span>
      </div>
    </div>

    <div className="space-y-4 mb-10">
      <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
        <div className="p-2 rounded-lg bg-black text-indigo-400">
           <MonitorPlay className="w-5 h-5" />
        </div>
        <div>
           <div className="font-bold text-white text-lg">{clips}</div>
           <div className="text-xs text-zinc-500 uppercase tracking-wide">Viral Clips</div>
        </div>
      </div>
      <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
        <div className="p-2 rounded-lg bg-black text-indigo-400">
           <Zap className="w-5 h-5" />
        </div>
        <div>
           <div className="font-bold text-white text-lg">{views}</div>
           <div className="text-xs text-zinc-500 uppercase tracking-wide">Guaranteed Views</div>
        </div>
      </div>
    </div>

    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full mb-8"></div>

    <ul className="space-y-4 mb-10 flex-1">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlight ? 'text-indigo-400' : 'text-zinc-600'}`} />
          <span className="text-zinc-300 text-sm leading-snug font-medium">{feature}</span>
        </li>
      ))}
    </ul>

    <button className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${highlight ? 'bg-white text-black hover:bg-zinc-200' : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'}`}>
      Choose Plan
    </button>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Choose Your Level.</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Scale your presence. Dominate your niche. Simple, transparent pricing for total market domination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          <PricingCard 
            title="Starter"
            price="$7k"
            clips="750"
            views="20M+"
            features={[
              "Created & Posted for you",
              "Dedicated Account Manager",
              "Monthly Strategy Call",
              "Platform Optimization",
              "Basic Analytics"
            ]}
          />
          <PricingCard 
            title="Enterprise"
            price="$19k"
            clips="2,600"
            views="50M+"
            highlight={true}
            features={[
              "Everything in Starter",
              "Priority Support 24/7",
              "Weekly Strategy Calls",
              "Real-time Dashboard",
              "Trend Jacking & Viral Hooks",
              "Sub-account Management"
            ]}
          />
          <PricingCard 
            title="Dominion"
            price="$29k"
            clips="3,500"
            views="75M+"
            features={[
              "Everything in Enterprise",
              "Dedicated Creative Team",
              "Daily Strategy Optimization",
              "Custom Brand Integration",
              "Total Market Domination Plan",
              "Competitor Analysis"
            ]}
          />
        </div>
        
        <div className="mt-20 text-center">
           <a href="#contact" className="text-zinc-500 text-sm hover:text-zinc-300 transition-colors border-b border-transparent hover:border-zinc-300 pb-0.5">Need a custom volume plan? Talk to sales.</a>
        </div>
      </div>
    </section>
  );
};

const ValueItem = ({ icon: Icon, title, text }: { icon: any, title: string, text: string }) => (
    <div className="group p-8 rounded-3xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 transition-colors">
        <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-zinc-950 rounded-xl border border-white/10 group-hover:border-indigo-500/50 transition-colors">
            <Icon className="w-6 h-6 text-white group-hover:text-indigo-400 transition-colors" />
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
        </div>
        <p className="text-zinc-400 text-lg leading-relaxed">
        {text}
        </p>
    </div>
);

const Values = () => {
  return (
    <section id="values" className="py-32 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 text-indigo-500 fill-indigo-500/20" />
                <span className="text-indigo-400 font-medium tracking-wide text-sm uppercase">Why Us</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">Effortless Authority.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ValueItem 
                icon={MousePointer2}
                title="True 'Done-For-You'"
                text="You don't edit, schedule, or post. You don't even log in. We manage everything. We are not a tool; we are your team. You just watch your audience grow."
            />
            <ValueItem 
                icon={Layers}
                title="Volume Is The New Voice"
                text="A single viral video is luck. Hundreds of them is a strategy. We position you as an accountable, creative, and transformative figure by making you an unavoidable presence."
            />
             <ValueItem 
                icon={Play}
                title="Platform Native"
                text="We don't repurpose blindly. We re-engineer content specifically for the algorithm of TikTok, Reels, and Shorts to maximize retention and shareability."
            />
             <ValueItem 
                icon={Hexagon}
                title="Brand Safety"
                text="While we aim for virality, we respect your brand voice. We work within your guidelines to ensure fame doesn't come at the cost of your reputation."
            />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-black pt-32 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
              Your Audience <br/> <span className="text-zinc-600">Awaits.</span>
            </h2>
            <p className="text-zinc-400 text-xl mb-12 max-w-lg">
              Stop leaving fame on the table. Let's build your content engine today.
            </p>
            <a href="mailto:contact@chnglla.com" className="inline-block border-b-2 border-white pb-2 text-3xl md:text-4xl font-bold text-white hover:text-indigo-400 hover:border-indigo-400 transition-all">
              contact@chnglla.com
            </a>
          </div>

          <div className="flex flex-col gap-10">
             <div className="flex gap-4">
                 {[1,2,3].map((i) => (
                     <div key={i} className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:scale-110 transition-all cursor-pointer">
                        <div className="w-6 h-6 bg-zinc-600 rounded-full"></div>
                     </div>
                 ))}
             </div>
             <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">YouTube</a>
             </div>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Chnglla Creative Clipping.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <Hero />
      <Process />
      <Pricing />
      <Values />
      <Footer />
    </div>
  );
}