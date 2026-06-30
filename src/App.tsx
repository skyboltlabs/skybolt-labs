import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/UI/ErrorBoundary';
import { ToastProvider } from './contexts/ToastContext';
import ScrollToTopOnNavigate from './components/Utils/ScrollToTopOnNavigate';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import AdLandingPage from './pages/AdLandingPage';
import Pricing from './pages/Pricing';
import GetStarted from './pages/GetStarted';
import NotFound from './pages/NotFound';

const LayoutWrapper = () => (
  <Layout>
    <Outlet />
  </Layout>
);

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ToastProvider>
          <ThemeProvider>
            <Router>
              <ScrollToTopOnNavigate />
              <Routes>
                <Route element={<LayoutWrapper />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogPost />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/ad-landing" element={<AdLandingPage />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/get-started" element={<GetStarted />} />
              </Routes>
            </Router>
          </ThemeProvider>
        </ToastProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;