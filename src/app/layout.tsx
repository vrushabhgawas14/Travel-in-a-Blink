import type { Metadata } from "next";
import "./index.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://travel-in-a-blink.vercel.app"),

  title: {
    default: "Travel in a Blink",
    template: `%s | Travel in a Blink`,
  },
  description: "Your Dream Destination is Just a Blink Away!",

  openGraph: {
    title: "Travel in a Blink",
    description: "Your Dream Destination is Just a Blink Away!",
    images: ["/assets/images/cover-landscape-compress.jpg"],
  },

  keywords: [
    "Travel in a Blink",
    "Travelling website",
    "Travel Agency",
    "Travel Agency Website",
  ],

  verification: {
    google: "JH2cAfFIcBaQ_rBQ5Yhbzua6sFpwoB0W6fo5RIf5QIQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
