import Image from "next/image";

const menuItems = [
  {
    name: "Ember Cortado",
    description: "A velvety espresso with orange zest and a caramel finish.",
    price: "$5.50",
    accent: "Signature",
  },
  {
    name: "Olive Honey Latte",
    description: "House espresso, local honey, and warming oat cream.",
    price: "$6.25",
    accent: "Best Seller",
  },
  {
    name: "Cinder Flat White",
    description: "Double shot, silky microfoam, and slow-roasted depth.",
    price: "$5.90",
    accent: "Roaster's Pick",
  },
];

const experiencePillars = [
  {
    title: "Slow Roasted",
    text: "Our beans are roasted in small batches to preserve sweetness and complexity.",
  },
  {
    title: "Hand Brewed",
    text: "Every pour-over is methodically dialed for clarity, bloom, and balance.",
  },
  {
    title: "Seasonal Pairings",
    text: "Thoughtful plates and pastries chosen to complement each cup in the moment.",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
];

const testimonials = [
  {
    quote:
      "The kind of coffee bar where every detail feels intentional. Warm, quiet, and impossibly beautiful.",
    author: "Mila R.",
  },
  {
    quote:
      "The pastry program and roast profile are both exceptional. It feels elevated without ever losing its soul.",
    author: "Jordan T.",
  },
  {
    quote:
      "A rare place that balances design, flavor, and hospitality in one seamless experience.",
    author: "Evelyn G.",
  },
];

const stats = [
  { value: "7am–11pm", label: "Open daily" },
  { value: "12", label: "Signature brews" },
  { value: "4.9/5", label: "Guest favorite" },
  { value: "18k+", label: "Cups served" },
];

export default function Page() {
  return (
    <main className="bg-[#120d0a] text-stone-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#120d0a]/80 backdrop-blur-xl">
        <div className="section-shell flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9a76c]/50 bg-[#d9a76c]/10 text-sm font-bold text-[#f0c58d]">
              E
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-stone-100 uppercase">
                Ember & Olive
              </p>
              <p className="text-[9px] uppercase tracking-[0.35em] text-stone-400">
                Specialty Coffee House
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-stone-300 md:flex">
            <a href="#story" className="transition hover:text-[#f0c58d]">
              Story
            </a>
            <a href="#experience" className="transition hover:text-[#f0c58d]">
              Experience
            </a>
            <a href="#menu" className="transition hover:text-[#f0c58d]">
              Menu
            </a>
            <a href="#gallery" className="transition hover:text-[#f0c58d]">
              Gallery
            </a>
            <a href="#contact" className="transition hover:text-[#f0c58d]">
              Contact
            </a>
          </nav>

          <a
            href="#reserve"
            className="inline-flex items-center justify-center rounded-full border border-[#d9a76c]/40 bg-[#d9a76c]/10 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-[#f0c58d] transition hover:bg-[#d9a76c]/20"
          >
            Reserve
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,167,108,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(196,118,64,0.12),transparent_30%)]" />
        <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="eyebrow">Slow-crafted coffee • intimate evenings</span>
            <h1 className="mt-6 max-w-xl text-5xl font-semibold tracking-[-0.06em] text-stone-50 sm:text-6xl lg:text-7xl">
              Where every pour feels like a warm welcome.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-stone-300">
              Ember & Olive brings together small-batch coffee, slow hospitality, and a refined neighborhood atmosphere designed for lingering conversations and beautiful mornings.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#reserve"
                className="inline-flex items-center justify-center rounded-full bg-[#d9a76c] px-6 py-3 text-sm font-medium text-[#1b120d] transition hover:bg-[#f0c58d]"
              >
                Reserve a table
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-stone-100 transition hover:border-[#d9a76c]/40 hover:text-[#f0c58d]"
              >
                Explore menu
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xl font-semibold text-stone-50">{stat.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-stone-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-48 w-48 rounded-full bg-[#d9a76c]/20 blur-3xl" />
            <div className="absolute -right-6 bottom-12 h-52 w-52 rounded-full bg-[#7d5c43]/20 blur-3xl" />

            <div className="glass-panel relative overflow-hidden rounded-[32px] p-3">
              <Image
                src="https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1200&q=80"
                alt="Coffee bar interior"
                width={1200}
                height={960}
                priority
                unoptimized
                className="h-[580px] w-full rounded-[24px] object-cover"
              />

              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-[#1b120d]/80 p-5 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#f0c58d]">Featured roast</p>
                    <p className="mt-2 text-2xl font-semibold text-stone-50">Sunrise Bloom</p>
                  </div>
                  <span className="rounded-full border border-[#d9a76c]/40 bg-[#d9a76c]/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#f0c58d]">
                    Limited
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  Citrus, cacao nib, and roasted almond with an impossibly silky finish.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 left-6 rounded-full border border-white/10 bg-[#120d0a]/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-300 backdrop-blur-md">
              Open daily • 7am–11pm
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="py-20 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-3">
            <Image
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80"
              alt="Coffee beans and brewing tools"
              width={1200}
              height={980}
              unoptimized
              className="h-[520px] w-full rounded-[22px] object-cover"
            />
          </div>

          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="section-heading mt-5">Crafted for slow mornings and long conversations.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-stone-300">
              We believe a café should feel as thoughtful as the coffee it serves. From our handpicked beans to the way we design every table, Ember & Olive is built around comfort, ritual, and quiet luxury.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-stone-400">
              Inspired by the warmth of a neighborhood favorite and the polish of a modern gathering space, we create a place where intricate brews, seasonal plates, and gracious hospitality meet.
            </p>

            <div className="mt-8 space-y-4">
              {experiencePillars.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d9a76c]/10 text-lg font-semibold text-[#f0c58d]">
                    {item.title.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-stone-50">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 md:py-24">
        <div className="section-shell">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <span className="eyebrow mx-auto md:mx-0">Coffee experience</span>
            <h2 className="section-heading">A ritual shaped by detail.</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Perfected extraction",
                text: "Precision brewing and calibrated temperature control to bring out each bean’s distinct character.",
                image:
                  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80",
              },
              {
                title: "Seasonal sourcing",
                text: "We work with trusted producers who prioritize quality, transparency, and sustainable harvests.",
                image:
                  "https://images.unsplash.com/photo-1461988091159-192b6df7054f?auto=format&fit=crop&w=900&q=80",
              },
              {
                title: "Warm, thoughtful service",
                text: "Every interaction is designed to feel considered, calm, and genuinely welcoming from the first sip.",
                image:
                  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
              },
            ].map((feature) => (
              <article key={feature.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={900}
                  height={720}
                  unoptimized
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-stone-50">{feature.title}</h3>
                  <p className="mt-3 text-base leading-7 text-stone-300">{feature.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 md:py-24">
        <div className="section-shell">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <span className="eyebrow mx-auto md:mx-0">Signature menu</span>
            <h2 className="section-heading">Comforting classics, elevated with intention.</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {menuItems.map((item) => (
              <article key={item.name} className="rounded-[28px] border border-white/10 bg-[#1a1512] p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-[#d9a76c]/35 bg-[#d9a76c]/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#f0c58d]">
                    {item.accent}
                  </span>
                  <span className="text-xl font-semibold text-stone-50">{item.price}</span>
                </div>
                <h3 className="mt-6 text-2xl font-medium text-stone-50">{item.name}</h3>
                <p className="mt-3 text-base leading-7 text-stone-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Café experience</span>
            <h2 className="section-heading mt-5">An atmosphere designed to slow you down.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-stone-300">
              From early espresso runs to late-night conversation, the room balances intimate warmth with intentional design—soft light, rich textures, and a soundtrack that never interrupts the moment.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Seasonal brunch plates",
                "Thoughtfully curated wine list",
                "Private dining moments",
                "Live acoustic evenings",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
              alt="Café seating area"
              width={900}
              height={720}
              unoptimized
              className="h-72 w-full rounded-[28px] object-cover sm:col-span-2"
            />
            <Image
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80"
              alt="Coffee service"
              width={900}
              height={720}
              unoptimized
              className="h-52 w-full rounded-[28px] object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=900&q=80"
              alt="Pastries and coffee"
              width={900}
              height={720}
              unoptimized
              className="h-52 w-full rounded-[28px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 md:py-24">
        <div className="section-shell">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <span className="eyebrow mx-auto md:mx-0">Gallery</span>
            <h2 className="section-heading">A space that feels like a story in motion.</h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={image}
                className={`overflow-hidden rounded-[28px] border border-white/10 ${
                  index === 0 || index === 3 ? "sm:col-span-2" : ""
                }`}
              >
                <Image
                  src={image}
                  alt="Café environment"
                  width={1200}
                  height={900}
                  unoptimized
                  className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 md:py-24">
        <div className="section-shell">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <span className="eyebrow mx-auto md:mx-0">Testimonials</span>
            <h2 className="section-heading">Loved by the neighborhood and guests who return often.</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="mb-5 text-[#f0c58d] text-xl">★★★★★</div>
                <p className="text-lg leading-8 text-stone-200">“{item.quote}”</p>
                <footer className="mt-6 text-sm uppercase tracking-[0.2em] text-stone-400">{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="reserve" className="py-20 md:py-24">
        <div className="section-shell">
          <div className="rounded-[32px] border border-[#d9a76c]/20 bg-[linear-gradient(135deg,_rgba(217,167,108,0.12),rgba(255,255,255,0.03))] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="eyebrow">Reserve your table</span>
                <h2 className="section-heading mt-5">Plan a slower, more beautiful moment.</h2>
                <p className="mt-4 max-w-lg text-lg leading-8 text-stone-300">
                  Whether it’s a quiet morning ritual or an intimate evening gathering, we’d love to host you.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#120d0a]/60 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone-400">Date</label>
                    <input
                      type="text"
                      value="Saturday, 8:30 PM"
                      readOnly
                      className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone-400">Guests</label>
                    <input
                      type="text"
                      value="2 Guests"
                      readOnly
                      className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 outline-none"
                    />
                  </div>
                </div>
                <a
                  href="#contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#d9a76c] px-6 py-3 text-sm font-medium text-[#1b120d] transition hover:bg-[#f0c58d]"
                >
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="section-heading mt-5">Visit us for your next favorite ritual.</h2>
            <div className="mt-8 space-y-5 text-stone-300">
              <p>24 Flint Avenue, Sloane District</p>
              <p>(415) 520-0817</p>
              <p>hello@emberandolive.com</p>
            </div>
            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#f0c58d]">Hours</p>
              <ul className="mt-4 space-y-2 text-stone-300">
                <li>Mon–Thu: 7:00 AM – 9:00 PM</li>
                <li>Fri–Sat: 7:00 AM – 11:00 PM</li>
                <li>Sunday: 8:00 AM – 8:00 PM</li>
              </ul>
            </div>
          </div>

          <form className="rounded-[28px] border border-white/10 bg-[#1a1512] p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone-400">Name</label>
                <input type="text" className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone-400">Email</label>
                <input type="email" className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 outline-none" placeholder="Email address" />
              </div>
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone-400">Message</label>
              <textarea rows={5} className="w-full rounded-[24px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 outline-none" placeholder="Tell us what you’re planning..." />
            </div>
            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#d9a76c] px-6 py-3 text-sm font-medium text-[#1b120d] transition hover:bg-[#f0c58d]"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="section-shell flex flex-col items-center justify-between gap-4 text-sm text-stone-400 md:flex-row">
          <p>© 2026 Ember & Olive</p>
          <div className="flex items-center gap-6">
            <a href="#story" className="transition hover:text-[#f0c58d]">Story</a>
            <a href="#menu" className="transition hover:text-[#f0c58d]">Menu</a>
            <a href="#contact" className="transition hover:text-[#f0c58d]">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
