import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { SalesNotification } from '@/components/landing/SalesNotification';
import { BlackFridayBanner } from '@/components/landing/BlackFridayBanner';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Diversão Bíblica',
  description: '26 jogos bíblicos infantis para transformar o aprendizado do seu filho.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="https://i.ibb.co/JwC73wM/biblia.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></Script>
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "69211250d15ef9177a18ae5b";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        <BlackFridayBanner />
        {children}
        <SalesNotification />
        <Toaster />
      </body>
    </html>
  );
}
