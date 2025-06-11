export const metadata = {
  title: "DJ Side Steppa | Feel the Beat",
  description:
    "Book DJ Side Steppa for your next event. Bringing 8+ years of energy and experience to your party or corporate event.",
  openGraph: {
    title: "DJ Side Steppa | Feel the Beat",
    description:
      "Book DJ Side Steppa for your next event. Bringing 8+ years of energy and experience to your party or corporate event.",
    url: "https://dj-side-steppa-website.vercel.app",
    siteName: "DJ Side Steppa",
    images: [
      {
        url: "https://dj-side-steppa-website.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DJ Side Steppa performing live",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Side Steppa | Feel the Beat",
    description: "Book DJ Side Steppa for your next event.",
    images: ["https://dj-side-steppa-website.vercel.app/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>DJ Side Steppa | Feel the Beat</title>
        <meta
          name="description"
          content="Book DJ Side Steppa for your next event. Bringing 8+ years of energy and experience to your party or corporate event."
        /> 

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="DJ Side Steppa | Feel the Beat" />
        <meta
          property="og:description"
          content="Book DJ Side Steppa for your next event. Bringing 8+ years of energy and experience to your party or corporate event."
        />
        <meta
          property="og:image"
          content="https://dj-side-steppa-website.vercel.app/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://dj-side-steppa-website.vercel.app"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DJ Side Steppa | Feel the Beat" />
        <meta
          name="twitter:description"
          content="Book DJ Side Steppa for your next event."
        />
        <meta
          name="twitter:image"
          content="https://dj-side-steppa-website.vercel.app/og-image.jpg"
        />
      </Head>
      <section
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center px-4 text-center"
        style={{ backgroundImage: "url('/background.webp')" }}
      >
        <div className=" bg-black/60 border border-neonPink rounded-xl p-8 backdrop-blur-md shadow-[0_0_30px_#ff00ff88] max-w-xl">
          <h1 className="text-6xl font-retro neon-pulse">
            Feel the Beat. Book the Vibe.
          </h1>
          <p className="mt-4 text-lg">
            DJ Side Steppa brings the best energy to every crowd.
          </p>
          <a
            href="/book"
            className="neon-button mt-6 inline-block bg-neonBlue text-slate-900 text-3xl font-bold px-6 py-3 rounded-full hover:scale-105 hover:shadow-[0_0_20px_#00ffff] transition"
          >
            Book Now
          </a>
        </div>
      </section>
      <section>
        <div>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            className="rounded-lg shadow-[0_0_30px_#ff00ff55]"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/side-steppa-86805223/side-steppa-live-arlington"
          />
        </div>
      </section>
    </>
  );
}
