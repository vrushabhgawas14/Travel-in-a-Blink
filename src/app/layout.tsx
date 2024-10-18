import type { Metadata } from "next";
import "./index.css";

export const metadata: Metadata = {
  title: "Travel in a Blink",
  description: "Travel the world in smoothly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
