import React from 'react';

const bars = [28, 40, 33, 55, 48, 68, 52, 76, 61, 82, 70, 95];

const AppPreview = () => (
  <div className="preview-shadow rounded-2xl overflow-hidden"
       style={{ border: '1px solid #E2E8F0' }}>

    {/* Browser chrome */}
    <div style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '10px 16px' }}
         className="flex items-center gap-3">
      <div className="flex gap-1.5 shrink-0">
        <span className="block rounded-full" style={{ width: 10, height: 10, background: '#FECACA' }}></span>
        <span className="block rounded-full" style={{ width: 10, height: 10, background: '#FEF3C7' }}></span>
        <span className="block rounded-full" style={{ width: 10, height: 10, background: '#D1FAE5' }}></span>
      </div>
      <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg"
           style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
        <i className="fa-solid fa-lock text-[9px]" style={{ color: '#94A3B8' }}></i>
        <span style={{ fontSize: 11, color: '#94A3B8' }}>app.bumarka.io/overview</span>
      </div>
    </div>

    {/* Dashboard */}
    <div style={{ background: '#FFFFFF', padding: 20 }}>

      {/* Header row */}
      <div className="flex justify-between items-center" style={{ marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            Platform Overview
          </div>
          <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 1 }}>May 2025</div>
        </div>
        <div className="flex gap-2">
          <div style={{ fontSize: 11, background: '#F1F5F9', color: '#64748B', padding: '5px 10px', borderRadius: 8, border: '1px solid #E2E8F0' }}>
            Export
          </div>
          <div style={{ fontSize: 11, background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', color: 'white', padding: '5px 12px', borderRadius: 8, fontWeight: 500 }}>
            + New Deal
          </div>
        </div>
      </div>

      {/* KPI cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 16 }}>
        {[
          { label: 'Pipeline',  value: '$307K',  delta: '↑ +14%', color: '#6366F1' },
          { label: 'MRR',       value: '$48.6K', delta: '↑ +21%', color: '#10B981' },
          { label: 'CSAT',      value: '96.8%',  delta: '↑ +2%',  color: '#F59E0B' },
        ].map((k, i) => (
          <div key={i} style={{ background: '#F9FAFB', borderRadius: 10, padding: '10px 12px', border: '1px solid #F1F5F9' }}>
            <div style={{ fontSize: 10, color: '#94A3B8', marginBottom: 4, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {k.label}
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#0F172A', fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1 }}>
              {k.value}
            </div>
            <div style={{ fontSize: 10, color: k.color, marginTop: 4, fontWeight: 500 }}>{k.delta}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div style={{ background: '#F9FAFB', borderRadius: 10, padding: '12px 14px', border: '1px solid #F1F5F9', marginBottom: 14 }}>
        <div className="flex justify-between items-center" style={{ marginBottom: 8 }}>
          <span style={{ fontSize: 11, color: '#64748B', fontWeight: 500 }}>Revenue Growth</span>
          <span style={{ fontSize: 10, color: '#6366F1', background: '#EEF2FF', padding: '2px 8px', borderRadius: 4, fontWeight: 500 }}>2025</span>
        </div>
        <div className="flex items-end gap-0.5" style={{ height: 44 }}>
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm"
                 style={{
                   height: `${h}%`,
                   background: i === bars.length - 1
                     ? 'linear-gradient(180deg, #818CF8, #6366F1)'
                     : i >= bars.length - 4
                       ? 'rgba(99,102,241,0.3)'
                       : '#E0E7FF',
                 }}></div>
          ))}
        </div>
      </div>

      {/* Recent deals */}
      <div>
        <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 500, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Recent Deals
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {[
            { i: 'S', name: 'Stripe Inc.',   val: '$24k ARR', st: 'Won',    bg: '#F0FDF4', tc: '#16A34A', ic: '#10B981' },
            { i: 'N', name: 'Nexify Corp.',  val: '$8k ARR',  st: 'Active', bg: '#EEF2FF', tc: '#4F46E5', ic: '#6366F1' },
            { i: 'T', name: 'TechVentures', val: '$3k ARR',  st: 'Active', bg: '#EEF2FF', tc: '#4F46E5', ic: '#8B5CF6' },
          ].map((d, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="flex items-center justify-center rounded-full shrink-0"
                   style={{ width: 26, height: 26, background: d.ic, color: 'white', fontSize: 9, fontWeight: 700 }}>
                {d.i}
              </div>
              <span style={{ fontSize: 12, color: '#0F172A', fontWeight: 500, flex: 1 }}>{d.name}</span>
              <span style={{ fontSize: 11, color: '#94A3B8' }}>{d.val}</span>
              <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 4, background: d.bg, color: d.tc, fontWeight: 500 }}>
                {d.st}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);

/* ── Floating badge (subtle annotation around the card) ── */
const FloatingBadge = ({ icon, label, value, color, style }) => (
  <div className="absolute hidden xl:flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl"
       style={{ background: 'white', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.07)', ...style }}>
    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
         style={{ background: `${color}15` }}>
      <i className={`fa-solid ${icon} text-xs`} style={{ color }}></i>
    </div>
    <div>
      <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ fontSize: 10, color: '#94A3B8', marginTop: 1 }}>{label}</div>
    </div>
  </div>
);

const Hero = ({ onOpenInquiry, setScrollTarget }) => {
  const watchDemo = () => {
    if (setScrollTarget) setScrollTarget('features');
  };

  return (
    <section className="relative hero-bg overflow-hidden"
             style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>

      {/* Background layers */}
      <div className="absolute inset-0 hero-grid pointer-events-none"></div>
      <div className="absolute inset-0 hero-glow-left pointer-events-none"></div>
      <div className="absolute inset-0 hero-glow-right pointer-events-none"></div>

      {/* Abstract decorative shapes */}
      {/* Large blurred blob — top right */}
      <div className="absolute pointer-events-none shape-pulse"
           style={{ top: '-80px', right: '-60px', width: 340, height: 340,
                    borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
                    background: 'radial-gradient(circle, rgba(139,92,246,0.13) 0%, rgba(99,102,241,0.06) 60%, transparent 100%)',
                    filter: 'blur(2px)' }}>
      </div>

      {/* Spinning ring — top left */}
      <div className="absolute pointer-events-none shape-spin hidden md:block"
           style={{ top: 80, left: -30, width: 160, height: 160,
                    borderRadius: '50%',
                    border: '1.5px dashed rgba(99,102,241,0.18)',
                    opacity: 0.7 }}>
      </div>
      {/* Inner dot on the ring for visual interest */}
      <div className="absolute pointer-events-none hidden md:block"
           style={{ top: 96, left: -14, width: 8, height: 8,
                    borderRadius: '50%',
                    background: 'rgba(99,102,241,0.35)' }}>
      </div>

      {/* Medium blob — bottom left */}
      <div className="absolute pointer-events-none shape-drift-2 hidden lg:block"
           style={{ bottom: 80, left: '4%', width: 200, height: 200,
                    borderRadius: '45% 55% 60% 40% / 55% 45% 55% 45%',
                    background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)',
                    filter: 'blur(1px)' }}>
      </div>

      {/* Small triangle accent — upper mid */}
      <div className="absolute pointer-events-none shape-bob hidden lg:block"
           style={{ top: 140, left: '38%',
                    width: 0, height: 0,
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderBottom: '17px solid rgba(139,92,246,0.18)',
                    opacity: 0.8 }}>
      </div>

      {/* Floating rounded square — right mid */}
      <div className="absolute pointer-events-none shape-drift-3 hidden xl:block"
           style={{ top: '42%', right: '3%', width: 48, height: 48,
                    borderRadius: 12,
                    border: '1.5px solid rgba(99,102,241,0.22)',
                    transform: 'rotate(18deg)',
                    background: 'rgba(238,242,255,0.5)' }}>
      </div>

      {/* Tiny circle cluster — scattered */}
      {[
        { top: '18%', left: '12%', size: 7, opacity: 0.3 },
        { top: '62%', left: '8%',  size: 5, opacity: 0.22 },
        { top: '30%', right: '18%', size: 6, opacity: 0.28 },
        { top: '75%', right: '12%', size: 9, opacity: 0.2 },
      ].map((dot, i) => (
        <div key={i} className="absolute pointer-events-none hidden md:block shape-pulse"
             style={{ top: dot.top, left: dot.left, right: dot.right,
                      width: dot.size, height: dot.size,
                      borderRadius: '50%',
                      background: `rgba(99,102,241,${dot.opacity})` }}>
        </div>
      ))}

      {/* Content */}
      <div className="relative mx-3 px-4 md:px-14">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: copy */}
          <div className="flex-none w-full lg:w-[46%] text-center lg:text-left"
               data-aos="fade-up" data-aos-duration="700">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-medium"
                 style={{ background: '#EEF2FF', color: '#4F46E5', border: '1px solid #C7D2FE' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#10B981' }}></span>
              Trusted by 300+ travel & hospitality businesses
            </div>

            {/* Headline */}
            <h1 className="leading-[1.1] tracking-tight mb-5"
                style={{
                  fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
                  fontSize: 'clamp(1.6rem, 3.4vw, 2.6rem)',
                  fontWeight: 800,
                  color: '#0F172A',
                }}>
              The complete software suite{' '}
              <br className="hidden sm:block" />
              for{' '}
              <span className="gradient-text">travel & hospitality</span>
              <br className="hidden sm:block" />
              {' '}
              <span className="gradient-text">businesses.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
               style={{ color: '#64748B' }}>
              Hotel Booking, Travel Management, Fleet Operations, HR, Accounting,
              and more — purpose-built software that runs your entire business from one place.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <button onClick={onOpenInquiry}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-base font-semibold
                                 text-white btn-violet inline-flex items-center justify-center gap-2">
                Start free trial
                <i className="fa-solid fa-arrow-right text-sm"></i>
              </button>
              <button onClick={watchDemo}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-base font-medium
                                 btn-ghost inline-flex items-center justify-center gap-2.5">
                <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: '#EEF2FF' }}>
                  <i className="fa-solid fa-play text-[9px] ml-0.5" style={{ color: '#6366F1' }}></i>
                </span>
                See a demo
              </button>
            </div>

            {/* Social proof micro-line */}
            <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {['#10B981', '#6366F1', '#F59E0B', '#EC4899'].map((c, i) => (
                  <div key={i}
                       className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[9px] font-bold text-white"
                       style={{ background: c, borderColor: 'white' }}>
                    {['S', 'M', 'P', 'J'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm" style={{ color: '#94A3B8' }}>
                <span className="font-semibold" style={{ color: '#0F172A' }}>300+</span> businesses onboarded this year
              </p>
            </div>
          </div>

          {/* Right: single clean app preview */}
          <div className="flex-1 w-full relative"
               data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">

            {/* Floating badges */}
            <FloatingBadge
              icon="fa-circle-check"
              label="SLA compliance"
              value="97.4%"
              color="#10B981"
              style={{ top: -18, left: -8 }}
            />
            <FloatingBadge
              icon="fa-bolt"
              label="Workflows automated"
              value="2.5M+"
              color="#6366F1"
              style={{ bottom: 20, right: -8 }}
            />

            <AppPreview />
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
           style={{ background: 'linear-gradient(to bottom, transparent, #FFFFFF)' }}></div>
    </section>
  );
};

export default Hero;
