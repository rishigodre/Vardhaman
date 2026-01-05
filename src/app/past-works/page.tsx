'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { IMAGES } from '@/config/cloudinary';
import Image from 'next/image';
import { ArrowRight, Package } from 'lucide-react';
import Link from 'next/link';


const row1 = IMAGES.pastWorks.row1;
const row2 = IMAGES.pastWorks.row2;
const row3 = IMAGES.pastWorks.row3;


function AutoScrollRow({
  images,
  reverse = false,
  duration = '40s',
}: {
  images: string[];
  reverse?: boolean;
  duration?: string;
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-3 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          } hover:[animation-play-state:paused]`}
        style={{ animationDuration: duration }}
      >
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="relative h-64 w-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
          >
            <Image
              src={src}
              alt="Past work"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PastWorkPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-burgundy-50 via-orange-50 to-amber-50">
      <Navbar />

      <section className="py-10 px-4">
        <div
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Past Works
          </h1>

          <p className="text-base md:text-lg text-gray-700">
            A glimpse of craftsmanship, quality, and elegance we have delivered.
          </p>

        </div>
      </section>

      <section className="py-3 space-y-3 bg-white/40 backdrop-blur-sm">
        <AutoScrollRow images={row1} duration="180s" />
        <AutoScrollRow images={row2} reverse duration="150s" />
        <AutoScrollRow images={row3} duration="250s" />
      </section>

      <section className="py-24 px-4 relative overflow-hidden">
        

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 transform hover:scale-105 transition-transform duration-500">
            <div className="w-20 h-20 bg-gradient-to-br from-burgundy-700 to-burgundy-900 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-500 shadow-xl">
              <Package className="text-gray-500" size={36} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {"Can't Find What You're Looking For?"}
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our expert team is here to help you find the perfect products for your space.
              Get personalized recommendations and exclusive deals!
            </p>
            <button className="bg-gradient-to-r from-burgundy-700 via-burgundy-800 to-burgundy-900 hover:from-burgundy-800 hover:via-burgundy-900 hover:to-burgundy-950 text-gray-500 px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto shadow-xl">
              <Link href='/contact'>Contact Us</Link>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export const dynamic = 'force-static';
