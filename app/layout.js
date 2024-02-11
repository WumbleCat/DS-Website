// components/Layout.js

import React from 'react';
import { Montserrat } from '@next/font/google';

const Inter = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={Inter.className}>
        {/* <div className="container mx-auto"> */}
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}

export default Layout;
