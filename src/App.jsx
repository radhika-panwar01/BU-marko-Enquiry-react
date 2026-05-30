import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import { PAGES, isValidPage } from './pages';
import marketing1 from './assets/images/marketing1.png';
import marketing2 from './assets/images/marketing2.png';
import marketing3 from './assets/images/marketing3.png';

/* ─────────────────────────────────────────────
   Animated counter
───────────────────────────────────────────── */
const AnimatedNumber = ({ target, prefix = '', suffix = '', decimals = 0 }) => {
  const [value, setValue] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const duration = 2000;
      let start = null;
      const step = (ts) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setValue(ease * target);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  const display = decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString();

  return <span ref={nodeRef}>{prefix}{display}{suffix}</span>;
};

const statsData = [
  { target: 300,  suffix: '+',  decimals: 0, label: 'Businesses powered globally', icon: 'fa-building'      },
  { target: 1.8,  suffix: 'M+', decimals: 1, label: 'Bookings managed annually',   icon: 'fa-calendar-check'},
  { target: 99.9, suffix: '%',  decimals: 1, label: 'Platform uptime SLA',          icon: 'fa-shield-halved' },
  { target: 8,    suffix: '',   decimals: 0, label: 'Integrated software modules',  icon: 'fa-cubes'         },
];

/* ─────────────────────────────────────────────
   Feature-tab UI panels — light themed
───────────────────────────────────────────── */

/* Shared helpers */
const PanelHeader = ({ title, action }) => (
  <div className="flex justify-between items-center"
       style={{ padding: '14px 18px', background: 'linear-gradient(135deg, #5B5EF5, #7C3AED)', borderRadius: '12px 12px 0 0' }}>
    <span style={{ fontSize: 13, fontWeight: 600, color: 'white' }}>{title}</span>
    {action && (
      <span style={{ fontSize: 11, background: 'rgba(255,255,255,0.2)', color: 'white', padding: '3px 10px', borderRadius: 20, backdropFilter: 'blur(4px)' }}>
        {action}
      </span>
    )}
  </div>
);

const panelCard = { background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' };
const innerCard = { background: '#F9FAFB', border: '1px solid #F1F5F9', borderRadius: 8 };

const StatusChip = ({ label, type }) => {
  const styles = {
    green:  { background: '#F0FDF4', color: '#16A34A' },
    violet: { background: '#EEF2FF', color: '#4F46E5' },
    amber:  { background: '#FFFBEB', color: '#D97706' },
    red:    { background: '#FEF2F2', color: '#DC2626' },
    blue:   { background: '#EFF6FF', color: '#2563EB' },
    slate:  { background: '#F8FAFC', color: '#64748B' },
  };
  return (
    <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 4, fontWeight: 500, ...styles[type] }}>
      {label}
    </span>
  );
};

const CRMPanel = () => (
  <div style={panelCard}>
    <PanelHeader title="CRM Pipeline" action="+ Add deal" />
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { c: 'Nexify Corp.',    v: '$48,000',  s: 'Proposal',    st: 'Active', col: '#6366F1', chip: 'violet' },
        { c: 'CloudStack Ltd.', v: '$120,000', s: 'Negotiation', st: 'Hot',    col: '#10B981', chip: 'green'  },
        { c: 'DataPilot Inc.',  v: '$32,000',  s: 'Demo Booked', st: 'Active', col: '#8B5CF6', chip: 'violet' },
        { c: 'BuildCore',       v: '$85,000',  s: 'Closing',     st: 'Hot',    col: '#F59E0B', chip: 'green'  },
        { c: 'OmniFlow Group',  v: '$22,500',  s: 'Discovery',   st: 'New',    col: '#3B82F6', chip: 'blue'   },
      ].map((d, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
               style={{ background: d.col }}>{d.c[0]}</div>
          <div className="flex-1 min-w-0">
            <div style={{ fontSize: 12, fontWeight: 500, color: '#0F172A' }}>{d.c}</div>
            <div style={{ fontSize: 11, color: '#94A3B8' }}>{d.s}</div>
          </div>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#0F172A' }}>{d.v}</span>
          <StatusChip label={d.st} type={d.chip} />
        </div>
      ))}
    </div>
    <div style={{ margin: '0 16px 16px' }}>
      <div style={{ ...innerCard, padding: '10px 14px' }}>
        <div className="flex justify-between" style={{ fontSize: 11, marginBottom: 6 }}>
          <span style={{ color: '#64748B' }}>Pipeline value</span>
          <span style={{ fontWeight: 600, color: '#10B981' }}>$307,500</span>
        </div>
        <div style={{ height: 6, borderRadius: 3, background: '#E2E8F0' }}>
          <div style={{ width: '72%', height: '100%', borderRadius: 3, background: 'linear-gradient(to right, #6366F1, #10B981)' }}></div>
        </div>
      </div>
    </div>
  </div>
);

const ERPPanel = () => (
  <div style={panelCard}>
    <PanelHeader title="ERP · Business Overview" />
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { m: 'Finance & Accounting', metric: 'Revenue YTD',      v: '$2.4M',  st: 'On track',         chip: 'green'  },
        { m: 'Supply Chain',         metric: 'Inventory value',  v: '$384K',  st: 'Low stock alert',  chip: 'amber'  },
        { m: 'Operations',           metric: 'Active processes', v: '1,284',  st: 'Running',          chip: 'violet' },
        { m: 'Procurement',          metric: 'Open POs',         v: '47',     st: 'Pending approval', chip: 'amber'  },
      ].map((m, i) => (
        <div key={i} style={{ ...innerCard, padding: '12px 14px' }}>
          <div className="flex justify-between items-start" style={{ marginBottom: 4 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#0F172A' }}>{m.m}</div>
              <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 1 }}>{m.metric}</div>
            </div>
            <StatusChip label={m.st} type={m.chip} />
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{m.v}</div>
        </div>
      ))}
    </div>
  </div>
);

const HRMSPanel = () => (
  <div style={panelCard}>
    <PanelHeader title="HRMS · People" action="+ Add employee" />
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>
        {[
          { name: 'Sarah Chen',   role: 'Engineering Lead', dept: 'Product', shift: 'Full-time', st: 'Active',   col: '#10B981', chip: 'green' },
          { name: 'Marco Rivera', role: 'Product Manager',  dept: 'Product', shift: 'Full-time', st: 'Active',   col: '#6366F1', chip: 'green' },
          { name: 'Aisha Patel',  role: 'Customer Success', dept: 'CS',      shift: 'Part-time', st: 'On leave', col: '#F59E0B', chip: 'amber' },
          { name: 'John Kim',     role: 'HR Manager',       dept: 'HR',      shift: 'Full-time', st: 'Active',   col: '#8B5CF6', chip: 'green' },
        ].map((emp, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                 style={{ background: emp.col }}>{emp.name[0]}</div>
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: 12, fontWeight: 500, color: '#0F172A' }}>{emp.name}</div>
              <div style={{ fontSize: 11, color: '#94A3B8' }}>{emp.role} · {emp.dept}</div>
            </div>
            <span style={{ fontSize: 11, color: '#94A3B8' }}>{emp.shift}</span>
            <StatusChip label={emp.st} type={emp.chip} />
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {[
          { label: 'Total employees', value: '127', icon: 'fa-users',      color: '#6366F1' },
          { label: 'Active today',    value: '112', icon: 'fa-user-check', color: '#10B981' },
          { label: 'On leave',        value: '8',   icon: 'fa-calendar',   color: '#F59E0B' },
        ].map((s, i) => (
          <div key={i} className="rounded-lg p-3 text-center" style={innerCard}>
            <i className={`fa-solid ${s.icon} text-sm mb-1.5 block`} style={{ color: s.color }}></i>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{s.value}</div>
            <div style={{ fontSize: 10, color: '#94A3B8', marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const HelpdeskPanel = () => (
  <div style={panelCard}>
    <div style={{ padding: '14px 18px', borderBottom: '1px solid #F1F5F9' }}>
      <div className="flex justify-between items-start">
        <div>
          <div style={{ fontSize: 11, color: '#94A3B8', marginBottom: 2 }}>Avg. first response</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#0F172A', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>1h 24m</div>
        </div>
        <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 20, background: '#F0FDF4', color: '#16A34A', fontWeight: 500 }}>
          ↓ 34% faster
        </span>
      </div>
    </div>
    <div style={{ padding: 16 }}>
      <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>
        Recent tickets
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {[
          { from: 'Nexify Corp.',   issue: 'API rate limit exceeded',  st: 'Open',        chip: 'red'    },
          { from: 'CloudStack',     issue: 'SSO configuration help',   st: 'In progress', chip: 'amber'  },
          { from: 'DataPilot',      issue: 'CSV export not working',   st: 'Resolved',    chip: 'green'  },
          { from: 'BuildCore Ltd.', issue: 'Billing discrepancy Q2',   st: 'Open',        chip: 'red'    },
          { from: 'OmniFlow',       issue: 'Webhook endpoint timeout', st: 'Resolved',    chip: 'green'  },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-3 py-2.5" style={{ borderBottom: '1px solid #F9FAFB' }}>
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold shrink-0"
                 style={{ background: '#E2E8F0', color: '#64748B' }}>{t.from[0]}</div>
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: 11, fontWeight: 500, color: '#0F172A' }}>{t.from}</div>
              <div style={{ fontSize: 10, color: '#94A3B8' }}>{t.issue}</div>
            </div>
            <StatusChip label={t.st} type={t.chip} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8, background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
        <i className="fa-solid fa-circle-check text-xs" style={{ color: '#16A34A' }}></i>
        <span style={{ fontSize: 11, color: '#16A34A' }}>SLA compliance this month: 97.4% — exceeding target</span>
      </div>
    </div>
  </div>
);

const featureTabs = [
  {
    key:   'crm',
    label: 'Hotel & Booking',
    icon:  'fa-hotel',
    title: 'Run your hotel & bookings on one smart platform',
    desc:  'Manage reservations, guest profiles, room availability, and sales pipeline in one place. Automate follow-ups, forecast occupancy, and close group bookings faster with AI-assisted lead scoring.',
    perks: ['Reservation & availability management', 'Guest profiles & contact tracking', 'AI lead scoring & revenue forecasting', 'Booking automation & email sequences'],
    Panel: CRMPanel,
  },
  {
    key:   'erp',
    label: 'Travel Mgmt',
    icon:  'fa-plane-departure',
    title: 'Connect every part of your travel operations',
    desc:  'Unify itinerary planning, supplier management, finance, and procurement on a single backbone. Eliminate manual reconciliation and get a real-time view of your entire travel business.',
    perks: ['Itinerary & package management', 'Supplier & contract management', 'Procurement & approvals workflow', 'Cross-department analytics'],
    Panel: ERPPanel,
  },
  {
    key:   'hrms',
    label: 'HR-Pulse',
    icon:  'fa-users-gear',
    title: 'Manage your entire workforce with HR-Pulse',
    desc:  'From hiring to offboarding, HR-Pulse handles every employee touchpoint. Run payroll, track attendance, manage performance reviews, and keep your team engaged — all in one system.',
    perks: ['Employee onboarding & profiles', 'Payroll processing & tax compliance', 'Leave management & attendance', 'Performance reviews & goals'],
    Panel: HRMSPanel,
  },
  {
    key:   'helpdesk',
    label: 'InboxMaster',
    icon:  'fa-inbox',
    title: 'Deliver exceptional support with InboxMaster',
    desc:  'Handle every support request across email, chat, and portal in one unified inbox. Set SLAs, automate ticket routing, and give your team the context they need to resolve issues faster.',
    perks: ['Omnichannel ticket management', 'SLA tracking & auto-escalation', 'AI-suggested reply templates', 'Customer satisfaction (CSAT) scoring'],
    Panel: HelpdeskPanel,
  },
];

/* ─────────────────────────────────────────────
   Reusable section label
───────────────────────────────────────────── */
const SectionTag = ({ label, dark = false }) => (
  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest"
       style={{
         background: dark ? 'rgba(255,255,255,0.12)' : '#EEF2FF',
         color: dark ? 'rgba(255,255,255,0.85)' : '#4F46E5',
         letterSpacing: '0.12em',
       }}>
    {label}
  </div>
);

/* ─────────────────────────────────────────────
   Main App
───────────────────────────────────────────── */
function App() {
  const [isModalOpen, setIsModalOpen]     = useState(false);
  const [currentPage, setCurrentPageRaw] = useState(() => {
    const saved = sessionStorage.getItem('currentPage');
    return isValidPage(saved) ? saved : 'home';
  });
  const [scrollTarget, setScrollTarget]  = useState(null);
  const [featTab, setFeatTab]            = useState('crm');
  const [ctaEmail, setCtaEmail]          = useState('');
  const [ctaSent, setCtaSent]            = useState(false);

  const setCurrentPage = (key) => {
    const next = isValidPage(key) ? key : 'home';
    setCurrentPageRaw(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleBeforeUnload = () => sessionStorage.setItem('scrollPos', window.scrollY);
    window.addEventListener('beforeunload', handleBeforeUnload);
    const saved = sessionStorage.getItem('scrollPos');
    if (saved) {
      setTimeout(() => { window.scrollTo(0, parseInt(saved)); sessionStorage.removeItem('scrollPos'); }, 150);
    }
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  useEffect(() => { sessionStorage.setItem('currentPage', currentPage); }, [currentPage]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({ once: true });
      setTimeout(() => window.AOS.refresh(), 100);
    }
  }, [currentPage]);

  useEffect(() => {
    if (scrollTarget) {
      setTimeout(() => {
        const el = document.getElementById(scrollTarget);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setScrollTarget(null);
      }, 100);
    }
  }, [currentPage, scrollTarget]);

  const openInquiryModal  = () => setIsModalOpen(true);
  const closeInquiryModal = () => setIsModalOpen(false);

  const handleCtaSubmit = (e) => {
    e.preventDefault();
    if (!ctaEmail) return;
    setCtaSent(true);
    setCtaEmail('');
    setTimeout(() => setCtaSent(false), 4000);
  };

  const activeTab = featureTabs.find(t => t.key === featTab) || featureTabs[0];
  const ActivePanel = activeTab.Panel;

  return (
    <>
      <Header
        onOpenInquiry={openInquiryModal}
        setCurrentPage={setCurrentPage}
        setScrollTarget={setScrollTarget}
      />

      {currentPage === 'home' && (
        <main style={{ background: '#FFFFFF' }}>

          {/* 1 ── Hero */}
          <Hero onOpenInquiry={openInquiryModal} setScrollTarget={setScrollTarget} />

          {/* 2 ── Social proof bar */}
          <section className="py-10 border-y" style={{ background: '#F9FAFB', borderColor: '#F1F5F9' }}>
            <div className="px-4 sm:px-6 lg:px-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest mb-7"
                 style={{ color: '#94A3B8', letterSpacing: '0.15em' }}>
                Trusted by leading travel, hospitality &amp; operations businesses
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-5"
                   data-aos="fade-up" data-aos-duration="600">
                {['Voyager Travel', 'CoralResorts', 'SkyRoute DMC', 'AlpineTours', 'MedFleet', 'AquaHotels'].map(name => (
                  <span key={name} className="proof-logo text-lg font-bold" style={{ letterSpacing: '-0.02em' }}>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 3 ── Problem → Solution */}
          <section id="about" className="py-24" style={{ background: '#FFFFFF' }}
                   data-aos="fade-up" data-aos-duration="700">
            <div className="mx-3 px-4 md:px-14">
              <div className="text-center mb-16">
                <SectionTag label="The challenge" />
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight"
                    style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: '#0F172A' }}>
                  Running a travel business shouldn't mean<br className="hidden sm:block" /> juggling ten different systems.
                </h2>
                <p className="mt-4 max-w-xl mx-auto" style={{ color: '#64748B' }}>
                  Most travel & hospitality teams still rely on spreadsheets, legacy PMS tools, and disconnected apps.
                  Bu Marka replaces the chaos with one unified platform.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    pain:     'Scattered booking & operations tools',
                    painDesc: 'Your reservations live in one system, fleet in another, finance in a spreadsheet. Nothing talks to each other and your team wastes hours bridging the gaps.',
                    fix:      'One connected operations hub',
                    fixDesc:  'Hotel Booking, Travel Management, Fleet, HR, and Accounting all share a single data layer — updates flow instantly across every module.',
                    icon:     'fa-puzzle-piece',
                    color:    '#6366F1',
                  },
                  {
                    pain:     'Manual invoicing & financial chaos',
                    painDesc: 'Billing clients, reconciling supplier payments, and generating financial reports eats up days every month — with costly errors slipping through.',
                    fix:      'Automated finance & accounting',
                    fixDesc:  'Auto-generate invoices, track supplier costs, reconcile payments, and produce real-time P&L reports — all without touching a spreadsheet.',
                    icon:     'fa-file-invoice',
                    color:    '#8B5CF6',
                  },
                  {
                    pain:     'Zero visibility across properties & fleets',
                    painDesc: 'Managers make decisions based on yesterday\'s data. Vehicle locations, room occupancy, and staff attendance are always one step behind.',
                    fix:      'Live dashboards across every operation',
                    fixDesc:  'Real-time occupancy rates, fleet positions, booking volumes, and staff attendance — all on one screen so you always know what\'s happening right now.',
                    icon:     'fa-chart-pie',
                    color:    '#10B981',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden"
                       style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                       data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="p-6" style={{ background: '#FEF2F2', borderBottom: '1px solid #FECACA' }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                             style={{ background: 'rgba(239,68,68,0.1)' }}>
                          <i className={`fa-solid ${item.icon} text-sm`} style={{ color: '#EF4444' }}></i>
                        </div>
                        <span className="text-xs font-semibold uppercase" style={{ color: '#EF4444', letterSpacing: '0.08em' }}>Before</span>
                      </div>
                      <h3 className="font-bold mb-1" style={{ color: '#0F172A', fontSize: '15px' }}>{item.pain}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{item.painDesc}</p>
                    </div>
                    <div className="p-6" style={{ background: '#FFFFFF' }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                             style={{ background: `${item.color}18` }}>
                          <i className="fa-solid fa-check text-sm" style={{ color: item.color }}></i>
                        </div>
                        <span className="text-xs font-semibold uppercase"
                              style={{ color: item.color, letterSpacing: '0.08em' }}>With Bu Marka</span>
                      </div>
                      <h3 className="font-bold mb-1" style={{ color: '#0F172A', fontSize: '15px' }}>{item.fix}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{item.fixDesc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3.5 ── Products showcase */}
          <section id="products" className="py-24" style={{ background: '#F9FAFB' }}>
            <div className="mx-3 px-4 md:px-14">
              <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="600">
                <SectionTag label="Our Software Suite" />
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight"
                    style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: '#0F172A' }}>
                  Eight purpose-built products.<br className="hidden sm:block" /> One connected platform.
                </h2>
                <p className="mt-4 max-w-xl mx-auto" style={{ color: '#64748B' }}>
                  Every department in your business gets software designed specifically for how they work — all sharing the same real-time data.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: 'fa-hotel',             title: 'Hotel & Booking',        page: 'product-sales-booking',        desc: 'Reservations, guest profiles, and booking automation.',     color: '#6366F1' },
                  { icon: 'fa-plane-departure',   title: 'Travel Management',      page: 'product-travel-management',    desc: 'Itineraries, supplier management, and travel operations.',  color: '#10B981' },
                  { icon: 'fa-users-gear',        title: 'HR-Pulse',               page: 'product-hr-app',               desc: 'Hiring, payroll, attendance, and performance reviews.',    color: '#8B5CF6' },
                  { icon: 'fa-inbox',             title: 'InboxMaster',            page: 'product-inbox-master',         desc: 'Omnichannel support, SLAs, and ticket automation.',        color: '#F59E0B' },
                  { icon: 'fa-truck',             title: 'Fleet & Operations',     page: 'product-operations-logistics', desc: 'Fleet tracking, driver management, and logistics.',        color: '#EF4444' },
                  { icon: 'fa-map-location-dot',  title: 'Tour Guide App',         page: 'product-tour-guide-app',       desc: 'Tour scheduling, guide assignments, and live tracking.',   color: '#EC4899' },
                  { icon: 'fa-receipt',           title: 'Accounting',             page: 'product-financial-management', desc: 'Travel accounting, invoicing, and financial reporting.',   color: '#3B82F6' },
                  { icon: 'fa-route',             title: 'BU LinkTrip',            page: 'product-link-trip',            desc: 'End-to-end trip linking, transfers, and connections.',     color: '#14B8A6' },
                ].map((prod, i) => (
                  <button key={i}
                          onClick={() => setCurrentPage(prod.page)}
                          className="group text-left rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 w-full"
                          style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                          onMouseEnter={e => { e.currentTarget.style.borderColor = `${prod.color}55`; e.currentTarget.style.boxShadow = `0 8px 24px ${prod.color}18`; }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'; }}
                          data-aos="fade-up" data-aos-delay={(i % 4) * 60}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                         style={{ background: `${prod.color}12` }}>
                      <i className={`fa-solid ${prod.icon} text-sm`} style={{ color: prod.color }}></i>
                    </div>
                    <h3 className="text-sm font-bold mb-1.5 leading-snug transition-colors"
                        style={{ color: '#0F172A' }}>
                      {prod.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: '#94A3B8' }}>{prod.desc}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                         style={{ color: prod.color }}>
                      Explore <i className="fa-solid fa-arrow-right text-[9px]"></i>
                    </div>
                  </button>
                ))}
              </div>

              <div className="text-center mt-10">
                <button onClick={() => setCurrentPage('product')}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl btn-violet">
                  View all products <i className="fa-solid fa-arrow-right text-xs"></i>
                </button>
              </div>
            </div>
          </section>

          {/* 4 ── Product features (tabbed) */}
          <section id="features" className="py-24" style={{ background: '#FFFFFF' }}>
            <div className="mx-3 px-4 md:px-14">
              <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="600">
                <SectionTag label="Key Features" />
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight"
                    style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: '#0F172A' }}>
                  Powerful features built for<br className="hidden sm:block" /> the way you operate
                </h2>
                <p className="mt-4 max-w-xl mx-auto" style={{ color: '#64748B' }}>
                  Explore the capabilities inside each product — purpose-designed for travel, hospitality, and operations teams.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {featureTabs.map(t => (
                  <button key={t.key} onClick={() => setFeatTab(t.key)}
                          className={`feat-tab ${featTab === t.key ? 'active' : ''}`}>
                    <i className={`fa-solid ${t.icon} mr-2`}></i>{t.label}
                  </button>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center"
                   data-aos="fade-up" data-aos-duration="600" key={featTab}>
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-bold leading-snug"
                      style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: '#0F172A' }}>
                    {activeTab.title}
                  </h3>
                  <p style={{ color: '#64748B' }} className="leading-relaxed">{activeTab.desc}</p>
                  <ul className="space-y-3">
                    {activeTab.perks.map((perk, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                              style={{ background: '#EEF2FF' }}>
                          <i className="fa-solid fa-check text-[9px]" style={{ color: '#6366F1' }}></i>
                        </span>
                        <span className="text-sm" style={{ color: '#374151' }}>{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={openInquiryModal}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white btn-violet">
                    See it in action <i className="fa-solid fa-arrow-right text-xs"></i>
                  </button>
                </div>
                <div><ActivePanel /></div>
              </div>
            </div>
          </section>

          {/* 5 ── Stats band — stays gradient/dark as premium accent */}
          <section className="py-20"
                   style={{ background: 'linear-gradient(135deg, #3730A3 0%, #4F46E5 40%, #7C3AED 100%)' }}>
            <div className="mx-3 px-4 md:px-14">
              <div className="text-center mb-14" data-aos="fade-up" data-aos-duration="600">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight"
                    style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>
                  Real results from real businesses
                </h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
                   data-aos="fade-up" data-aos-duration="700">
                {statsData.map((s, i) => (
                  <div key={i} className="space-y-2">
                    <div className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-4"
                         style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)' }}>
                      <i className={`fa-solid ${s.icon} text-lg text-white`}></i>
                    </div>
                    <div className="stat-number">
                      <AnimatedNumber target={s.target} suffix={s.suffix} decimals={s.decimals} />
                    </div>
                    <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6 ── How it works */}
          <section id="how-it-works" className="py-24" style={{ background: '#F9FAFB' }}>
            <div className="mx-3 px-4 md:px-14">
              <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="600">
                <SectionTag label="How it works" />
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight"
                    style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: '#0F172A' }}>
                  From sign-up to fully operational<br className="hidden sm:block" /> in under a day
                </h2>
                <p className="mt-4 max-w-md mx-auto" style={{ color: '#64748B' }}>
                  No developers, no lengthy onboarding, no disruption to your current operations.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 relative">
                <div className="hidden md:block absolute top-6 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-px"
                     style={{ background: 'linear-gradient(to right, #C7D2FE, #DDD6FE)' }}></div>

                {[
                  {
                    n: '01',
                    title: 'Migrate your data instantly',
                    desc:  'Import your existing bookings, guest records, fleet data, and employee profiles in minutes. Our onboarding team maps everything for you — zero manual re-entry.',
                    icon:  'fa-file-arrow-up',
                  },
                  {
                    n: '02',
                    title: 'Configure your modules',
                    desc:  'Activate only the products your business needs. Set up automations, approval workflows, user roles, and SLA rules using our no-code builder — no IT team required.',
                    icon:  'fa-sliders',
                  },
                  {
                    n: '03',
                    title: 'Operate & grow with confidence',
                    desc:  'Live dashboards give every department — from reservations to finance — instant visibility so decisions are always based on accurate, real-time data.',
                    icon:  'fa-chart-line',
                  },
                ].map((step, i) => (
                  <div key={i} className="text-center relative z-10"
                       data-aos="fade-up" data-aos-delay={i * 120} data-aos-duration="600">
                    <div className="step-number">{step.n}</div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                         style={{ background: '#EEF2FF', border: '1px solid #C7D2FE' }}>
                      <i className={`fa-solid ${step.icon} text-xl`} style={{ color: '#6366F1' }}></i>
                    </div>
                    <h3 className="text-lg font-bold mb-3"
                        style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: '#0F172A' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed max-w-xs mx-auto" style={{ color: '#64748B' }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 7 ── Pricing */}
          <section id="pricing" className="py-24" style={{ background: '#FFFFFF' }}
                   data-aos="fade-up" data-aos-duration="700">
            <div className="mx-3 px-4 md:px-14">
              <div className="text-center mb-14">
                <SectionTag label="Pricing" />
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight"
                    style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: '#0F172A' }}>
                  Flexible plans for every<br className="hidden sm:block" /> stage of your business
                </h2>
                <p className="mt-4 max-w-md mx-auto" style={{ color: '#64748B' }}>
                  Start with what you need. Add modules as you grow. No hidden fees, no lock-in contracts.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    name: 'Starter', price: '£49', period: '/mo',
                    tagline: 'For small travel & hospitality businesses', members: 'Up to 5 users',
                    featured: false, cta: 'Start free trial',
                    perks: ['Hotel & Booking module', 'InboxMaster support desk', 'Basic reporting dashboard', 'Email & chat support'],
                  },
                  {
                    name: 'Growth', price: '£129', period: '/mo',
                    tagline: 'For growing operations teams', members: 'Up to 25 users',
                    featured: true, cta: 'Start free trial', badge: 'Most popular',
                    perks: ['Everything in Starter', 'Travel Management & Fleet', 'HR-Pulse & Accounting', 'Workflow automation', 'Priority support & onboarding'],
                  },
                  {
                    name: 'Enterprise', price: 'Custom', period: '',
                    tagline: 'For large multi-property organisations', members: 'Unlimited users',
                    featured: false, cta: 'Talk to sales',
                    perks: ['All 8 software modules', 'Custom integrations & API access', 'Dedicated account manager', '99.9% uptime SLA guarantee', 'White-glove onboarding & training'],
                  },
                ].map((plan, i) => (
                  <div key={i}
                       className={`rounded-2xl p-7 relative ${plan.featured ? 'pricing-featured' : ''}`}
                       style={!plan.featured ? { background: '#FFFFFF', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' } : {}}
                       data-aos="fade-up" data-aos-delay={i * 100}>
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-semibold text-white"
                           style={{ background: 'linear-gradient(135deg, #5B5EF5, #7C3AED)' }}>
                        {plan.badge}
                      </div>
                    )}
                    <div className="mb-6">
                      <div className="text-sm font-semibold mb-1"
                           style={{ color: plan.featured ? 'rgba(255,255,255,0.7)' : '#6366F1' }}>
                        {plan.name}
                      </div>
                      <div className="flex items-end gap-1 mb-1">
                        <span className="text-4xl font-extrabold"
                              style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: plan.featured ? '#FFFFFF' : '#0F172A' }}>
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-sm pb-1.5"
                                style={{ color: plan.featured ? 'rgba(255,255,255,0.55)' : '#94A3B8' }}>
                            {plan.period}
                          </span>
                        )}
                      </div>
                      <div className="text-sm" style={{ color: plan.featured ? 'rgba(255,255,255,0.55)' : '#94A3B8' }}>
                        {plan.tagline} · {plan.members}
                      </div>
                    </div>
                    <ul className="space-y-3 mb-7">
                      {plan.perks.map((p, j) => (
                        <li key={j} className="flex items-center gap-2.5 text-sm"
                            style={{ color: plan.featured ? 'rgba(255,255,255,0.85)' : '#374151' }}>
                          <i className="fa-solid fa-check text-xs shrink-0"
                             style={{ color: plan.featured ? 'rgba(255,255,255,0.65)' : '#6366F1' }}></i>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <button onClick={openInquiryModal}
                            className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${plan.featured ? 'text-white' : ''}`}
                            style={plan.featured
                              ? { background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }
                              : { background: 'transparent', border: '1px solid #E2E8F0', color: '#374151' }}>
                      {plan.cta}
                    </button>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <button onClick={() => setCurrentPage('pricing')}
                        className="inline-flex items-center gap-2 text-sm font-medium"
                        style={{ color: '#6366F1' }}>
                  See full pricing details <i className="fa-solid fa-arrow-right text-xs"></i>
                </button>
              </div>
            </div>
          </section>

          {/* 8 ── Testimonials */}
          <section id="testimonials" className="py-24" style={{ background: '#F9FAFB' }}>
            <div className="mx-3 px-4 md:px-14">
              <div className="text-center mb-14" data-aos="fade-up" data-aos-duration="600">
                <SectionTag label="Testimonials" />
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight"
                    style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: '#0F172A' }}>
                  Trusted by travel & hospitality<br className="hidden sm:block" /> teams across the globe
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    quote:   '"Bu Marka transformed how we manage our hotel portfolio. Reservations, housekeeping schedules, and guest billing now flow through one system. Our front-desk team saves 3+ hours every single day."',
                    name:    'Karim El-Masri',
                    role:    'General Manager',
                    org:     'AquaHotels Group',
                    initials:'KE',
                    color:   '#6366F1',
                  },
                  {
                    quote:   '"We run 40+ tour packages a month across three countries. Bu Marka\'s Travel Management and Tour Guide App gave us full visibility for the first time. Missed pickups dropped to zero in month one."',
                    name:    'Sofia Andrade',
                    role:    'Operations Director',
                    org:     'Voyager Travel DMC',
                    initials:'SA',
                    color:   '#10B981',
                  },
                  {
                    quote:   '"Fleet scheduling used to be a daily nightmare. With Bu Marka\'s Fleet module and Driver App, our dispatcher manages 60 vehicles from a single dashboard. Fuel costs dropped 18% in the first quarter."',
                    name:    'Yusuf Al-Rashid',
                    role:    'Head of Fleet Operations',
                    org:     'MedFleet Services',
                    initials:'YR',
                    color:   '#8B5CF6',
                  },
                ].map((t, i) => (
                  <div key={i} className="testimonial-card p-7 flex flex-col gap-5"
                       data-aos="fade-up" data-aos-delay={i * 100} data-aos-duration="600">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <i key={j} className="fa-solid fa-star text-xs" style={{ color: '#F59E0B' }}></i>
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed flex-1 italic" style={{ color: '#64748B' }}>{t.quote}</p>
                    <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid #F1F5F9' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                           style={{ background: t.color }}>
                        {t.initials}
                      </div>
                      <div>
                        <div className="text-sm font-semibold" style={{ color: '#0F172A' }}>{t.name}</div>
                        <div className="text-xs" style={{ color: '#94A3B8' }}>{t.role} · {t.org}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 9 ── Resources / Insights — SaaS style, no photos */}
          <section id="blog" className="py-24" style={{ background: '#F8FAFC' }}
                   data-aos="fade-up" data-aos-duration="700">
            <div className="mx-3 px-4 md:px-14">

              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
                <div>
                  <SectionTag label="Resources" />
                  <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight"
                      style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', color: '#0F172A' }}>
                    Insights for travel & hospitality operators
                  </h2>
                  <p className="mt-3 text-sm" style={{ color: '#64748B' }}>
                    Practical guides, software playbooks, and industry updates to help your business run better.
                  </p>
                </div>
                <button className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
                        style={{ background: '#EEF2FF', color: '#4F46E5', border: '1px solid #C7D2FE' }}>
                  Browse all <i className="fa-solid fa-arrow-right text-xs"></i>
                </button>
              </div>

              {/* Category pill filter */}
              <div className="flex flex-wrap gap-2 mb-10">
                {['All', 'Hotel Tech', 'Travel Ops', 'Fleet & Logistics', 'HR & People', 'Product Updates'].map((f, i) => (
                  <span key={i}
                        className="px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer select-none"
                        style={i === 0
                          ? { background: '#4F46E5', color: '#fff', border: '1px solid #4F46E5' }
                          : { background: '#fff', color: '#64748B', border: '1px solid #E2E8F0' }}>
                    {f}
                  </span>
                ))}
              </div>

              {/* Main grid: featured left + 2 stacked right */}
              <div className="grid lg:grid-cols-5 gap-5 mb-5">

                {/* ── Featured card (3 cols) — gradient visual, no image ── */}
                <div className="lg:col-span-3 group cursor-pointer rounded-2xl overflow-hidden flex flex-col"
                     style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 4px 24px rgba(99,102,241,0.08)' }}
                     data-aos="fade-up" data-aos-duration="600">

                  {/* Visual area — CSS gradient + floating UI mockup */}
                  <div className="relative overflow-hidden flex items-end"
                       style={{ height: 220, background: 'linear-gradient(135deg, #312E81 0%, #4F46E5 45%, #7C3AED 100%)' }}>
                    {/* Grid dots */}
                    <div className="absolute inset-0"
                         style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                    {/* Glow blob */}
                    <div className="absolute" style={{ top: -40, right: -40, width: 220, height: 220, borderRadius: '50%', background: 'rgba(139,92,246,0.35)', filter: 'blur(50px)' }}></div>

                    {/* Mini pipeline mockup */}
                    <div className="absolute inset-0 flex items-center justify-center px-8 pt-6">
                      <div className="w-full max-w-sm rounded-xl p-4"
                           style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)' }}>
                        <div className="flex items-center justify-between mb-3">
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Bookings · Q2 2025</span>
                          <span style={{ fontSize: 10, background: 'rgba(16,185,129,0.25)', color: '#6EE7B7', padding: '2px 8px', borderRadius: 20, fontWeight: 600 }}>↑ +35% occupancy</span>
                        </div>
                        <div className="flex gap-1.5 items-end" style={{ height: 48 }}>
                          {[30, 45, 38, 60, 52, 72, 58, 85, 70, 95].map((h, j) => (
                            <div key={j} className="flex-1 rounded-t"
                                 style={{ height: `${h}%`, background: j >= 7 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)' }}></div>
                          ))}
                        </div>
                        <div className="flex gap-2 mt-3">
                          {['Inquiry', 'Quoted', 'Confirmed', 'Checked-In'].map((s, k) => (
                            <div key={k} className="flex-1 rounded py-1 text-center" style={{ fontSize: 9, color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.08)' }}>{s}</div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
                         style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)' }}>
                      <i className="fa-solid fa-fire-flame-curved text-[10px] text-orange-300"></i> Trending
                    </div>
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                          style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                      Guide
                    </span>
                  </div>

                  {/* Text body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                            style={{ background: '#EEF2FF', color: '#4F46E5' }}>Hotel Tech</span>
                      <span className="text-[11px] flex items-center gap-1" style={{ color: '#94A3B8' }}>
                        <i className="fa-regular fa-clock text-[10px]"></i> 5 min read
                      </span>
                      <span className="text-[11px]" style={{ color: '#94A3B8' }}>· May 22, 2025</span>
                    </div>
                    <h3 className="font-extrabold leading-snug mb-2 group-hover:text-[#6366F1] transition-colors"
                        style={{ fontSize: 18, color: '#0F172A', fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>
                      How modern hotel software cuts check-in time by 60% and boosts guest satisfaction
                    </h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: '#64748B' }}>
                      Front-desk bottlenecks cost hotels revenue and reviews. Discover how automated check-in flows, real-time room availability, and guest profile management eliminate the friction entirely.
                    </p>
                    <div className="mt-5 pt-4 flex items-center justify-between"
                         style={{ borderTop: '1px solid #F1F5F9' }}>
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                             style={{ background: '#6366F1' }}>KE</div>
                        <div>
                          <div className="text-xs font-semibold" style={{ color: '#0F172A' }}>Karim El-Masri</div>
                          <div className="text-[10px]" style={{ color: '#94A3B8' }}>GM · AquaHotels Group</div>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#6366F1' }}>
                        Read article <i className="fa-solid fa-arrow-right text-xs"></i>
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Side stack (2 cols) ── */}
                <div className="lg:col-span-2 flex flex-col gap-5">
                  {[
                    {
                      gradient: 'linear-gradient(135deg, #064E3B 0%, #059669 50%, #10B981 100%)',
                      glowColor: 'rgba(16,185,129,0.4)',
                      icon: 'fa-sitemap', iconBg: 'rgba(255,255,255,0.15)',
                      metrics: [{ label: 'On-time departures', value: '98.4%' }, { label: 'Cost per trip', value: '↓ 22%' }],
                      category: 'Travel Ops', catBg: '#F0FDF4', catColor: '#059669',
                      type: 'Playbook',
                      title: 'The complete guide to digitising your travel agency operations in 2025',
                      excerpt: 'From itinerary management to supplier contracts — the step-by-step playbook for moving off spreadsheets.',
                      readTime: '7 min', date: 'May 18',
                      author: 'SA', authorName: 'Sofia Andrade', authorColor: '#10B981',
                    },
                    {
                      gradient: 'linear-gradient(135deg, #78350F 0%, #D97706 50%, #F59E0B 100%)',
                      glowColor: 'rgba(245,158,11,0.4)',
                      icon: 'fa-users-gear', iconBg: 'rgba(255,255,255,0.15)',
                      metrics: [{ label: 'Vehicles tracked', value: '60+' }, { label: 'Fuel savings', value: '↓ 18%' }],
                      category: 'Fleet & Logistics', catBg: '#FFFBEB', catColor: '#D97706',
                      type: 'Case Study',
                      title: 'How MedFleet cut fuel costs by 18% with real-time fleet management software',
                      excerpt: 'Managing 60 vehicles across multiple cities was a logistical nightmare. One platform changed everything.',
                      readTime: '6 min', date: 'May 12',
                      author: 'YR', authorName: 'Yusuf Al-Rashid', authorColor: '#8B5CF6',
                    },
                  ].map((post, i) => (
                    <div key={i} className="group cursor-pointer rounded-2xl overflow-hidden flex flex-col flex-1"
                         style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                         data-aos="fade-up" data-aos-delay={(i + 1) * 100} data-aos-duration="600">

                      {/* Gradient visual strip */}
                      <div className="relative overflow-hidden flex items-center gap-4 px-5"
                           style={{ height: 88, background: post.gradient }}>
                        <div className="absolute" style={{ top: -30, right: -20, width: 120, height: 120, borderRadius: '50%', background: post.glowColor, filter: 'blur(30px)' }}></div>
                        {/* Icon */}
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative"
                             style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}>
                          <i className={`fa-solid ${post.icon} text-white text-sm`}></i>
                        </div>
                        {/* Metric chips */}
                        <div className="flex gap-2 relative">
                          {post.metrics.map((m, k) => (
                            <div key={k} className="rounded-lg px-3 py-1.5"
                                 style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)' }}>
                              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', lineHeight: 1, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{m.value}</div>
                              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.65)', marginTop: 2 }}>{m.label}</div>
                            </div>
                          ))}
                        </div>
                        {/* Type badge */}
                        <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold"
                              style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                          {post.type}
                        </span>
                      </div>

                      {/* Text */}
                      <div className="p-4 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                                style={{ background: post.catBg, color: post.catColor }}>{post.category}</span>
                          <span className="text-[10px] flex items-center gap-1" style={{ color: '#94A3B8' }}>
                            <i className="fa-regular fa-clock text-[9px]"></i> {post.readTime} read
                          </span>
                          <span className="text-[10px]" style={{ color: '#94A3B8' }}>· {post.date}</span>
                        </div>
                        <h4 className="font-bold leading-snug mb-1.5 group-hover:text-[#6366F1] transition-colors flex-1"
                            style={{ fontSize: 13, color: '#0F172A' }}>
                          {post.title}
                        </h4>
                        <p className="text-xs leading-relaxed mb-3" style={{ color: '#94A3B8' }}>{post.excerpt}</p>
                        <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid #F8FAFC' }}>
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[8px] font-bold"
                                 style={{ background: post.authorColor }}>{post.author}</div>
                            <span className="text-[10px] font-medium" style={{ color: '#64748B' }}>{post.authorName}</span>
                          </div>
                          <span className="text-[10px] font-semibold flex items-center gap-1" style={{ color: '#6366F1' }}>
                            Read <i className="fa-solid fa-arrow-right text-[9px]"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom row: 2 compact horizontal cards + newsletter */}
              <div className="grid md:grid-cols-3 gap-5">
                {/* Compact card 1 — AI */}
                <div className="group cursor-pointer rounded-2xl overflow-hidden"
                     style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}
                     data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
                  <div className="relative h-16 flex items-center gap-3 px-4"
                       style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #4338CA 60%, #7C3AED 100%)' }}>
                    <div className="absolute" style={{ top: -20, right: -10, width: 80, height: 80, borderRadius: '50%', background: 'rgba(139,92,246,0.5)', filter: 'blur(20px)' }}></div>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center relative"
                         style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}>
                      <i className="fa-solid fa-robot text-white text-xs"></i>
                    </div>
                    <div className="relative">
                      <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', lineHeight: 1, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>2.5M+</div>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)' }}>workflows automated</div>
                    </div>
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[9px] font-semibold"
                          style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}>Case Study</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: '#EDE9FE', color: '#7C3AED' }}>AI Automation</span>
                      <span className="text-[10px] flex items-center gap-1" style={{ color: '#94A3B8' }}><i className="fa-regular fa-clock text-[9px]"></i> 4 min</span>
                    </div>
                    <h4 className="font-bold leading-snug mb-1 group-hover:text-[#6366F1] transition-colors"
                        style={{ fontSize: 13, color: '#0F172A' }}>
                      How AlpineTours automated 80% of their booking confirmations with zero code
                    </h4>
                    <div className="mt-3 text-[10px] font-semibold flex items-center gap-1" style={{ color: '#6366F1' }}>
                      Read case study <i className="fa-solid fa-arrow-right text-[9px]"></i>
                    </div>
                  </div>
                </div>

                {/* Compact card 2 — Analytics */}
                <div className="group cursor-pointer rounded-2xl overflow-hidden"
                     style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}
                     data-aos="fade-up" data-aos-delay="180" data-aos-duration="600">
                  <div className="relative h-16 flex items-center gap-3 px-4"
                       style={{ background: 'linear-gradient(135deg, #0C4A6E 0%, #0284C7 60%, #38BDF8 100%)' }}>
                    <div className="absolute" style={{ top: -20, right: -10, width: 80, height: 80, borderRadius: '50%', background: 'rgba(56,189,248,0.4)', filter: 'blur(20px)' }}></div>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center relative"
                         style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}>
                      <i className="fa-solid fa-chart-column text-white text-xs"></i>
                    </div>
                    <div className="relative">
                      <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', lineHeight: 1, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>97.4%</div>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)' }}>SLA compliance avg</div>
                    </div>
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[9px] font-semibold"
                          style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}>Report</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: '#EFF6FF', color: '#2563EB' }}>Analytics</span>
                      <span className="text-[10px] flex items-center gap-1" style={{ color: '#94A3B8' }}><i className="fa-regular fa-clock text-[9px]"></i> 8 min</span>
                    </div>
                    <h4 className="font-bold leading-snug mb-1 group-hover:text-[#6366F1] transition-colors"
                        style={{ fontSize: 13, color: '#0F172A' }}>
                      Travel & hospitality software benchmark report — 2025 edition
                    </h4>
                    <div className="mt-3 text-[10px] font-semibold flex items-center gap-1" style={{ color: '#6366F1' }}>
                      Download report <i className="fa-solid fa-arrow-right text-[9px]"></i>
                    </div>
                  </div>
                </div>

                {/* Newsletter CTA card */}
                <div className="rounded-2xl p-5 flex flex-col justify-between"
                     style={{ background: 'linear-gradient(140deg, #EEF2FF 0%, #F5F3FF 100%)', border: '1px solid #C7D2FE' }}
                     data-aos="fade-up" data-aos-delay="260" data-aos-duration="600">
                  <div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                         style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}>
                      <i className="fa-solid fa-paper-plane text-white text-sm"></i>
                    </div>
                    <div className="font-extrabold mb-1"
                         style={{ fontSize: 15, color: '#0F172A', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                      Weekly travel tech insights
                    </div>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: '#64748B' }}>
                      Software guides, hospitality trends, and product updates. No spam — unsubscribe anytime.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <input type="email" placeholder="your@company.com"
                           className="w-full px-3.5 py-2.5 rounded-xl text-xs outline-none"
                           style={{ background: '#fff', border: '1px solid #C7D2FE', color: '#0F172A' }} />
                    <button className="w-full py-2.5 rounded-xl text-xs font-semibold text-white btn-violet">
                      Subscribe for free
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* 10 ── Final CTA — stays dark gradient */}
          <section className="py-28 cta-band" data-aos="fade-up" data-aos-duration="700">
            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
              <SectionTag label="Get started today" dark />
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-5"
                  style={{ fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>
                Run your entire operation<br className="hidden sm:block" /> from one platform.
              </h2>
              <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Join 300+ travel & hospitality businesses already powered by Bu Marka.
                Free for 14 days — no credit card, no commitment.
              </p>

              {ctaSent ? (
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold"
                     style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: '#86EFAC' }}></i>
                  We'll be in touch shortly!
                </div>
              ) : (
                <form onSubmit={handleCtaSubmit}
                      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input type="email" value={ctaEmail} onChange={e => setCtaEmail(e.target.value)}
                         placeholder="Enter your work email"
                         className="flex-1 px-5 py-3.5 rounded-xl text-white placeholder-[#94A3B8] outline-none text-sm
                                    focus:ring-2 focus:ring-white/30 transition"
                         style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }} />
                  <button type="submit"
                          className="px-7 py-3.5 rounded-xl font-semibold text-sm whitespace-nowrap"
                          style={{ background: 'white', color: '#4F46E5' }}>
                    Start free trial
                  </button>
                </form>
              )}

              <p className="mt-4 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                No credit card required · 14-day free trial · Cancel anytime · Full onboarding support included
              </p>
            </div>
          </section>

        </main>
      )}

      {(() => {
        if (currentPage === 'home') return null;
        const page = PAGES[currentPage];
        if (!page || !page.Component) return null;
        const PageComponent = page.Component;
        const wrapPricing = currentPage === 'pricing';
        const content = (
          <PageComponent
            onOpenInquiry={openInquiryModal}
            setCurrentPage={setCurrentPage}
            setScrollTarget={setScrollTarget}
          />
        );
        return wrapPricing
          ? <main className="pt-[60px] md:pt-20 min-h-[70vh]">{content}</main>
          : content;
      })()}

      <Footer
        setCurrentPage={setCurrentPage}
        setScrollTarget={setScrollTarget}
        onOpenInquiry={openInquiryModal}
      />

      <InquiryForm isOpen={isModalOpen} onClose={closeInquiryModal} currentPage={currentPage} />
    </>
  );
}

export default App;
