import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  title: "Khen Bo Kan — Applied AI / LLM Engineer",
  description:
    "Applied AI / LLM Engineer building autonomous agents, RAG pipelines, and the systems that run them. Behind AuditAgent at Nethermind.",
  openGraph: {
    title: "Khen Bo Kan — Applied AI / LLM Engineer",
    description:
      "Autonomous LLM agents, RAG, and agent memory in production. Behind AuditAgent at Nethermind.",
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
