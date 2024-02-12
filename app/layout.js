// components/Layout.js

import React from 'react';
import { Montserrat } from '@next/font/google';
import "./globals.css";

const Inter = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <div className={Inter.className}>
        <div className="container mx-auto">
          {children}
        </div>
      </div>
    </html>
  );
}

export default Layout;
