import React from 'react';
import { Montserrat } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FaFile, FaList, FaLink, FaAddressBook } from 'react-icons/fa';

const Inter = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Home = () => {
  const pills = [
    { title: 'Our Vision and Plan', desc: 'Our plans for the current academic year and the future years', link: '/plan', image: FaList },
    { title: 'Previous Documents', desc: 'Links to previous SSLC meeting notes', link: '/documents', image: FaFile },
    { title: 'Useful Links', desc: 'Links to relevant information for the course. Ex Google Drives, Excel Sheets etc.', link: '/links', image: FaLink },
    { title: 'Contact Us', desc: 'Contact details for the course reps', link: '/contact', image: FaAddressBook },
  ];

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/UoB_building.jpg" // Adjust the image path and extension if needed
          alt="background image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-white bg-opacity-50">
        <div className="border border-gray-400 rounded-full overflow-hidden">
          <Image
            src="/images/uob_logo.jpg"
            alt="University of Bristol Logo"
            width={100}
            height={100}
            className="mx-auto h-32 w-32 font-bold shadow-2xl"
          />
        </div>

        <div className="bg-white rounded-lg mt-5 pt-4 pb-2 px-4 text-center">
          <h1 className="text-5xl font-roboto">University of Bristol</h1>
          <h1 className="text-5xl font-roboto">Data Science</h1>
          <div className='text-gray-500 pt-2'>
            <p>Unofficial website made by students from UoB Data Science course year 1 </p>
            <p>as an information hub for other year 1 students.</p>
          </div>
        </div>

        <div className="p-10">
          {pills.map((pill, index) => (
            <div key={index} className="border border-gray-400 rounded-lg p-4 mx-4 my-8 flex flex-col md:flex-row shadow-lg bg-white">
              <div className="flex flex-col mx-3">
                <div className="flex items-center">
                  <pill.image size={25} className='pr-2'/>
                  <h2 className="text-xl font-semibold">{pill.title}</h2>
                </div>
                <p className="text-gray-600">{pill.desc}</p>
              </div>
              <div className="ml-auto mt-4 md:mt-0">
                <Link href={pill.link} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded inline-flex items-center">
                  More info
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
