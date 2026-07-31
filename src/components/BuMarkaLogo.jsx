import React from 'react';

const BuMarkaLogo = ({ markClassName = 'h-8 w-8', textClassName = 'text-lg', showText = true }) => (
  <>
    <svg viewBox="0 0 200 130" className={markClassName} aria-hidden="true">
      <defs>
        
        <linearGradient id="bmOuter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="bmInnerA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#312E81" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient id="bmInnerB" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#A5B4FC" />
        </linearGradient>
      </defs>
      <path d="M100,8 L192,65 L100,122 L8,65 Z"
            fill="none" stroke="url(#bmOuter)" strokeWidth="11"
            strokeLinejoin="round" strokeLinecap="round" />
      <path d="M112,34 L146,65 L112,96 L78,65 Z"
            fill="none" stroke="url(#bmInnerA)" strokeWidth="9"
            strokeLinejoin="round" strokeLinecap="round" />
      <path d="M88,34 L122,65 L88,96 L54,65 Z"
            fill="none" stroke="url(#bmInnerB)" strokeWidth="9"
            strokeLinejoin="round" strokeLinecap="round" opacity="0.9" />
    </svg>
    {showText && (
      <span className={`font-bold tracking-tight ${textClassName}`}
            style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: '#0F172A' }}>
        Bu<span style={{ color: '#6366F1' }}>Marka</span>
      </span>
    )}
  </>
);

export default BuMarkaLogo;
