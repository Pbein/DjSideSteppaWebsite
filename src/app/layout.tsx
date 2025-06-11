import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "DJ Side Steppa | Feel the Beat",
  description: "Book DJ Side Steppa for your next event. Bringing 8+ years of energy and experience to your party or corporate event.",
  openGraph: {
    title: "DJ Side Steppa | Feel the Beat",
    description: "Book DJ Side Steppa for your next event. Bringing 8+ years of energy and experience to your party or corporate event.",
    url: "https://dj-side-steppa.vercel.app", // change to your custom domain if you set one
    siteName: "DJ Side Steppa",
    images: [
      {
        url: "https://dj-side-steppa.vercel.app/og-image.jpg", // upload this image to public/
        width: 1200,
        height: 630,
        alt: "DJ Side Steppa in action",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Side Steppa | Feel the Beat",
    description: "Book DJ Side Steppa for your next event.",
    images: ["https://dj-side-steppa.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
