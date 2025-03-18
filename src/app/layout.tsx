import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";



export const metadata: Metadata = {
  title: "Arena",
  description: "Arena property Developpement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
