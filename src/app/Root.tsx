import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function Root() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
