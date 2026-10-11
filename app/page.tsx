"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useState } from "react";

import Hero3D from "@/src/components/sections/Hero/Hero3D";

const menuItems = [
  {
    name: "Velvet Latte",
    description: "House espresso, silky milk, and a warm note of vanilla bean.",
    price: "$6.20",
    accent: "Signature",
  },
  {
    name: "Olive Mocha",
    description: "Dark chocolate, espresso, and a delicate finish of smoked olive oil.",
    price: "$6.80",
    accent: "Best Seller",
  },
  {
    name: "Cinder Flat White",
    description: "Double-shot espresso layered with microfoam and toasted caramel depth.",
    price: "$5.90",
    accent: "Roaster's Pick",
  },
  {
    name: "Golden Oat Matcha",
    description: "Ceremonial matcha, oat cream, and softly sweetened almond.",
    price: "$6.40",
    accent: "Seasonal",
  },
];

const storyBlocks = [
  {
    title: "Slow Roasted",
    text: "We roast in tiny batches for a sweeter cup and brighter finish.",
  },
  {
    title: "Hand Brewed",
    text: "Every pour-over is dialed to reveal clarity, texture, and depth.",
  },
  {
    title: "Seasonal Pairings",
    text: "Our menu is built to evolve with the rhythm of the season.",
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
    quote: "The kind of place where one coffee becomes three hours and a beautifully slow afternoon.",
    author: "ALEX M.",
  },
  {
    quote: "Every detail feels intentional — the atmosphere, the service, the roast, the rhythm of it all.",
    author: "NIA T.",
  },
  {
    quote: "It feels like a private room designed for meaningful conversations and exceptional coffee.",
    author: "LUCAS W.",
  },
];

const menuCategories = {
  COFFEE: [
    { name: "Velvet Latte", price: "$6.20" },
    { name: "Cinder Flat White", price: "$5.90" },
    { name: "Sunrise Bloom", price: "$6.50" },
  ],
  FOOD: [
    { name: "Olive Tart", price: "$9.80" },
    { name: "Cinnamon Brioche", price: "$6.40" },
    { name: "Truffle Toast", price: "$12.50" },
  ],
  DESSERT: [
    { name: "Espresso Tiramisu", price: "$8.90" },
    { name: "Salted Caramel Cheesecake", price: "$9.20" },
    { name: "Hazelnut Financier", price: "$7.40" },
  ],
  SIGNATURE: [
    { name: "Ember Ritual", price: "$14.00" },
    { name: "Golden Hour Set", price: "$18.50" },
    { name: "Sunday Slow Pour", price: "$16.80" },
  ],
} as const;

const stats = [
  { value: "7am–11pm", label: "Open daily" },
  { value: "12", label: "Signature brews" },
  { value: "4.9/5", label: "Guest favorite" },
  { value: "18k+", label: "Cups served" },
];

export default function Page() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuCategories>("COFFEE");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 25, mass: 0.7 });
  const springY = useSpring(y, { stiffness: 200, damping: 25, mass: 0.7 });
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -140]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 1.1 });
    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX - window.innerWidth / 2);
      y.set(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handlePointerMove);
      lenis.destroy();
    };
  }, [x, y]);

  return (
    <main className="relative overflow-hidden bg-[#120d0a] text-stone-100">
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#f0c58d]/80 bg-[#120d0a]/70 text-[9px] uppercase tracking-[0.32em] text-[#f0c58d] md:flex"
        style={{ x: springX, y: springY }}
      >
        VIEW
      </motion.div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#120d0a]/70 backdrop-blur-xl">
        <div className="section-shell flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9a76c]/60 bg-[#d9a76c]/10 text-sm font-bold text-[#f0c58d]">
              E
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.33em] text-stone-100">EMBER & OLIVE</p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.32em] text-stone-400">Specialty Coffee House</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-stone-300 md:flex">
            <a href="#story" className="transition hover:text-[#f0c58d]">Story</a>
            <a href="#experience" className="transition hover:text-[#f0c58d]">Experience</a>
            <a href="#menu" className="transition hover:text-[#f0c58d]">Menu</a>
            <a href="#gallery" className="transition hover:text-[#f0c58d]">Gallery</a>
            <a href="#contact" className="transition hover:text-[#f0c58d]">Contact</a>
          </nav>

          <a href="#reserve" className="inline-flex items-center justify-center rounded-full border border-[#d9a76c]/50 bg-[#d9a76c]/10 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#f0c58d] transition hover:bg-[#d9a76c]/20">
            Reserve
          </a>
        </div>
      </header>

      <section className="relative isolate min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(217,167,108,0.12),transparent_35%),radial-gradient(circle_at_bottom,_rgba(85,65,48,0.22),transparent_45%)]" />
        <motion.div style={{ scale: heroScale, y: heroY }} className="section-shell relative grid min-h-[92vh] items-center gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-[#d9a76c]/35 bg-[#d9a76c]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-[#f0c58d]">
              Coffee, crafted as an experience.
            </span>

            <div className="mt-6 display-serif text-[clamp(4.8rem,13vw,13rem)] leading-[0.7] tracking-[-0.08em] text-stone-50">
              <span className="block">EMBER</span>
              <span className="block text-[0.42em] leading-[0.7] text-[#f0c58d]">&</span>
              <span className="block">OLIVE</span>
            </div>

            <p className="mt-7 max-w-xl text-lg leading-8 text-stone-300">
              Warm luxury, cinematic rituals, and beautifully slow moments—crafted for people who want more than coffee.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-[#d9a76c] px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#17120f] transition hover:bg-[#f0c58d]">
                Explore Menu
              </a>
              <a href="#reserve" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.28em] text-stone-100 transition hover:border-[#d9a76c]/50 hover:text-[#f0c58d]">
                Reserve A Table
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-xl font-medium text-stone-50">{stat.value}</div>
                  <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-stone-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative z-10">
            <div className="absolute -left-8 top-10 h-48 w-48 rounded-full bg-[#d9a76c]/15 blur-3xl" />
            <div className="absolute -right-8 bottom-14 h-60 w-60 rounded-full bg-[#7d5c43]/20 blur-3xl" />
            <Hero3D />
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-[9px] uppercase tracking-[0.4em] text-stone-300">
          Scroll
        </div>
      </section>

      <section id="story" className="relative py-24 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9 }} className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3">
            <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-[#120d0a]/80 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-stone-300">
              OUR STORY / 01
            </div>
            <Image
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80"
              alt="Coffee beans and brewing tools"
              width={1200}
              height={980}
              unoptimized
              className="h-[540px] w-full rounded-[26px] object-cover"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9 }}>
            <span className="inline-flex rounded-full border border-[#d9a76c]/35 bg-[#d9a76c]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-[#f0c58d]">
              More than coffee.
            </span>
            <h2 className="mt-6 max-w-xl display-serif text-5xl leading-[0.9] tracking-[-0.06em] text-stone-50 md:text-6xl">
              A space made for slow mornings and beautifully lived afternoons.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">
              Ember & Olive began with a simple thought: the best cafés feel like quiet rituals — warm, thoughtful, and deeply human. We built ours around slower conversations, beautifully brewed coffee, and a room that invites people to stay a little longer.
            </p>
            <div className="mt-8 space-y-4">
              {storyBlocks.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-[26px] border border-white/10 bg-white/5 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d9a76c]/40 bg-[#d9a76c]/10 text-lg font-semibold text-[#f0c58d]">
                    {item.title.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-stone-100">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="relative py-24 md:py-28">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-[#d9a76c]/35 bg-[#d9a76c]/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#f0c58d]">
                From bean to cup
              </span>
              <h2 className="mt-5 display-serif text-5xl leading-[0.92] tracking-[-0.06em] text-stone-50 md:text-6xl">
                FROM BEAN
                <span className="block text-[#f0c58d]">TO CUP</span>
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-stone-300">
              Quality begins long before the first sip — sourced with care, roasted with precision, and brewed with intention.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="rounded-[30px] border border-white/10 bg-[#1a1512] p-3">
              <Hero3D />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { step: "01 / BEAN", text: "Selected from trusted partners with transparent sourcing and measured quality standards." },
                { step: "02 / ROAST", text: "Roasted in small batches to bring sweetness, body, and layered complexity to life." },
                { step: "03 / GRIND", text: "Ground carefully to unlock flavor clarity across every brewing method." },
                { step: "04 / BREW", text: "Dialed by hand for a cup that balances texture, aroma, and finish." },
              ].map((item) => (
                <div key={item.step} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#f0c58d]">{item.step}</p>
                  <p className="mt-4 text-lg leading-8 text-stone-200">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-[#d9a76c]/35 bg-[#d9a76c]/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#f0c58d]">
                Signature creations
              </span>
              <h2 className="mt-5 display-serif text-5xl leading-[0.9] tracking-[-0.06em] text-stone-50 md:text-6xl">
                SIGNATURE CREATIONS
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-stone-300">
              Artfully composed flavors that balance warmth, texture, and a little bit of drama.
            </p>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#181310] p-3">
            <div className="grid gap-4 md:grid-cols-4">
              {menuItems.map((item, index) => (
                <motion.article key={item.name} whileHover={{ y: -8 }} className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#1b1512]">
                  <div className="relative overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/${index % 2 === 0 ? "photo-1509042239860-f550ce710b93" : "photo-1498804103079-a6351b050096"}?auto=format&fit=crop&w=900&q=80`}
                      alt={item.name}
                      width={900}
                      height={900}
                      unoptimized
                      className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120d0a] via-transparent to-transparent" />
                  </div>
                  <div className="space-y-3 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[9px] uppercase tracking-[0.24em] text-[#f0c58d]">{item.accent}</span>
                      <span className="text-sm font-medium text-stone-100">{item.price}</span>
                    </div>
                    <h3 className="text-2xl font-medium text-stone-50">{item.name}</h3>
                    <p className="text-sm leading-6 text-stone-300">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-[#d9a76c]/35 bg-[#d9a76c]/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#f0c58d]">
              The space
            </span>
            <h2 className="mt-5 display-serif text-5xl leading-[0.9] tracking-[-0.06em] text-stone-50 md:text-6xl">
              A SPACE TO SLOW DOWN.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">
              A warm, layered interior of carved wood, low light, and thoughtful textures — designed to feel intimate from first sip to final conversation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
              alt="Café seating"
              width={900}
              height={720}
              unoptimized
              className="h-72 w-full rounded-[28px] object-cover sm:col-span-2"
            />
            <Image
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80"
              alt="Café details"
              width={900}
              height={720}
              unoptimized
              className="h-56 w-full rounded-[28px] object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=900&q=80"
              alt="Coffee and pastry"
              width={900}
              height={720}
              unoptimized
              className="h-56 w-full rounded-[28px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="menu" className="py-24 md:py-28">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-[#d9a76c]/35 bg-[#d9a76c]/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#f0c58d]">
                Interactive menu
              </span>
              <h2 className="mt-5 display-serif text-5xl leading-[0.9] tracking-[-0.06em] text-stone-50 md:text-6xl">
                MENU
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {(Object.keys(menuCategories) as Array<keyof typeof menuCategories>).map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveCategory(label)}
                  className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.22em] transition ${
                    activeCategory === label
                      ? "border-[#d9a76c]/50 bg-[#d9a76c]/15 text-[#f0c58d]"
                      : "border-white/10 bg-white/5 text-stone-300 hover:border-white/20 hover:text-stone-100"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#17120f] p-4 md:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="grid gap-5 md:grid-cols-3"
              >
                {menuCategories[activeCategory].map((item) => (
                  <div key={item.name} className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-[#f0c58d]">{activeCategory}</p>
                      <span className="text-lg font-medium text-stone-100">{item.price}</span>
                    </div>
                    <h3 className="mt-6 text-2xl font-medium text-stone-50">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-300">
                      Crafted with balance, warmth, and a quietly luxurious finish.
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 md:py-28">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-[#d9a76c]/35 bg-[#d9a76c]/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#f0c58d]">
                Gallery
              </span>
              <h2 className="mt-5 display-serif text-5xl leading-[0.9] tracking-[-0.06em] text-stone-50 md:text-6xl">
                MOMENTS IN FRAME
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-stone-300">
              A cinematic collection of spaces, rituals, and slow-simmering details.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image}
                whileHover={{ scale: 1.02 }}
                className={`group relative overflow-hidden rounded-[30px] border border-white/10 ${index % 3 === 0 ? "lg:col-span-2" : ""} ${index % 2 === 1 ? "lg:translate-y-10" : ""}`}
              >
                <Image
                  src={image}
                  alt="Café scene"
                  width={1200}
                  height={900}
                  unoptimized
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#120d0a] via-[#120d0a]/60 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                  <p className="text-[9px] uppercase tracking-[0.26em] text-[#f0c58d]">Studio Moment</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="section-shell">
          <div className="rounded-[36px] border border-[#d9a76c]/20 bg-[linear-gradient(135deg,rgba(176,129,86,0.12),rgba(18,13,10,0.9))] p-8 md:p-12">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="inline-flex rounded-full border border-[#d9a76c]/35 bg-[#d9a76c]/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#f0c58d]">
                  Signature moment
                </span>
                <h2 className="mt-5 display-serif text-5xl leading-[0.82] tracking-[-0.06em] text-stone-50 md:text-7xl">
                  SLOW DOWN.<br />
                  SIP SLOWLY.<br />
                  STAY A LITTLE LONGER.
                </h2>
              </div>
              <div className="h-52 w-full max-w-[240px] rounded-[28px] border border-white/10 bg-black/20 p-3">
                <Hero3D />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="section-shell">
          <div className="mb-10">
            <span className="inline-flex rounded-full border border-[#d9a76c]/35 bg-[#d9a76c]/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#f0c58d]">
              Testimonials
            </span>
          </div>

          <div className="space-y-6">
            {testimonials.map((item) => (
              <motion.blockquote
                key={item.author}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="border-b border-white/10 pb-6"
              >
                <p className="display-serif text-3xl leading-[1.1] tracking-[-0.04em] text-stone-50 md:text-5xl">
                  “{item.quote}”
                </p>
                <footer className="mt-4 text-[10px] uppercase tracking-[0.28em] text-stone-400">— {item.author}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="reserve" className="py-24 md:py-28">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-[#d9a76c]/35 bg-[#d9a76c]/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#f0c58d]">
                Reservation
              </span>
              <h2 className="mt-5 display-serif text-5xl leading-[0.9] tracking-[-0.06em] text-stone-50 md:text-6xl">
                YOUR TABLE IS WAITING.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-300">
                Reserve a slow morning, an evening gathering, or a quiet date with exceptional coffee and beautifully finished plates.
              </p>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                setIsSubmitted(true);
              }}
              className="rounded-[30px] border border-white/10 bg-[#181310] p-6 md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-stone-400">Name</label>
                  <input type="text" placeholder="Your name" className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 placeholder:text-stone-500 outline-none ring-0" />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-stone-400">Phone</label>
                  <input type="tel" placeholder="Your number" className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 placeholder:text-stone-500 outline-none ring-0" />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-stone-400">Date</label>
                  <input type="date" className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 outline-none ring-0" />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-stone-400">Time</label>
                  <input type="time" className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 outline-none ring-0" />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-stone-400">Guests</label>
                <select className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-100 outline-none ring-0">
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6 Guests</option>
                  <option>8 Guests</option>
                </select>
              </div>

              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#d9a76c] px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#17120f] transition hover:bg-[#f0c58d]">
                Reserve Your Moment
              </button>

              {isSubmitted && (
                <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-sm text-[#f0c58d]">
                  Your table request has been noted. We’ll be in touch shortly.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 py-10">
        <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="display-serif text-5xl leading-[0.85] tracking-[-0.08em] text-stone-50 md:text-7xl">EMBER & OLIVE</div>
            <div className="mt-3 flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.26em] text-stone-400">
              <span>Coffee</span>
              <span>Food</span>
              <span>Moments</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-sm text-stone-300 md:items-end">
            <div className="flex gap-6">
              <a href="#story" className="transition hover:text-[#f0c58d]">Story</a>
              <a href="#menu" className="transition hover:text-[#f0c58d]">Menu</a>
              <a href="#gallery" className="transition hover:text-[#f0c58d]">Gallery</a>
              <a href="#contact" className="transition hover:text-[#f0c58d]">Contact</a>
            </div>
            <div className="flex gap-6">
              <a href="https://instagram.com" className="transition hover:text-[#f0c58d]">Instagram</a>
              <a href="https://wa.me/15555550123" className="transition hover:text-[#f0c58d]">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
