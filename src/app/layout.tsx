import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, EB_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/mun/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600", "700", "800"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Gavel & Globe — Model UN Training for the Formally Hilarious",
  description:
    "Learn Model United Nations rules of procedure from scratch — Indian MUNs included. Build speeches, forge questions, compose comments, and master every motion. Formal education, hilarious delivery.",
  keywords: [
    "Model United Nations",
    "MUN",
    "rules of procedure",
    "Indian MUN",
    "MUN speech",
    "moderated caucus",
    "GSL speech",
    "AIPPM",
    "MUN for beginners",
  ],
  icons: {
    icon: "/gavel-globe.svg",
  },
  openGraph: {
    title: "Gavel & Globe — MUN Training for the Formally Hilarious",
    description:
      "Raise a placard like a weapon. Speak for ninety seconds like it is a millennium. Master MUN procedure with tools, quizzes and extremely dry wit.",
    siteName: "Gavel & Globe",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${garamond.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
