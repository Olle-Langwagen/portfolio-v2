"use client";

import { Typewriter } from 'react-simple-typewriter';

export function TypewriterTitle() {
  return (
    <span className="text-blue-600 font-bold">
      <Typewriter
        words={[
          'Fullstack-utvecklare', 
          'Datavetenskaps-student',
          'Homelabber', 
          'IoT-entusiast', 
          'Problemlösare'
        ]}
        loop={0} // 0 = loopa för evigt
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
}