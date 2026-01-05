'use client';

import Image from 'next/image';
import { X } from 'lucide-react';

export default function ImageZoomModal({
  image,
  onClose,
}: {
  image: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:scale-110 transition"
      >
        <X size={32} />
      </button>

      {/* Image */}
      <div className="relative max-w-[90vw] max-h-[90vh]">
        <Image
          src={image}
          alt="Zoomed product"
          width={1200}
          height={1200}
          className="object-contain rounded-lg"
        />
      </div>
    </div>
  );
}
