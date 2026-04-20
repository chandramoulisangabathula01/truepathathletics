import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://truepathathletics.com"),
  title: {
    default: "True Path Athletics | Premium Sports Development",
    template: "%s | True Path Athletics",
  },
  description:
    "Guiding athletes and parents through every stage of development to reduce burnout and maximize potential.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "True Path Athletics | Premium Sports Development",
    description:
      "Guiding athletes and parents through every stage of development to reduce burnout and maximize potential.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "True Path Athletics | Premium Sports Development",
    description:
      "Guiding athletes and parents through every stage of development to reduce burnout and maximize potential.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        suppressHydrationWarning
        className={`${barlow.variable} ${barlowCondensed.variable} antialiased min-h-full font-sans transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
