import type { Metadata } from "next";
import "./index.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Travel in a Blink",
  description: "Your Dream Destination is Just a Blink Away!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-purple-200 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
