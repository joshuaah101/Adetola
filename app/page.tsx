"use client";

import Link from "next/link";
import Navbar from "@/components/nav/Navbar";
import { inter, montserrat } from "./fonts";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TiltCard from "@/components/tilt";
import AchievementCard from "@/components/main/AchievementCard";
import img1 from "@/public/img/ARA-9.jpg"
import muna from '@/public/img/muna.jpeg'
import change from "@/public/img/change.jpeg"


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
          <header
            className={`${montserrat.className} text-4xl md:text-6xl font-bold text-purple-600`}
          >
            Writing | Developmental & Voice Over Artistry Services.
          </header>

          <p
            className={`${montserrat.className} leading-normal text-2xl dark:text-gray-400`}
          >
            Curate thought provoking piece in the areas of communication,
            reproductive health research, voice over scripts for brands,
            experienced in academic research, adept in both qualitative and
            quantitative research methods. Diversity of writing in curating
            developmental content that addresses social vices and promoting
            intellectual perspectives.
          </p>
        </div>

        <div className="my-20">
          <header className="text-4xl font-bold tracking-wide mb-10">
            Events
          </header>

          <div className="flex flex-col md:items-start md:flex-row gap-10">
            <AchievementCard
              imgSrc={img1}
              imgAlt="Workshop"
              title="Communication and Development Workshop"
              paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, cumque unde sint modi repudiandae quasi vel nihil, eum expedita ullam maiores nam? Minima iure perspiciatis voluptate! Ipsa numquam pariatur itaque."
            />

            <AchievementCard
              imgSrc={muna}
              imgAlt="Muna conference"
              title="MUNA Conference"
              paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, cumque unde sint modi repudiandae quasi vel nihil, eum expedita ullam maiores nam? Minima iure perspiciatis voluptate! Ipsa numquam pariatur itaque."
            />

            <AchievementCard
              imgSrc={change}
              imgAlt="Change conference"
              title="Change the World Conference"
              paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, cumque unde sint modi repudiandae quasi vel nihil, eum expedita ullam maiores nam? Minima iure perspiciatis voluptate! Ipsa numquam pariatur itaque."
            />

          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
