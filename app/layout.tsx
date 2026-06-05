import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plevanda",
  description:
    "Redefining event planning in the UK with clarity, structure,and excellence.",
  icons: {
    icon: "/plevenda_logo.png",
  },
  openGraph: {
    title: "Plevenda",
    description: "Event planning made easy",
    url: "https://plevenda.vercel.app",
    siteName: "Plevenda",
    images: [
      {
        url: "/plevenda_logo.png",
        width: 1200,
        height: 630,
        alt: "Plevenda",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
