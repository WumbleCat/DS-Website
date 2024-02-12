// components/Layout.js

import React from 'react';
import { Montserrat } from '@next/font/google';
import Image from 'next/image';

import "./globals.css";

const Inter = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <div className={Inter.className}>
          {children}
      </div>
    </html>
  );
}

export default Layout;
