  'use client';

  import { useEffect, useState } from 'react';
  import Navbar from '@/components/Navbar';
  import Footer from '@/components/Footer';
  import { IMAGES } from '@/config/cloudinary';
  import Image from 'next/image';



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
          className={`flex gap-3 w-max ${
            reverse ? 'animate-marquee-reverse' : 'animate-marquee'
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
      <main className="min-h-screen bg-white">
        <Navbar />

        <section className="py-10 px-4 bg-gradient-to-br from-burgundy-50 to-cream-100">
          <div
            className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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

        <section className="py-3 space-y-3">
          <AutoScrollRow images={row1} duration="180s" />
          <AutoScrollRow images={row2} reverse duration="150s" />
          <AutoScrollRow images={row3} duration="250s" />
        </section>

        <Footer />
      </main>
    );
  }

  export const dynamic = 'force-static';
