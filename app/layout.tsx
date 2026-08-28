import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonas Li — Independent Product Builder",
  description: "Jonas Li designs and ships useful software for real life across fintech, geoscience, community, and creator tools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
