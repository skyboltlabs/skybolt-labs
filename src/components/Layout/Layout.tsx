import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsAppButton from '../UI/FloatingQuoteButton';
import ScrollToTop from '../UI/ScrollToTop';
import CustomCursor from '../UI/CustomCursor';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen transition-colors">
      <CustomCursor />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Layout;