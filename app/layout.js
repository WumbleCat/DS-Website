// components/Layout.js

import React from 'react';
import { Montserrat } from '@next/font/google';
import Image from 'next/image';

import "./globals.css";

const Inter = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Bristol Data Science',
  description: 'For UOB Data Science Students'
}

const Layout = ({ children }) => {
  return (
    <html lang="en">

      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />

      </head>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      <div className={Inter.className}>
          {children}
      </div>
    </html>
  );
}

export default Layout;