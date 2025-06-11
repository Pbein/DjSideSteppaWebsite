import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="min-h-screen bg-black text-white px-6 py-20 flex justify-center items-center">
        <div className="max-w-3xl space-y-10">
          <Image
            src="/dj-side-steppa.webp"
            alt="DJ Side Steppa"
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded-full border-4 border-neonPink shadow-[0_0_40px_#ff00ff80] mx-auto"
          />
          <h1 className="text-4xl md:text-5xl font-retro text-neonPink drop-shadow-[0_0_8px_#ff00ff] text-center">
            About DJ Side Steppa
          </h1>

          <p className="text-lg text-white/80 leading-relaxed">
            DJ Side Steppa isn&#39;t just a performer — he&#39;s an architect of energy.
            With a background in both underground club culture and high-profile
            event production, Side Steppa blends synth-heavy beats, atmospheric
            transitions, and pulse-pounding drops into a set that&#39;s not just
            heard, but felt.
          </p>

          <p className="text-lg text-white/70 leading-relaxed">
            From intimate lounges to large-scale festivals, Side Steppa adapts
            his style to elevate every crowd. Known for precise mixes,
            professional presence, and total reliability, he&#39;s been the trusted
            DJ for private events, tech parties, and synthwave-themed
            experiences across the DMV and beyond.
          </p>

          <p className="text-lg text-white/70 leading-relaxed">
            Whether you&#39;re throwing a retro night, launching a product, or tying
            the knot, Side Steppa brings a polished vibe with undeniable style.
            This isn&#39;t just music — it&#39;s a whole experience.
          </p>

          <div className="pt-18 text-center">
            <a
              href="/book"
              className="inline-block bg-neonPink text-white text-3xl font-bold px-6 py-5 rounded-full border-3 border-cyan-200 border-neonPink hover:scale-105 hover:shadow-[0_0_15px_#ff00ff] transition"
            >
              Book DJ Side Steppa
            </a>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="bg-black text-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-10 md:grid-cols-2 text-white text-base text-center">
            <div className="flex flex-col items-center space-y-2 px-4">
              <span className="text-3xl">✅</span>
              <p className="max-w-xs text-white/80">
                50+ successful events hosted
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 px-4">
              <span className="text-3xl">🎧</span>
              <p className="max-w-xs text-white/80">
                8 years of DJing experience
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 px-4">
              <span className="text-3xl">🏆</span>
              <p className="max-w-xs text-white/80">
                Trusted by corporate clients and couples alike
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 px-4">
              <span className="text-3xl">🌍</span>
              <p className="max-w-xs text-white/80">
                Based in Richmond, VA — available nationwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-black text-white px-6 pb-24">
        <div className="max-w-3xl mx-auto bg-black/60 border border-neonPink p-8 rounded-xl shadow-[0_0_25px_#ff00ff44] backdrop-blur-md">
          <blockquote className="text-lg italic text-white/80 leading-relaxed">
            “DJ Side Steppa brought the exact vibe we needed — smooth,
            energetic, and totally professional. People still talk about that
            night.”
          </blockquote>
          <div className="text-sm mt-4 text-white/50 text-right">
            — Marco D., Corporate Event Organizer
          </div>
        </div>
      </section>
    </>
  );
}
