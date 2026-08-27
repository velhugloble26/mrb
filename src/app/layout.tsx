import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urbanea Casa | Exceptional Dining. Timeless Design.",
  description:
    "Premium dining tables and sophisticated furniture for modern interiors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
