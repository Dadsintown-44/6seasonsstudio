'use client';
import React from 'react';

export default function AboutSection() {
  const services = [
    {
      title: "Bespoke Design",
      desc: "Tailored styling, tablescapes, florals, and lounge design for every celebration.",
      image: "/gallery/image5.jpg"
    },
    {
      title: "Full-Service Production",
      desc: "Lighting, sound, props, permits and vendor coordination handled with care.",
      image: "/wedding/1.jpg"
    },
    {
      title: "Floral Narratives",
      desc: "Signature blooms and texture-rich installations created for your story.",
      image: "/gallery/image2.jpg"
    },
    {
      title: "Venue Styling",
      desc: "Elegant set design for ballroom, garden, terrace and destination venues.",
      image: "/wedding/10.jpg"
    }
  ];

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Top Editorial Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-32">
          
          {/* Left: Image Composition */}
          <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] w-full">
            <div className="absolute top-0 left-0 w-3/4 h-[85%] overflow-hidden rounded-[4px] shadow-sm">
              <img 
                src="/wedding/11.jpg" 
                alt="Premium Event Design" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[55%] h-[60%] overflow-hidden rounded-[4px] shadow-2xl border-[10px] border-white">
              <img 
                src="/gallery/image8.jpg" 
                alt="Elegant Table Details" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Typography */}
          <div className="flex flex-col justify-center lg:pl-16">
            <p className="text-xs uppercase tracking-[0.35em] text-[#7b6d62] mb-6">
              Premium wedding and event styling
            </p>
            <h2 className="text-4xl font-serif text-[#3a3128] sm:text-5xl lg:text-[3.5rem] leading-[1.15] mb-8">
              Events that feel editorial, immersive, and unmistakably yours.
            </h2>
            <p className="text-lg leading-relaxed text-[#5f5146] mb-10 max-w-xl">
              From elegant destination celebrations to exclusive corporate soirées, we bring together luxury aesthetics, thoughtful storytelling, and effortless execution.
            </p>
            <div className="w-16 h-[1px] bg-[#d2c5b8]"></div>
          </div>

        </div>

        {/* Bottom Services Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {services.map((service, idx) => (
            <div key={idx} className="group flex flex-col gap-6 cursor-pointer">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[4px] bg-[#fffaf4]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-[#3a3128]/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#3a3128] mb-3 group-hover:text-[#7b6d62] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6a5e51]">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
