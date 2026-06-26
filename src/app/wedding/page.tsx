import Link from 'next/link';
import ImageSlider from '@/components/ImageSlider';

export default function WeddingPage() {
  const services = [
    {
      title: 'Signature Styling',
      description: 'Bespoke decor, lighting and floral installations designed to bring every moment to life.',
    },
    {
      title: 'Venue Transformation',
      description: 'Custom event layouts and scenic design for places that feel elegant, intimate, and cinematic.',
    },
    {
      title: 'Ceremony & Reception',
      description: 'Curated flow, lounge styling, and atmospheric details for every stage of your celebration.',
    },
    {
      title: 'Destination Planning',
      description: 'Seamless styling and vendor coordination for weddings across India and beyond.',
    },
  ];

  return (
    <main className="bg-[#f7f1eb] text-slate-900">
      <section className="relative h-[100vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-black/35" />
        <img
          src="/wedding/1.jpg"
          alt="Wedding hero background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">Wedding styling + event design</p>
            <h1 className="mt-6 text-4xl font-serif tracking-tight text-white sm:text-5xl lg:text-6xl">
              Crafting unique experiences that are never replicated.
            </h1>
            <p className="mt-6 text-base leading-8 text-white/80 sm:text-lg">
              Our weddings are created with thoughtful layers, editorial direction, and immersive details that leave a lasting impression from ceremony to celebration.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/wedding"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#3b332d] shadow-lg shadow-black/10"
              >
                Explore weddings
              </Link>
              <Link
                href="/pdf/corporate.pdf"
                className="rounded-full border border-white/70 bg-white/10 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                View brochure
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#7b6d62]">Signature experience</p>
              <h2 className="mt-4 text-4xl font-serif text-[#3a3128] sm:text-5xl leading-tight">
                From intimate vows to grand receptions, every detail is shaped to feel elevated.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#5f5146]">
                We blend venue styling, floral storytelling, lighting, and cultural direction to create celebrations that look beautiful and feel meaningful.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[4px] border border-[#efe3da] bg-[#fff7f0] p-8 shadow-[0_20px_60px_rgba(131,80,57,0.08)]"
                >
                  <h3 className="text-xl font-semibold text-[#3a3128]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6a5e51]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.35em] text-[#7b6d62]">Featured wedding story</p>
            <h2 className="text-4xl font-serif text-[#3a3128] sm:text-5xl leading-tight">
              Luxury celebrations shaped around mood, texture, and place.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[#5f5146]">
              We design every celebration with a clear point of view, combining editorial styling with handcrafted details so each wedding feels truly one-of-a-kind.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-[4px] bg-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.08)] h-80">
              <img src="/wedding/2.jpg" alt="Elegant wedding décor" className="h-full w-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-[4px] bg-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.08)] h-80">
              <img src="/wedding/6.jpg" alt="Garden wedding" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f1eb] pt-14">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#7b6d62]">Gallery highlight</p>
          <h2 className="mt-4 text-4xl font-serif text-[#3a3128] sm:text-5xl leading-tight">
            A curated collection of our favorite wedding moments.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5f5146]">
            Movement, color, and details captured in every frame to inspire your own celebration.
          </p>
        </div>

        <div className="mt-16">
          <ImageSlider images={['/wedding/7.jpg', '/wedding/10.jpg', '/wedding/11.jpg']} fullScreen />
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-[4px] bg-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.08)] h-96">
              <img src="/wedding/3.png" alt="Wedding floral detail" className="h-full w-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-[4px] bg-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.08)] h-96">
              <img src="/wedding/4.png" alt="Wedding tablescape" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
