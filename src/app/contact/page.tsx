export default function ContactPage() {
    return (
      <section className="min-h-screen bg-black text-white px-6 py-24 flex items-center justify-center">
        <div className="max-w-2xl text-center space-y-10">
          <h1 className="text-4xl md:text-5xl font-retro text-neonPink drop-shadow-[0_0_8px_#ffff00]">
            Contact DJ Side Steppa
          </h1>
  
          <p className="text-lg text-white/80 leading-relaxed">
            Whether you&#39;re planning a wedding, corporate event, private party, or synthwave night,
            DJ Side Steppa brings professional energy, unique sound, and seamless flow to every set.
          </p>
  
          <p className="text-md text-white/70 leading-relaxed">
            To book DJ Side Steppa, reach out directly via email with your event details, date, and location.
          </p>
  
          <a
            href="mailto:sidesteppaa@gmail.com"
            className="inline-block bg-neonPink text-white font-bold px-6 py-3 rounded-full hover:scale-105 hover:shadow-[0_0_15px_#ff00ff] transition"
          >
            Email sidesteppaa@gmail.com
          </a>
  
          <p className="text-sm text-white/50 pt-4">
            Typical response time: within 24 hours
          </p>
        </div>
      </section>
    );
  }
  