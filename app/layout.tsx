import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Нонна | ClayTone Nail Studio",
  description: "Маникюр и педикюр в Москве — ClayTone Nail Studio.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
