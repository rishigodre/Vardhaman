'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery({ images }: { images: string[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setActive(src)}
            className="overflow-hidden rounded-lg cursor-pointer focus:outline-none"
          >
            <Image
              src={src}
              alt={`Product image ${index + 1}`}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Full-page Image View */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <Image
            src={active}
            alt="Full view"
            fill
            className="object-contain"
            priority
          />
        </div>
      )}
    </>
  );
}
