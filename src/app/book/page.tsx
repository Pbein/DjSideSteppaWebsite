'use client'

export default function BookPage() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-24 flex items-center justify-center">
      <div className="max-w-2xl w-full space-y-10">
        <h1 className="text-4xl md:text-5xl font-retro text-neonBlue drop-shadow-[0_0_8px_#00ffff] text-center">
          Book DJ Side Steppa
        </h1>

        <p className="text-white/80 text-center">
          Want to book DJ Side Steppa for an event? Fill out the form below and get a response within 1 business day.
        </p>

        <form
          action="https://formspree.io/f/2756874430100536602"
          method="POST"
          className="space-y-6 bg-black/60 p-8 rounded-xl border border-neonBlue shadow-[0_0_20px_#00ffff55] backdrop-blur-md"
        >
          <div>
            <label className="block mb-1 text-white/70">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-black text-white border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neonBlue"
            />
          </div>

          <div>
            <label className="block mb-1 text-white/70">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-black text-white border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neonBlue"
            />
          </div>

          <div>
            <label className="block mb-1 text-white/70">Event Type</label>
            <select
              name="event-type"
              required
              className="w-full bg-black text-white border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neonBlue"
            >
              <option value="">Select an option</option>
              <option>Wedding</option>
              <option>Private Party</option>
              <option>Corporate Event</option>
              <option>Synthwave Night</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-white/70">Event Details</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Include date, location, size of crowd, vibe, etc."
              className="w-full bg-black text-white border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neonBlue"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-neonBlue text-white font-bold py-3 rounded-full border-4 border-b-green-200 border-t-pink-200 border-s-cyan-200 border-e-amber-100 hover:scale-105 hover:shadow-[0_0_15px_#00ffff] transition"
          >
            Send Inquiry
          </button>
        </form>

        <p className="text-sm text-white/50 text-center">
          Or email directly:{" "}
          <a
            href="mailto:sidesteppaa@gmail.com"
            className="text-neonBlue hover:underline"
          >
            sidesteppaa@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
