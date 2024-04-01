"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

        <div className="h-1/2 lg:h-full lg:w-5/12 relative">
          <Image src="/Logos.png" alt="My Photo" fill className="object-contain" />
        </div>

        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">

          <h1 className="text-4xl md:text-6xl font-bold">
          Brushstrokes on a Digital Canvas:  <br/> <span className="md:text-5xl ">Artistic Front-End Designs. </span>
          </h1>

          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. Embark on a journey where design meets development. 
          </p>

          <div className="w-full flex gap-4">
            <Link href={'/portfolio'} className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </Link>
            <Link href={'/contact'} className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
