import React from 'react';
import Image from 'next/image';
import { Montserrat } from '@next/font/google';
import Link from 'next/link';

const Inter = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function Home() {
    const pills = [
        {"title": "Our Vision and Plan", "desc": "Our plans for the current academic year and the future years", "link": "/plan", "image": ""},
        {"title": "Previous Documents", "desc": "Links to previous SSLC meeting notes", "link": "/documents", "image": ""},
        {"title": "Useful Links", "desc": "Links to relevant information for the course. Ex Google Drives, Excel Sheets etc.", "link": "/links", "image": ""},
        {"title": "Contact Us", "desc": "Contact details for the course reps", "link": "/contact", "image": ""}
    ];

    return (
        <div className={Inter.className}>
            <div className="flex flex-col items-center justify-center mt-10 mx-3">
                <div className="border border-gray-400 rounded-full overflow-hidden">
                    {/* <img src="/images/uob_logo.jpg" alt="University of Bristol Logo" className="mx-auto h-32 w-32" /> */}
                    <Image
                        src="/images/uob_logo.jpg"
                        alt=""
                        width={100}
                        height={100}
                        className="mx-auto h-32 w-32"
                    />
                </div>

                <div className='pt-5'>
                    <h1 className="text-center text-5xl font-roboto">University of Bristol</h1>
                    <h1 className="text-center text-5xl pt-3 font-roboto">Data Science</h1>
                    <p className='pt-4 text-gray-500 text-opacity-80'>Unofficial website made by students from UoB Data Science course year 1 as an information hub for other year 1 students.</p>
                </div>

                <div className='p-10'>
                    {pills.map((pill, index) => (
                        <div key={index} className=" rounded-lg p-4 mx-4 my-8 flex flex-col md:flex-row shadow-lg">
                            <div className='flex flex-col mx-3'>
                                <div className='flex items-center'>
                                    {/* <img src="/images/uob_logo.jpg" alt="img" className='w-8 h-8 mr-2' /> */}

                                    <Image
                                        src="/images/uob_logo.jpg"
                                        width={20}
                                        height={20}
                                        className="w-8 h-8 mr-2"
                                    />

                                    <h2 className="text-xl font-semibold">{pill.title}</h2>
                                </div>
                                <p className="text-gray-600">{pill.desc}</p>
                            </div>
                            <div className="ml-auto mt-4 md:mt-0"> {/* Added margin-top for small screens */}
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
}
