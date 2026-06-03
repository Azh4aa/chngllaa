import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Login({ t }: { t: any }) {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login, redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-8">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-black font-bold text-sm uppercase tracking-widest transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Site
        </Link>
      </div>
      
      <div className="flex-1 flex flex-col justify-center items-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-black tracking-tighter uppercase mb-4">Client Portal</h1>
            <p className="text-zinc-500 font-medium">Log in to manage your content engine.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all text-black"
                placeholder="hello@company.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Password</label>
              <input 
                type="password" 
                required
                className="w-full px-4 py-4 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all text-black"
                placeholder="••••••••"
              />
            </div>
            
            <button type="submit" className="w-full py-4 rounded-xl bg-black text-white font-bold text-sm tracking-widest uppercase hover:bg-zinc-800 transition-colors">
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-zinc-500 text-sm font-medium">Don't have an account? <Link to="/onboarding" className="text-black font-bold">Start here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
