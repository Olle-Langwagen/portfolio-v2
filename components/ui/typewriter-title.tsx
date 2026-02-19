"use client";

import { Typewriter } from 'react-simple-typewriter';

export function TypewriterTitle({ words }: { words: string[] }) {
  return (
    <span className="text-blue-600 font-bold">
      <Typewriter
        words={words}
        loop={0} // 0 = loop forever
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
}