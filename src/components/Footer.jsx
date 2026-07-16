import React, { useState } from 'react';
import BuMarkaLogo from './BuMarkaLogo';

const Footer = ({ setCurrentPage, setScrollTarget, onOpenInquiry }) => {
  const [email, setEmail]           = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const goPage    = (page) => { if (setCurrentPage) setCurrentPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const goSection = (id)   => { if (setCurrentPage) setCurrentPage('home'); if (setScrollTarget) setScrollTarget(id); };

  const productLinks = [
    { l: 'CRM',                onClick: () => goPage('product-sales-booking')         },
    { l: 'ERP',                onClick: () => goPage('product-travel-management')      },
    { l: 'HRMS',               onClick: () => goPage('product-hr-app')                },
    { l: 'Helpdesk',           onClick: () => goPage('product-inbox-master')           },
    { l: 'Project Management', onClick: () => goPage('product-operations-logistics')   },
    { l: 'Analytics',          onClick: () => goPage('product-financial-management')   },
  ];

  const companyLinks = [
    { l: 'About us',     onClick: () => goSection('about')       },
    { l: 'All Products', onClick: () => goPage('product')         },
    { l: 'Pricing',      onClick: () => goPage('pricing')         },
    { l: 'Testimonials', onClick: () => goSection('testimonials') },
    { l: 'Contact us',   onClick: () => onOpenInquiry?.()         },
  ];

  const supportLinks = [
    { l: 'Help centre',      onClick: () => onOpenInquiry?.()    },
    { l: 'Features',         onClick: () => goSection('features') },
    { l: 'Privacy policy',   onClick: () => goPage('home')        },
    { l: 'Terms of service', onClick: () => goPage('home')        },
    { l: 'Status',           onClick: () => goPage('home')        },
  ];

  const renderLink = (item, key) => (
    <li key={key}>
      <button onClick={item.onClick}
              className="text-left text-[#94A3B8] hover:text-white transition-colors duration-150 inline-block">
        {item.l}
      </button>
    </li>
  );

  const socials = [
    { icon: 'fa-linkedin-in', label: 'LinkedIn'  },
    { icon: 'fa-twitter',     label: 'Twitter'   },
    { icon: 'fa-github',      label: 'GitHub'    },
    { icon: 'fa-youtube',     label: 'YouTube'   },
  ];

  return (
    <footer style={{ background: '#F9FAFB', borderTop: '1px solid #E2E8F0' }}>
      <div className="mx-3 px-4 md:px-14 py-14 sm:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8">

          {/* Brand block */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 space-y-5">
            <button onClick={() => goPage('home')} className="flex items-center gap-2.5 group" aria-label="Go home">
              <BuMarkaLogo markClassName="h-8 w-8" textClassName="text-lg" />
            </button>
            <p className="text-sm leading-relaxed text-[#475569] max-w-xs">
              Enterprise-grade software solutions — CRM, ERP, HRMS, Helpdesk,
              Analytics, and AI Automation unified in one platform.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ icon, label }, i) => (
                <a key={i} href="#" aria-label={label}
                   className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200
                              text-[#475569] hover:text-white"
                   style={{ background: '#E2E8F0' }}
                   onMouseEnter={e => e.currentTarget.style.background = '#EEF2FF'}
                   onMouseLeave={e => e.currentTarget.style.background = '#E2E8F0'}>
                  <i className={`fa-brands ${icon} text-xs`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 style={{ letterSpacing: '0.06em', fontSize: '11px', color: '#475569', fontWeight: 600 }}
                className="uppercase">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm">{productLinks.map(renderLink)}</ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 style={{ letterSpacing: '0.06em', fontSize: '11px', color: '#475569', fontWeight: 600 }}
                className="uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">{companyLinks.map(renderLink)}</ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 style={{ letterSpacing: '0.06em', fontSize: '11px', color: '#475569', fontWeight: 600 }}
                className="uppercase">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm">{supportLinks.map(renderLink)}</ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 space-y-4">
            <h4 style={{ letterSpacing: '0.06em', fontSize: '11px', color: '#475569', fontWeight: 600 }}
                className="uppercase">
              Stay updated
            </h4>
            <p className="text-sm text-[#475569]">
              Product updates and SaaS industry insights, monthly.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-xs">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                     placeholder="you@company.com"
                     className="flex-1 min-w-0 px-3.5 py-2.5 rounded-lg text-sm text-white
                                placeholder-[#475569] outline-none
                                focus:ring-1 focus:ring-[#6366F1] transition"
                     style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }} />
              <button type="submit" aria-label="Subscribe"
                      className="px-3.5 py-2.5 rounded-lg text-white text-sm btn-violet shrink-0">
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
            </form>
            {subscribed && (
              <p className="text-xs font-medium flex items-center gap-1.5" style={{ color: '#10B981' }}>
                <i className="fa-solid fa-circle-check"></i> You're on the list!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #E2E8F0' }}>
        <div className="mx-3 px-4 md:px-14 py-5
                        flex flex-col sm:flex-row justify-between items-center gap-3
                        text-xs" style={{ color: '#94A3B8' }}>
          <p>© {new Date().getFullYear()} Bu Marka Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            {['Privacy', 'Terms', 'Cookies'].map(item => (
              <button key={item} onClick={() => goPage('home')}
                      className="hover:text-white transition-colors">{item}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
