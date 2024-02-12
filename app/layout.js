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
      <div className={Inter.className}>
          {children}
      </div>
    </html>
  );
}

export default Layout;


// import React from 'react';
// import Head from 'next/head'; // Import the Head component
// // Assuming you meant to import a font, let's correct the import
// import { google } from '@next/font/google'; // Corrected font import
// import "./globals.css";

// // Assuming Montserrat was the intended font, but let's correct how it's imported
// const interFont = google({
//   name: 'Montserrat', // Correct the font name
//   subsets: ['latin'],
//   weights: ['400', '700'], // Correct the property name to "weights"
// });

// const Layout = ({ children }) => {
//   return (
//     <>
      // <Head>
      //   <title>Your Website Title</title> {/* Optional: Set a default title */}
      //   <link rel="icon" href="/favicon.ico" /> {/* Favicon link */}
      //   <meta charSet="utf-8" />
      //   <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      // </Head>
//       <div className={interFont.className}>
//         <div className="container mx-auto">
//           {children}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Layout;