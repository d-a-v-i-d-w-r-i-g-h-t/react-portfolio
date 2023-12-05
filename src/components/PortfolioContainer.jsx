import { useState } from 'react';

import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      <main className="mx-3">{renderPage()}</main>

      <Footer />
    </div>
  );
}