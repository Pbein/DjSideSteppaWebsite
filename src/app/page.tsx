
import SoundCloudPlayer from '@/components/SoundCloudPlayer'

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
      <section
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center px-4 text-center relative z-20"
        style={{ backgroundImage: "url('/background.webp')" }}
      >
        <div className="bg-black/60 border border-neonPink rounded-xl p-8 backdrop-blur-md shadow-[0_0_30px_#ff00ff88] max-w-xl relative z-30">
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
      <section className="px-4 py-8 relative z-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-retro text-center mb-6 neon-pulse relative z-30">
            🎵 Experience the Mix 🎵
          </h2>
          <div className="bg-black/60 border border-neonPink rounded-xl p-8 backdrop-blur-md shadow-[0_0_30px_#ff00ff88] max-w-2xl mx-auto relative z-30">
            <SoundCloudPlayer 
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/side-steppa-86805223/side-steppa-live-arlington&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
          </div>
          <p className="text-center mt-6 text-white/80 text-lg relative z-30">
            🎧 Hit play and watch the magic happen! The background will pulse to the beat 🎧
          </p>
        </div>
      </section>
    </>
  );
}
