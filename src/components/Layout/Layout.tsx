import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Add the Navbar here */}
      <main>{children}</main>
      {/* Footer will go here */}
    </div>
  );
};

export default Layout; 