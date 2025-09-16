'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'FLIGHT TEST\nBETTING';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(0);
        }, 1000);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, fullText]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4">
      <div className="flex flex-col items-center justify-center space-y-12 w-full max-w-6xl mx-auto text-center">
        <div className="relative w-full max-w-4xl h-[60vh] min-h-[400px] flex items-center justify-center">
          <Image
            src="/Penn-AiR-Logo.png"
            alt="Penn AiR Logo"
            width={800}
            height={400}
            className="object-contain w-full h-full"
            priority
          />
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-minecraft tracking-wider whitespace-pre-line h-48 flex items-center justify-center">
          {displayText}
        </h1>
      </div>
    </div>
  );
}
