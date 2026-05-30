import React, { useState, useEffect, useRef } from 'react';
import { productMenuPages } from '../pages';

const Header = ({ onOpenInquiry, setCurrentPage, setScrollTarget }) => {
  const [mobileOpen, setMobileOpen]           = useState(false);
  const [productOpen, setProductOpen]         = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [scrolled, setScrolled]               = useState(false);
  const productRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const onClick = (e) => {
      if (productRef.current && !productRef.current.contains(e.target)) setProductOpen(false);
    };
    if (productOpen) document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [productOpen]);

  const closeAll = () => { setMobileOpen(false); setProductOpen(false); setMobileProductOpen(false); };
  const goPage    = (key) => { setCurrentPage(key); closeAll(); };
  const goSection = (id)  => { setCurrentPage('home'); setScrollTarget(id); closeAll(); };

  const navLinks = [
    { label: 'Features',    onClick: () => goSection('features')    },
    { label: 'How it works',onClick: () => goSection('how-it-works')},
    { label: 'Pricing',     onClick: () => goSection('pricing')     },
    { label: 'Blog',        onClick: () => goSection('blog')        },
  ];

  const headerBg = scrolled
    ? 'bg-white/95 backdrop-blur-xl border-b border-[#F1F5F9] shadow-sm shadow-black/5'
    : 'bg-transparent border-b border-transparent';

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="mx-3 px-4 md:px-14 h-16 sm:h-[72px] flex justify-between items-center">

        {/* ── Logo ── */}
        <button onClick={() => goPage('home')}
                className="flex items-center gap-2.5 shrink-0 group"
                aria-label="Go home">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
               style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}>
            <i className="fa-solid fa-bolt text-white text-sm"></i>
          </div>
          <span className="font-bold text-lg tracking-tight"
                style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: '#0F172A' }}>
            Bu<span style={{ color: '#6366F1' }}>Marka</span>
          </span>
        </button>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ label, onClick }) => (
            <button key={label} onClick={onClick}
                    className="px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150"
                    style={{ color: '#64748B' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#0F172A'; e.currentTarget.style.background = '#F9FAFB'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#64748B'; e.currentTarget.style.background = 'transparent'; }}>
              {label}
            </button>
          ))}

          {/* Products dropdown */}
          <div ref={productRef} className="relative">
            <button onClick={() => setProductOpen(v => !v)}
                    className="px-3.5 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-all duration-150"
                    style={{ color: '#64748B' }}
                    aria-haspopup="menu" aria-expanded={productOpen}>
              Products
              <i className={`fa-solid fa-chevron-down text-[9px] transition-transform duration-200
                             ${productOpen ? 'rotate-180' : ''}`}></i>
            </button>

            <div role="menu"
                 className={`absolute right-0 mt-2 w-72 rounded-2xl p-2 transition-all duration-200 origin-top-right
                             ${productOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
                 style={{ background: '#FFFFFF', border: '1px solid #E2E8F0',
                          boxShadow: '0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)' }}>
              <button onClick={() => goPage('product')}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left
                                 hover:bg-white/5 transition group">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(99,102,241,0.15)' }}>
                  <i className="fa-solid fa-grip text-xs" style={{ color: '#6366F1' }}></i>
                </span>
                <span>
                  <span className="block text-sm font-semibold" style={{ color: '#0F172A' }}>All Products</span>
                  <span className="block text-[11px]" style={{ color: '#64748B' }}>Explore the full suite</span>
                </span>
              </button>
              <div className="my-1" style={{ borderTop: '1px solid #1C1F35' }}></div>
              <div className="max-h-[56vh] overflow-y-auto">
                {productMenuPages.map(p => (
                  <button key={p.key} onClick={() => goPage(p.key)}
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition"
                          style={{ color: '#64748B' }}
                          onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0"
                          style={{ background: '#EEF2FF', color: '#6366F1' }}>
                      <i className={p.icon || 'fa-solid fa-circle'}></i>
                    </span>
                    <span className="text-sm">{p.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* ── Right cluster ── */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={onOpenInquiry}
                  className="hidden sm:block px-4 py-2 rounded-lg text-sm font-medium btn-ghost">
            Sign in
          </button>
          <button onClick={onOpenInquiry}
                  className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-sm font-semibold text-white btn-violet">
            Start free trial
          </button>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(v => !v)}
                  className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center
                             text-[#94A3B8] hover:bg-white/5 transition"
                  aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={mobileOpen}>
            <span className="relative w-5 h-3.5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full rounded bg-current transition-all duration-300
                               ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
              <span className={`block h-0.5 w-full rounded bg-current transition-all duration-300
                               ${mobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full rounded bg-current transition-all duration-300
                               ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
            </span>
          </button>
        </div>
      </div>

      {/* ── Mobile backdrop ── */}
      <div onClick={() => setMobileOpen(false)}
           className={`lg:hidden fixed inset-0 top-16 sm:top-[72px] bg-black/50 backdrop-blur-sm
                       transition-opacity duration-300
                       ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>

      {/* ── Mobile menu panel ── */}
      <div className={`lg:hidden fixed left-0 right-0 top-16 sm:top-[72px] border-t overflow-y-auto
                       transition-all duration-300 origin-top
                       ${mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'}`}
           style={{ background: '#FFFFFF', borderColor: '#F1F5F9',
                    maxHeight: 'calc(100vh - 4.5rem)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}>
        <nav className="px-5 py-3 flex flex-col divide-y" style={{ borderColor: '#1C1F35' }}>

          <button onClick={() => goPage('home')}
                  className="text-left py-3.5 font-semibold flex justify-between items-center transition"
                  style={{ color: '#0F172A' }}>
            Home <i className="fa-solid fa-chevron-right text-xs" style={{ color: '#94A3B8' }}></i>
          </button>

          {navLinks.map(({ label, onClick }) => (
            <button key={label} onClick={onClick}
                    className="text-left py-3.5 font-medium flex justify-between items-center transition"
                    style={{ color: '#64748B' }}>
              {label} <i className="fa-solid fa-chevron-right text-xs" style={{ color: '#94A3B8' }}></i>
            </button>
          ))}

          {/* Products accordion */}
          <div className="py-2">
            <button onClick={() => setMobileProductOpen(v => !v)}
                    className="w-full text-[#94A3B8] font-medium py-2 flex justify-between items-center
                               hover:text-white transition"
                    aria-expanded={mobileProductOpen}>
              Products
              <i className={`fa-solid fa-chevron-down text-xs text-[#475569] transition-transform
                             ${mobileProductOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <div className={`overflow-hidden transition-all duration-300
                            ${mobileProductOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <button onClick={() => goPage('product')}
                      className="w-full flex items-center gap-3 px-2 py-2.5 rounded-lg text-left hover:bg-white/5 transition">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(99,102,241,0.15)', color: '#6366F1' }}>
                  <i className="fa-solid fa-grip text-xs"></i>
                </span>
                <span className="text-sm font-semibold text-white">All Products</span>
              </button>
              {productMenuPages.map(p => (
                <button key={p.key} onClick={() => goPage(p.key)}
                        className="w-full flex items-center gap-3 px-2 py-2 rounded-lg text-left hover:bg-white/5 transition">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px]"
                        style={{ background: '#1C1F35', color: '#6366F1' }}>
                    <i className={p.icon || 'fa-solid fa-circle'}></i>
                  </span>
                  <span className="text-sm text-[#94A3B8]">{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => { onOpenInquiry(); closeAll(); }}
                  className="mt-3 mb-3 py-3 rounded-xl text-white font-semibold btn-violet flex items-center justify-center gap-2">
            Start free trial <i className="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
