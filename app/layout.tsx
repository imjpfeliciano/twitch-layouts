import "../styles/globals.css";
import localFont from "@next/font/local";

const spacemono = localFont({
  src: "./SpaceMonoNF.ttf",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className={spacemono.className}>{children}</body>
    </html>
  );
}
