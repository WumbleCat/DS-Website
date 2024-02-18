// 'use client'
// import AccordianItem from '@/components/accordian';
// import React, { useState } from 'react';

// export default function Documents() {

//   const [openIndex, setOpenIndex] = useState(-1);

//   const toggle = (index) => {
//     setOpenIndex(prevOpenIndex => prevOpenIndex === index ? -1 : index);
//   }

//   const accordionData = [
//     {
//       title: "Title 1",
//       desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt delectus ea repudiandae dolor tempore neque perspiciatis adipisci accusamus optio, architecto unde culpa, quod laudantium aut harum beatae nulla vitae? Impedit, quae alias."
//     },
//     {
//       title: "Title 2",
//       desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt delectus ea repudiandae dolor tempore neque perspiciatis adipisci accusamus optio, architecto unde culpa, quod laudantium aut harum beatae nulla vitae? Impedit, quae alias."
//     },
//     {
//       title: "Title 3",
//       desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt delectus ea repudiandae dolor tempore neque perspiciatis adipisci accusamus optio, architecto unde culpa, quod laudantium aut harum beatae nulla vitae? Impedit, quae alias."
//     },
//   ];

//   return (
//     <div className='h-screen grid place-items-center'>
//       <div className='px-[40px] max-w-[800px]'>
//         {accordionData.map((data, index) => (
//           <AccordianItem 
//           key={index} 
//           open={index === openIndex} 
//           title={data.title} 
//           desc={data.desc} 
//           toggle={() => toggle(index)} 
//         />        
//         ))}
//       </div>
//     </div>
//   );
// }


import React from 'react';

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/4 h-3/4 bg-white p-8 rounded-lg shadow-lg">
        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
              <span>Day 1</span>
              <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-black dark:text-gray-400">We did this stuff blah blah</p>
              <p className="text-black dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dicta exercitationem? Nobis, molestias aspernatur! Sapiente, nesciunt aliquam. Ipsa, commodi cumque.</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-2">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
              <span>Day 2</span>
              <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-black dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In cumque vero quibusdam placeat non aperiam, quaerat quisquam animi possimus reiciendis suscipit ducimus accusantium. Magni perspiciatis iste placeat laborum quisquam velit aliquid nobis.</p>
              <p className="text-black dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatum porro et cumque fugit tempore labore. Quibusdam cumque deserunt cupiditate odio dolorum nam ducimus amet magni, exercitationem vitae. Quis deleniti in quidem..</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-3">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
              <span>Day 3</span>
              <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-black dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto autem iste sapiente, voluptatem, quia fuga a laudantium voluptatum earum quos reiciendis. Blanditiis iusto maiores dolorem esse eius possimus voluptate iste libero quam.</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
