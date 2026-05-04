import Pricing from './components/Pricing';
import ProductMain from './components/ProductMain';
import SalesBookingPage from './components/Product_subpages/Sales&Booking';
import FinancialManagementPage from './components/Product_subpages/Financial-Management';
import OperationsLogisticsPage from './components/Product_subpages/Operations-Logistics';
import TravelManagementPage from './components/Product_subpages/Travel-Management';
import TourGuideAppPage from './components/Product_subpages/Tour-Guide-App';
import DriverAppPage from './components/Product_subpages/Driver-App';
import HumanResourceAppPage from './components/Product_subpages/Human-Resource-App';
import ContractManagementPage from './components/Product_subpages/Contract-Management';

/*
  Page registry — single source of truth for every page in the app.
  • key:        the value of `currentPage` in App state
  • label:      shown in nav menus
  • Component:  React component to render (null = handled inline by App, e.g. 'home')
  • inProductMenu: appears in the Header's Product dropdown
  • icon:       optional FA class for the dropdown
*/
export const PAGES = {
    home:                            { key: 'home',                            label: 'Home',                                 Component: null,                          inProductMenu: false },
    pricing:                         { key: 'pricing',                         label: 'Pricing',                              Component: Pricing,                       inProductMenu: false },
    product:                         { key: 'product',                         label: 'All Products',                         Component: ProductMain,                   inProductMenu: true,  icon: 'fa-solid fa-grip' },
    'product-sales-booking':         { key: 'product-sales-booking',           label: 'Hotel & Booking',                      Component: SalesBookingPage,              inProductMenu: true,  icon: 'fa-solid fa-hotel' },
    'product-travel-management':     { key: 'product-travel-management',       label: 'All-in-One Travel Mgmt',               Component: TravelManagementPage,          inProductMenu: true,  icon: 'fa-solid fa-globe' },
    'product-financial-management':  { key: 'product-financial-management',    label: 'Accounting (Travel)',                  Component: FinancialManagementPage,       inProductMenu: true,  icon: 'fa-solid fa-calculator' },
    'product-operations-logistics':  { key: 'product-operations-logistics',    label: 'Fleet & Operations',                   Component: OperationsLogisticsPage,       inProductMenu: true,  icon: 'fa-solid fa-truck-fast' },
    'product-tour-guide-app':        { key: 'product-tour-guide-app',          label: 'Tour Guide App',                       Component: TourGuideAppPage,              inProductMenu: true,  icon: 'fa-solid fa-map-location-dot' },
    'product-driver-app':            { key: 'product-driver-app',              label: 'Driver App',                           Component: DriverAppPage,                 inProductMenu: true,  icon: 'fa-solid fa-id-card-clip' },
    'product-hr-app':                { key: 'product-hr-app',                  label: 'Human Resource App',                   Component: HumanResourceAppPage,          inProductMenu: true,  icon: 'fa-solid fa-users-gear' },
    'product-contract-management':   { key: 'product-contract-management',     label: 'Contract Management',                  Component: ContractManagementPage,        inProductMenu: true,  icon: 'fa-solid fa-file-signature' },
};

export const productMenuPages = Object.values(PAGES).filter(p => p.inProductMenu && p.key !== 'product');

export const isValidPage = (key) => Boolean(PAGES[key]);

/* ------------------------------------------------------------------
   Future migration to React Router (when you're ready):

     import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

     function App() {
       return (
         <BrowserRouter>
           <Header />
           <Routes>
             <Route path="/"                              element={<Home />} />
             <Route path="/pricing"                       element={<Pricing />} />
             <Route path="/product"                       element={<ProductMain />} />
             <Route path="/product/sales-booking"         element={<SalesBookingPage />} />
             <Route path="/product/travel-management"     element={<TravelManagementPage />} />
             <Route path="/product/financial-management"  element={<FinancialManagementPage />} />
             <Route path="/product/operations-logistics"  element={<OperationsLogisticsPage />} />
             <Route path="/product/tour-guide-app"        element={<TourGuideAppPage />} />
             <Route path="/product/driver-app"            element={<DriverAppPage />} />
             <Route path="/product/hr-app"                element={<HumanResourceAppPage />} />
             <Route path="/product/contract-management"   element={<ContractManagementPage />} />
             <Route path="*"                              element={<Navigate to="/" replace />} />
           </Routes>
           <Footer />
         </BrowserRouter>
       );
     }

   To migrate components that currently call setCurrentPage:
     const navigate = useNavigate();
     navigate('/product/sales-booking');

   The keys in PAGES above already mirror the URL slugs — the swap is mostly
   mechanical (replace setCurrentPage('product-x') with navigate('/product/x')).
------------------------------------------------------------------ */
