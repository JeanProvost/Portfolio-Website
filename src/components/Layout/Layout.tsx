import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Add the Navbar here */}
      <main>{children}</main>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default Layout; 