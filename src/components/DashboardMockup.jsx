import React from 'react';

const bars = [28, 40, 33, 55, 48, 68, 52, 76, 61, 82, 70, 95];

const recentDeals = [
  { initial: 'S', name: 'Stripe Inc.',   type: 'Enterprise · $24k ARR', status: 'Won',    color: '#10B981' },
  { initial: 'N', name: 'Nexify Corp.',  type: 'Growth · $8k ARR',      status: 'Active', color: '#6366F1' },
  { initial: 'T', name: 'TechVentures', type: 'Starter · $3k ARR',     status: 'Active', color: '#8B5CF6' },
];

const sidebarIcons = [
  { icon: 'fa-house',        active: true  },
  { icon: 'fa-users',        active: false },
  { icon: 'fa-chart-bar',    active: false },
  { icon: 'fa-circle-nodes', active: false },
  { icon: 'fa-gear',         active: false },
];

const kpis = [
  { label: 'Active Deals', value: '142',    delta: '+12.4%', icon: 'fa-handshake'          },
  { label: 'MRR',          value: '$48.6K', delta: '+21.3%', icon: 'fa-circle-dollar-sign' },
  { label: 'CSAT Score',   value: '96.8%',  delta: '+2.1%',  icon: 'fa-star'               },
];

const DashboardMockup = () => (
  <div className="relative w-full rounded-xl overflow-hidden mockup-shadow"
       style={{ border: '1px solid #1C2040' }}>

    {/* Browser chrome */}
    <div style={{ background: '#0D0F1C', borderBottom: '1px solid #1C2040' }}
         className="px-4 py-2.5 flex items-center gap-3">
      <div className="flex gap-1.5 shrink-0">
        <span className="block w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }}></span>
        <span className="block w-2.5 h-2.5 rounded-full" style={{ background: '#FFBD2E' }}></span>
        <span className="block w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }}></span>
      </div>
      <div className="flex-1 flex items-center gap-1.5 px-3 py-1 rounded"
           style={{ background: '#0B0D1A' }}>
        <i className="fa-solid fa-lock text-[9px]" style={{ color: '#4B5280' }}></i>
        <span className="text-[11px]" style={{ color: '#4B5280' }}>app.bumarka.io/crm/overview</span>
      </div>
      <div className="flex gap-1.5 shrink-0">
        <span className="block w-2.5 h-2.5 rounded-full" style={{ background: '#1C2040' }}></span>
        <span className="block w-2.5 h-2.5 rounded-full" style={{ background: '#1C2040' }}></span>
      </div>
    </div>

    {/* Dashboard body */}
    <div className="flex" style={{ height: 380, background: '#0B0D1A' }}>

      {/* Sidebar */}
      <div className="flex flex-col items-center py-4 gap-2.5"
           style={{ width: 52, background: '#080A14', borderRight: '1px solid #1C2040' }}>
        <div className="flex items-center justify-center rounded-lg mb-1 text-xs font-bold"
             style={{ width: 30, height: 30, background: 'rgba(99,102,241,0.2)', color: '#818CF8' }}>
          BM
        </div>
        {sidebarIcons.map(({ icon, active }, i) => (
          <div key={i} className="flex items-center justify-center rounded-lg"
               style={{ width: 30, height: 30, background: active ? 'rgba(99,102,241,0.2)' : 'transparent', cursor: 'pointer' }}>
            <i className={`fa-solid ${icon} text-[11px]`}
               style={{ color: active ? '#6366F1' : '#475569' }}></i>
          </div>
        ))}
        <div className="mt-auto flex items-center justify-center rounded-full text-[9px] font-bold text-white"
             style={{ width: 26, height: 26, background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}>
          JD
        </div>
      </div>

      {/* Main panel */}
      <div className="flex-1 flex flex-col gap-3 p-4 overflow-hidden">

        {/* Page header */}
        <div className="flex justify-between items-center shrink-0">
          <div>
            <div className="text-sm font-semibold text-white">CRM Overview</div>
            <div className="text-[10px]" style={{ color: '#475569' }}>May 2025</div>
          </div>
          <div className="flex gap-1.5">
            <div className="px-2.5 py-1 rounded-md text-[10px] cursor-pointer"
                 style={{ background: '#1C2040', color: '#94A3B8' }}>Export</div>
            <div className="px-2.5 py-1 rounded-md text-[10px] cursor-pointer text-white"
                 style={{ background: '#6366F1' }}>+ New Deal</div>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-3 gap-2 shrink-0">
          {kpis.map((kpi, i) => (
            <div key={i} className="rounded-lg p-2.5" style={{ background: '#111322', border: '1px solid #1C2040' }}>
              <div className="flex justify-between items-start mb-1.5">
                <span className="text-[9px]" style={{ color: '#475569' }}>{kpi.label}</span>
                <i className={`fa-solid ${kpi.icon} text-[9px]`} style={{ color: '#6366F1' }}></i>
              </div>
              <div className="text-xs font-bold text-white">{kpi.value}</div>
              <div className="text-[9px] mt-0.5" style={{ color: '#10B981' }}>{kpi.delta} vs last mo</div>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="rounded-lg p-3 flex-1 flex flex-col"
             style={{ background: '#111322', border: '1px solid #1C2040', minHeight: 0 }}>
          <div className="flex justify-between items-center mb-2 shrink-0">
            <span className="text-[10px] font-medium" style={{ color: '#94A3B8' }}>Revenue Growth</span>
            <span className="text-[9px] px-1.5 py-0.5 rounded"
                  style={{ color: '#6366F1', border: '1px solid rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.1)' }}>
              2025
            </span>
          </div>
          <div className="flex items-end gap-0.5 flex-1" style={{ minHeight: 0 }}>
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm"
                   style={{
                     height: `${h}%`,
                     background: i === bars.length - 1
                       ? 'linear-gradient(180deg, #818CF8, #6366F1)'
                       : i >= bars.length - 4
                         ? 'rgba(99,102,241,0.4)'
                         : '#1C2040',
                   }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-1.5 shrink-0">
            {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map(m => (
              <span key={m} className="text-[8px]" style={{ color: '#475569' }}>{m}</span>
            ))}
          </div>
        </div>

        {/* Recent deals */}
        <div className="shrink-0 space-y-1.5">
          <div className="text-[10px] font-medium mb-1" style={{ color: '#475569' }}>Recent Deals</div>
          {recentDeals.map((d, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="rounded-full flex items-center justify-center text-white text-[8px] font-bold shrink-0"
                   style={{ width: 20, height: 20, background: d.color }}>
                {d.initial}
              </div>
              <span className="text-[10px] text-white flex-1 truncate">{d.name}</span>
              <span className="text-[9px]" style={{ color: '#475569' }}>{d.type}</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-medium"
                    style={{
                      background: d.status === 'Won' ? 'rgba(16,185,129,0.15)' : 'rgba(99,102,241,0.15)',
                      color:      d.status === 'Won' ? '#10B981' : '#818CF8',
                    }}>
                {d.status}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
);

export default DashboardMockup;
