'use client'

import Image from "next/image";
import adetola from '../public/img/adetola.png'
import Link from "next/link";
import { useState } from "react";

function Home() {
  const [sideMenu, setSideMenu] = useState(false)

  

  return (
    <div className="flex">
      {/* side menu */}
      <div className="fixed w-[80%] md:w-[18%] h-full py-2 bg-white shadow-xl shadow-zinc-400">
        <div className="px-4">
          <div className="flex flex-col space-y-3">
            <div className="w-full flex justify-center">
              <Image
                src={adetola}
                alt="Display picture"
                loading="lazy"
                className="w-40 rounded-full p-[3px] shadow-lg bg-purple-600 hover:scale-110 transition duration-500 ease-in"
              />
            </div>

            <div className="space-y-1">
              <header className="text-xl font-medium text-wrap text-gray-500">
                Adetola R, Adenusi PhD.
              </header>
              <small className="text-purple-600 font-semibold">
                Portfolio
              </small>
            </div>
          </div>
          <div className="w-full h-[2px] bg-purple-600"></div>

          <div className="py-3">
            <ul className="text-sm font-normal overflow-y-auto">
              <li className="py-1">
                <Link href='#' className="text-gray-600 hover:text-purple-600">
                  Writer
                </Link>
              </li>
              
              <li className="py-1">
                <Link href='#' className="text-gray-600 hover:text-purple-600">
                  Voice Over Artistry
                </Link>
              </li>
              
              <li className="py-1">
                <Link href='#' className="text-gray-600 hover:text-purple-600">
                  Radio Queen
                </Link>
              </li>
              
              <li className="py-1">
                <Link href='#' className="text-gray-600 hover:text-purple-600">
                  Development communicator and lecturer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute bottom-0 text-sm bg-purple-600 py-3 px-4 z-10 w-full">
          <Link href='#' className="font-medium text-black duration-300 ease-in hover:text-white">
            Check out my resume
          </Link>
        </div>
      </div>

      {/* main content */}
      <div className="md:ml-[18%] px-10 py-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ullam impedit saepe. Voluptates numquam aut ducimus ab corporis vel, odit placeat omnis perspiciatis aliquid repellendus tenetur quasi beatae expedita maxime!
      </div>
    </div>
  )
}

export default Home