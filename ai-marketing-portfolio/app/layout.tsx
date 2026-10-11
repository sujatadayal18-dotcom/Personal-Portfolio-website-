import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Digital Sujata | AI, Digital Marketing & Growth", template: "%s | Digital Sujata" },
  description: "Practical AI and digital marketing strategies that help small businesses reach more people, attract better leads, and grow with confidence.",
  openGraph: {
    type: "website",
    title: "Digital Sujata | AI, Digital Marketing & Growth",
    description: "Practical AI and digital marketing strategies for clearer, more confident small-business growth.",
    siteName: "Digital Sujata",
  },
  twitter: {
    card: "summary",
    title: "Digital Sujata | AI, Digital Marketing & Growth",
    description: "Practical AI and digital marketing strategies for small-business growth.",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
