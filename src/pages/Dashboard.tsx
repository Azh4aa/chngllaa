import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, Download, Settings, LogOut, Video, Activity, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard({ t }: { t: any }) {
  return (
    <div className="min-h-screen bg-zinc-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-zinc-200 flex flex-col">
        <div className="p-6 border-b border-zinc-100 flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center overflow-hidden">
            <img src="/logo.png" alt="Chnglla Logo" className="w-full h-full object-cover bg-black" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </div>
          <Link to="/" className="font-black text-2xl tracking-tighter uppercase text-black">
            {t.brand}
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-black text-white rounded-xl font-bold text-sm tracking-wide transition-colors">
            <LayoutDashboard className="w-5 h-5" /> Overview
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-zinc-100 hover:text-black rounded-xl font-bold text-sm tracking-wide transition-colors">
            <Upload className="w-5 h-5" /> Upload Raw
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-zinc-100 hover:text-black rounded-xl font-bold text-sm tracking-wide transition-colors">
            <Video className="w-5 h-5" /> Deliverables
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-zinc-100 hover:text-black rounded-xl font-bold text-sm tracking-wide transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </a>
        </nav>
        <div className="p-4 border-t border-zinc-100">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-bold text-sm tracking-wide transition-colors">
            <LogOut className="w-5 h-5" /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">Welcome Back.</h1>
            <p className="text-zinc-500 font-medium text-lg">Here's how your content engine is performing.</p>
          </div>
          <div className="bg-white border border-zinc-200 px-6 py-3 rounded-full flex items-center gap-3 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">Pro Plan Active</span>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm">
            <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4 flex justify-between items-center">
              Total Views <Activity className="w-4 h-4" />
            </div>
            <div className="text-5xl font-black tracking-tighter">1.2M</div>
            <div className="mt-2 text-emerald-500 text-sm font-bold">+24% this month</div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm">
            <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4 flex justify-between items-center">
              Clips Delivered <Video className="w-4 h-4" />
            </div>
            <div className="text-5xl font-black tracking-tighter">48</div>
            <div className="mt-2 text-zinc-500 text-sm font-bold">out of 60 / month</div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-black p-6 rounded-3xl text-white shadow-xl">
            <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">
              Next Drop
            </div>
            <div className="text-5xl font-black tracking-tighter">Tomorrow</div>
            <button className="mt-6 w-full py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-colors">
              View Schedule
            </button>
          </motion.div>
        </div>

        {/* Recent Deliverables */}
        <div className="mb-8">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">Recent Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[9/16] bg-zinc-200 rounded-2xl mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Download className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8" />
                  </div>
                </div>
                <div className="text-sm font-bold text-black">Clip_Batch_{i}.mp4</div>
                <div className="text-xs text-zinc-500 font-medium">Ready for TikTok</div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
