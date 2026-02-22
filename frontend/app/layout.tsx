import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Evil Coach ⚡",
  description: "Where villains find validation and guilt finds absolution. Embrace your darkness.",
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
