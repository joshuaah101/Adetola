'use client'

import Image from "next/image";
import tola from '/public/img/adetola.png'
import Navbar from "@/components/nav/Navbar"
import { useEffect } from "react";
import Typed from "typed.js";
import { inter, montserrat } from "../fonts";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRouter } from "next/router";

const About = () => {
    useEffect(() => {
        AOS.init({
          // your AOS configuration options
        });
      }, []); 
      
    useEffect(() => {
        // Create a new instance of Typed
        const typed = new Typed('#typed-about', {
          strings: ['Hi there!', 'I am Adetola R, Adenusi PhD.', 'Welcome to my space'],
          typeSpeed: 70,
          backSpeed: 25,
          loop: true,
        });
    
        // Clean up the Typed instance on component unmount
        return () => {
          typed.destroy();
        };
      }, []);

  return (
    <div className="h-dvh flex flex-col">
        <Navbar />

        <main className="mt-8 md:mt-24 px-8 md:px-24">
            <div className="flex flex-col space-y-3 md:max-w-4xl mx-auto">
                <header id="typed-about" className={`${montserrat.className} text-4xl md:text-6xl font-bold text-purple-600`}></header>

            
                <p className={`${montserrat.className} leading-normal text-2xl dark:text-gray-400`}>
                    Over the years, I have garnered experiences that have propelled me into broadcasting, copywriting and educational services. I have had the opportunity to serve in various capacities such as Head of Communication for Model United Nations Academy as well as research and publications committee. In the course of my growing career, a number of scholarly academic articles are being attributed to my credit.
                </p>
            </div>

            <div className="w-full mt-5" data-aos="flip-down" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <Image
                src={tola}
                className=""
                alt="Adetola"
                />
          </div> 
        </main>
    </div>
  )
}

export default About