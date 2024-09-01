import Link from 'next/link';
import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Blog() {
  return (
    <section className="bg-white h-screen flex flex-col">
      <header className="bg-white border-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-5 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className='flex items-center gap-4'>
              <FaMapMarkerAlt color='red' size={40}/>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-4xl">Information Kiosk</h1>
            </div>
            <p className="mt-1.5 text-xl text-gray-500">
              Your ultimate guide to navigating college life effortlessly
            </p>
          </div>
        </div>
      </header>
      <div 
        className="h-screen flex-1 flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: 'url(un.jpg)', 
          backgroundSize: 'contain', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center'
         }}
      >
        <div className="text-center px-4 py-13 bg-white bg-opacity-50 rounded-lg">
          <h1 className="text-4xl py-19 text-nowrap font-extrabold sm:text-5xl">
            Explore Your Campus with Confidence
            <strong className="font-extrabold text-red-700 sm:block">Navigate Effortlessly with UniMapNavigator.</strong>
          </h1>
          <p className="mt-4 font-bold text-lg sm:text-xl">
            UniMapNavigator is your go-to tool for discovering every corner of your campus. Find classrooms, libraries, cafes, and more with ease, ensuring you never get lost again.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/Explore"
            >
              Start Exploring
            </a>
            <Link className="block w-full rounded bg-gray-100 px-12 py-3 text-sm font-medium text-red shadow hover:bg-red-100 focus:outline-none focus:ring active:bg-red-500 sm:w-auto" href="/Details">
              Know more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
