// components/Layout.js

import './globals.css'
import React from 'react';
import { Montserrat } from '@next/font/google';
import Link from 'next/link';

const Inter = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Layout = ({ children }) => {
  return (
    <div className={Inter.className}>
    <div className="container mx-auto">
      {/* <Link href="/vision">Vision</Link>
      <Link href="/documents">Documents</Link>
      <Link href="links">Links</Link>
      <Link href="contact-us">Contact</Link> */}
      {children}
    </div>
    </div>
  );
}

export default Layout;
