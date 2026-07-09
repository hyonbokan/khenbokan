import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

// Two voices only, the way a paper is set:
// a literary text serif for all prose, a warm mono for the apparatus.

// Prose — titles, body, everything you read as language. A low-contrast
// literary serif (the essay/journal identity), not the Playfair default.
const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  adjustFontFallback: false,
});

// Apparatus — labels, metadata, spec sheet, figures, values. IBM Plex Mono
// reads like typewritten annotation and harmonizes with a serif far better
// than an IDE mono would.
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khen Bo Kan — Applied LLM Engineer",
  description:
    "I build LLM systems — and the research, evaluation, and LLMOps that keep them reliable under real load. Behind AuditAgent at Nethermind; first-author IEEE paper.",
  openGraph: {
    title: "Khen Bo Kan — Applied LLM Engineer",
    description:
      "LLM systems that survive production — research, evaluation, and LLMOps. Behind AuditAgent at Nethermind.",
    url: "https://khenbokan.vercel.app",
    siteName: "Khen Bo Kan",
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
      suppressHydrationWarning
      className={`${serif.variable} ${mono.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
