import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/app/providers";
import { Container } from "@/components/Container";
import { Navigation } from "@/components/Navigation";
import ThemeSwitch from "@/components/ThemeSwitch";
import { WEBSITE_HOST_URL } from "@/lib/constants";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const meta = {
  title: "Ismail Tlemcani - Software Developer",
  description: "Software Developer, continuous learner",
  image: `${WEBSITE_HOST_URL}/favicon.ico`,
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: "en-US",
    type: "website",
    images: meta.image,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: "summary_large_image",
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-zinc-50 dark:bg-gray-900")}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="py-4">
            <Container>
              <div className="flex items-center justify-between py-6">
                <Navigation />
                <ThemeSwitch />
              </div>
            </Container>
          </header>
          <main>
            <Container>
              {children}
              <Analytics />
            </Container>
          </main>
          <footer className="py-16">
            <Container>
              <p>
                Built by{" "}
                <Link href="https://twitter.com/ismailtlem">
                  Ismail Tlemcani
                </Link>
              </p>
            </Container>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
