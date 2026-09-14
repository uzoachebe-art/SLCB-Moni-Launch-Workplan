import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SLCB Moni Wallet — Launch Workplan",
  description: "Interactive Gantt and workplan from the Execution Partner scope of work for the SLCB Moni Wallet launch campaign.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
