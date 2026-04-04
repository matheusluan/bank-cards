import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const circular = localFont({
  src: [
    {
      path: "../../public/fonts/lineto-circular-pro-book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/lineto-circular-pro-book.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/lineto-circular-pro-book.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-circular",
});

export const metadata: Metadata = {
  title: "Frontend Engineer Test",
  description: "This app was developed as a Frontend Enginner challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${circular.variable} h-full antialiased`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}