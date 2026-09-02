import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SVD Eco Services | Turning Hazardous Waste Into Clean Industrial Energy",
    template: "%s | SVD Eco Services",
  },
  description:
    "SVD Eco Services collects, stabilizes, and transforms hazardous waste into high-calorific alternative fuel for cement kiln co-processing. Operating in Bidar, Kalaburagi, and Karnataka.",
  keywords: [
    "SVD Eco Services",
    "hazardous waste management",
    "alternative fuel",
    "cement kiln co-processing",
    "industrial waste",
    "ETP sludge",
    "Karnataka waste management",
    "Bidar waste",
    "Kalaburagi waste",
    "circular economy",
    "sustainable energy",
    "waste to energy",
  ],
  authors: [{ name: "SVD Eco Services" }],
  openGraph: {
    title: "SVD Eco Services | Turning Hazardous Waste Into Clean Industrial Energy",
    description:
      "From waste liability to industrial fuel. We collect, stabilize, and transform hazardous waste into premium alternative fuel for cement kiln co-processing.",
    url: "https://svdecoservices.com",
    siteName: "SVD Eco Services",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SVD Eco Services | Turning Hazardous Waste Into Clean Industrial Energy",
    description:
      "From waste liability to industrial fuel. We collect, stabilize, and transform hazardous waste into premium alternative fuel for cement kiln co-processing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-deep-green text-off-white grain">
        {children}
      </body>
    </html>
  );
}
