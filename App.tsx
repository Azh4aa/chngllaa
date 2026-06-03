import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { translations } from './src/lib/translations';

// Pages
import Landing from './src/pages/Landing';
import Login from './src/pages/Login';
import Onboarding from './src/pages/Onboarding';
import Dashboard from './src/pages/Dashboard';

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
    <BrowserRouter>
      <div className={`min-h-screen bg-white text-black selection:bg-black selection:text-white ${lang === 'ku' ? 'font-ku' : 'font-en'}`}>
        <Routes>
          <Route path="/" element={<Landing lang={lang} setLang={handleSetLang} t={t} />} />
          <Route path="/login" element={<Login t={t} />} />
          <Route path="/onboarding" element={<Onboarding t={t} />} />
          <Route path="/dashboard" element={<Dashboard t={t} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}