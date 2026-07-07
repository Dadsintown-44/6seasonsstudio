import Hero from "@/components/Hero";
import Collaborations from "@/components/Collaborations";
import Venues from "@/components/Venues";
import ContactUs from "@/components/ContactUs";
import QuoteBanner from "@/components/QuoteBanner";
import VideoGallery from "@/components/VideoGallery";
import CircularGallery from "@/components/CircularGallery";
import AboutSection from "@/components/AboutSection";

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

      <AboutSection />

      <Collaborations />
      <Venues />

      <section className="bg-white pt-24">
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
