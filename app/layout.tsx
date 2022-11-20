import "../styles/globals.css";
import { Inconsolata } from "@next/font/google";

const inconsolata = Inconsolata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className={inconsolata.className}>{children}</body>
    </html>
  );
}
