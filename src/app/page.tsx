import Hero from "@/components/Hero";
import Collaborations from "@/components/Collaborations";
import Venues from "@/components/Venues";
import ContactUs from "@/components/ContactUs";
import QuoteBanner from "@/components/QuoteBanner";
import VideoGallery from "@/components/VideoGallery";
import CircularGallery from "@/components/CircularGallery";

export default function Home() {
  const galleryItems = [
    { image: '/gallery/image1.jpeg', text: 'Celebration' },
    { image: '/gallery/image2.jpg', text: 'Joy' },
    { image: '/gallery/image3.jpg', text: 'Elegance' },
    { image: '/gallery/image4.jpg', text: 'Memories' },
    { image: '/gallery/image5.jpg', text: 'Love' },
    { image: '/gallery/image6.jpg', text: 'Together' },
    { image: '/gallery/image7.jpg', text: 'Magic' },
    { image: '/gallery/image8.jpg', text: 'Moments' },
  ];

  return (
    <main className="bg-[#fbf5ee] text-slate-900">
      <Hero />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#7b6d62] mb-4">
                Premium wedding and event styling
              </p>
              <h2 className="text-4xl font-serif text-[#3a3128] sm:text-5xl lg:text-6xl leading-tight">
                Events that feel editorial, immersive, and unmistakably yours.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5146]">
                From elegant destination celebrations to exclusive corporate soirées, we bring together luxury aesthetics, thoughtful storytelling, and effortless execution.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[4px] border border-[#efe3da] bg-[#fffaf4] p-8 shadow-[0_20px_60px_rgba(131,80,57,0.08)]">
                <h3 className="text-xl font-semibold text-[#3a3128]">Bespoke Design</h3>
                <p className="mt-3 text-sm leading-7 text-[#6a5e51]">
                  Tailored styling, tablescapes, florals, and lounge design for every celebration.
                </p>
              </div>
              <div className="rounded-[4px] border border-[#efe3da] bg-[#fffaf4] p-8 shadow-[0_20px_60px_rgba(131,80,57,0.08)]">
                <h3 className="text-xl font-semibold text-[#3a3128]">Full-Service Production</h3>
                <p className="mt-3 text-sm leading-7 text-[#6a5e51]">
                  Lighting, sound, props, permits and vendor coordination handled with care.
                </p>
              </div>
              <div className="rounded-[4px] border border-[#efe3da] bg-[#fffaf4] p-8 shadow-[0_20px_60px_rgba(131,80,57,0.08)]">
                <h3 className="text-xl font-semibold text-[#3a3128]">Floral Narratives</h3>
                <p className="mt-3 text-sm leading-7 text-[#6a5e51]">
                  Signature blooms and texture-rich installations created for your story.
                </p>
              </div>
              <div className="rounded-[4px] border border-[#efe3da] bg-[#fffaf4] p-8 shadow-[0_20px_60px_rgba(131,80,57,0.08)]">
                <h3 className="text-xl font-semibold text-[#3a3128]">Venue Styling</h3>
                <p className="mt-3 text-sm leading-7 text-[#6a5e51]">
                  Elegant set design for ballroom, garden, terrace and destination venues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Collaborations />
      <Venues />

      <section className="bg-[#f7efe4] pt-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#7b6d62] mb-4">Our Moments</p>
          <h2 className="text-4xl font-serif text-[#3a3128] sm:text-5xl">A gallery of celebrations, styled with soul.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5f5146]">
            Experience the rhythm of our portfolio through movement, texture, and light.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[4px]">
          <div className="h-[640px] w-full bg-white">
            <CircularGallery items={galleryItems} bend={3} textColor="#374151" borderRadius={0.05} scrollSpeed={2} scrollEase={0.05} />
          </div>
        </div>
      </section>

      <QuoteBanner />
      <VideoGallery />
      <ContactUs />
    </main>
  );
}
