'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F5F5F5] shadow-md">
      <div className="max-w-full lg:ml-8 sm:mx-auto pr-4 sm:pr-6 lg:pr-8">
        <div className="flex justify-evenly h-16">
          <div className="flex items-center justify-evenly">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
            <div className="hidden sm:flex sm:space-x-4">
              <Link href="/features" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </Link>
              <Link href="/testimonials" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Testimonials
              </Link>
              <Link href="/resources" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Resources
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1">
            <div className="shrink-0">
              <Image src='/tensors.png' alt='Tensors Logo' width={100} height={100} />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Contact Us
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </Link>
            <Link href="/pages/login" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Logout
            </Link>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/features" className="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link href="/testimonials" className="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Testimonials
            </Link>
            <Link href="/resources" className="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Resources
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-[#F5F5F5] shadow-md">
//       <div className="max-w-full lg:ml-8 sm:mx-auto pr-4 sm:pr-6 lg:pr-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <div className="hidden sm:flex sm:space-x-8">
//               <Link href="/features" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
//                 Features
//               </Link>
//               <Link href="/pricing" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
//                 Pricing
//               </Link>
//               <Link href="/testimonials" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
//                 Testimonials
//               </Link>
//               <Link href="/resources" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
//                 Resources
//               </Link>
//             </div>
//           </div>
//           <div className="flex items-center justify-center flex-1">
//             <div className="shrink-0">
//               <Image src='/tensors.png' alt='Tensors Logo' width={100} height={100} />
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Link href="/contact" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
//               Contact Us
//             </Link>
//             <Link href="/about" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
//               About Us
//             </Link>
//             <Link href="/login" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
//               Logout
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;