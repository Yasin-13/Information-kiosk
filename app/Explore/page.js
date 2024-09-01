"use client"


import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const page = () => {
  const [timetableSrc, setTimetableSrc] = useState(null);

  const handleMouseOver = (src) => {
    setTimetableSrc(src);
  };

  const handleMouseOut = () => {
    setTimetableSrc(null);
  };

  return (
    <section className="bg-gray-50 h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className='flex items-center gap-4'>
              <FaMapMarkerAlt color='red' size={40} />
              <h1 className="text-4xl font-bold text-gray-900 sm:text-4xl">UniMapNavigator</h1>
            </div>
            <p className="mt-1.5 text-2xl text-gray-500">
              Your ultimate guide to navigating college life effortlessly
            </p>
          </div>
        </div>
      </header>
      
      {/* Floor Map */}
      <div className="relative flex-1 flex items-center justify-center bg-gray-100">
        <img
          src="Corridor1.png" // Replace with the actual path to your floor map image
          alt="Floor Map"
          useMap="#image-map"
          className="max-w-full h-auto"
        />
        
         {/* Timetable Display */}
         {timetableSrc && (
          <div
            className="absolute top-0 left-0 flex items-center justify-center"
            style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
          >
            <img
              src={timetableSrc}
              alt="Timetable"
              className="border border-gray-300"
              style={{ maxWidth: '80%', maxHeight: '80%' }} // Adjust size as needed
            />
          </div>
        )}
      </div>
      
      {/* Image Map */}
      <map name="image-map">
        <area
          alt="Classroom 1"
          href="#"
          coords="260,286,338,351"
          shape="rect"
          onMouseOver={() => handleMouseOver('t1.png')} // Replace with the actual path to the timetable image
          onMouseOut={handleMouseOut}
        />
        {/* Add more <area> elements here for other rooms */}
      </map>
    </section>
  );
};

export default page;
