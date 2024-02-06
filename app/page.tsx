'use client'


import Link from "next/link";
import Navbar from '@/components/nav/Navbar'
import { inter, montserrat } from "./fonts";

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


function Home() {
  useEffect(() => {
    AOS.init({
      // your AOS configuration options
    });
  }, []); 
 
  return (
      <div className="h-dvh flex flex-col">
        <Navbar />
        
        <main className="mt-8 md:mt-16 px-8 md:px-24">
          <div className="flex flex-col space-y-8 md:max-w-4xl mx-auto">
            <header className={`${montserrat.className} text-4xl md:text-6xl font-bold text-purple-600`}>
              Writing | Developmental & Voice Over Artistry Services.
            </header>

            <p className={`${montserrat.className} leading-normal text-2xl dark:text-gray-400`}>
              Over the years, I have garnered experiences that have propelled me into broadcasting, copywriting and educational services. I have had the opportunity to serve in various capacities such as Head of Communication for Model United Nations Academy as well as research and publications committee. In the course of my growing career, a number of scholarly academic articles are being attributed to my credit.
            </p>
          </div>


        </main>


      </div>

    // <div className="flex">
    //   {/* side menu */}
    //   <div className="fixed w-[80%] md:w-[18%] h-full py-2 bg-white shadow-xl shadow-zinc-400">
    //     <div className="px-4">
    //       <div className="flex flex-col space-y-3">
    //         <div className="w-full flex justify-center">
    //           <Image
    //             src={adetola}
    //             alt="Display picture"
    //             loading="lazy"
    //             className="w-40 rounded-full p-[3px] shadow-lg bg-purple-600 hover:scale-110 transition duration-500 ease-in"
    //           />
    //         </div>

    //         <div className="space-y-1">
    //           <header className="text-xl font-medium text-wrap text-gray-500">
    //             Adetola R, Adenusi PhD.
    //           </header>
    //           <small className="text-purple-600 font-semibold">
    //             Portfolio
    //           </small>
    //         </div>
    //       </div>
    //       <div className="w-full h-[2px] bg-purple-600"></div>

    //       <div className="py-3">
    //         <ul className="text-sm font-normal overflow-y-auto">
    //           <li className="py-1">
    //             <Link href='#' className="text-gray-600 hover:text-purple-600">
    //               Writer
    //             </Link>
    //           </li>
              
    //           <li className="py-1">
    //             <Link href='#' className="text-gray-600 hover:text-purple-600">
    //               Voice Over Artistry
    //             </Link>
    //           </li>
              
    //           <li className="py-1">
    //             <Link href='#' className="text-gray-600 hover:text-purple-600">
    //               Radio Queen
    //             </Link>
    //           </li>
              
    //           <li className="py-1">
    //             <Link href='#' className="text-gray-600 hover:text-purple-600">
    //               Development communicator and lecturer
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="absolute bottom-0 text-sm bg-purple-600 py-3 px-4 z-10 w-full">
    //       <Link href='#' className="font-medium text-black duration-300 ease-in hover:text-white">
    //         Check out my resume
    //       </Link>
    //     </div>
    //   </div>

    //   {/* main content */}
    //   <div className="md:ml-[18%] px-10 py-8">
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ullam impedit saepe. Voluptates numquam aut ducimus ab corporis vel, odit placeat omnis perspiciatis aliquid repellendus tenetur quasi beatae expedita maxime!
    //   </div>
    // </div>

    // <div className="flex h-dvh">
    //   {/* Sidebar */}
    //   <div
    //     className={`bg-white shadow-xl w-64 shadow-purple-400 min-h-dvh transition-all duration-300 ease ${
    //       isSidebarOpen ? 'block' : 'hidden'
    //     }`}
    //     >
    //     {/* Sidebar Content */}
    //     <div className="px-4 py-5">
    //       <div className="flex flex-col space-y-3">
    //         <div className="w-full">
    //           <Image
    //             src={adetola}
    //             alt="Display picture"
    //             loading="lazy"
    //             className="w-40 mx-auto rounded-full p-[3px] shadow-lg bg-purple-600 hover:scale-110 transition duration-500 ease-in"
    //           />
    //         </div>

    //         <div className="space-y-1">
    //           <header className="text-xl font-medium text-wrap text-gray-500">
    //             Adetola R, Adenusi PhD.
    //           </header>
              
    //           <div className="w-full h-[2px] bg-purple-600"></div>
    //         </div>
    //       </div>

    //       <p className="text-purple-600 font-semibold text-sm mt-5">
    //         - Portfolio | Skills -
    //       </p>

    //       <div className="py-3">
    //         <ul className="text-sm font-normal overflow-y-auto">
    //           <li className="py-1">
    //             <Link href='#' className="text-gray-600 hover:text-purple-600">
    //               Writer
    //             </Link>
    //           </li>
              
    //           <li className="py-1">
    //             <Link href='#' className="text-gray-600 hover:text-purple-600">
    //               Project Writing (BSc. MSc.)
    //             </Link>
    //           </li>

    //           <li className="py-1">
    //             <Link href='#' className="text-gray-600 hover:text-purple-600">
    //               Voice Over Artistry
    //             </Link>
    //           </li>
              
    //           <li className="py-1">
    //             <Link href='#' className="text-gray-600 hover:text-purple-600">
    //               Radio Queen
    //             </Link>
    //           </li>
              
    //           <li className="py-1">
    //             <Link href='#' className="text-gray-600 hover:text-purple-600">
    //               Development communicator and lecturer
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Content */}
    //   <div className="flex-1 flex flex-col overflow-hidden">
    //     {/* Navbar */}
    //     <div className="bg-purple-600 p-4">
    //         <AiOutlineMenu size={25} onClick={toggleSidebar} className="cursor-pointer text-white"/>
    //     </div>

    //     {/* Main Content */}
    //     <div className="flex-1 overflow-x-hidden overflow-y-auto p-4">
    //       {/* Your dashboard content goes here */}
    //       <h1 className="text-2xl font-bold mb-4">Overview</h1>
    //       <div className="w-[5%] h-[2px] bg-purple-600"></div>
          
    //       <p className="mt-12">Content goes here.</p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Home