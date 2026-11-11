import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        {children}
        <Script
          src="//code.jivo.ru/widget/UKYCyJNH7j"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
