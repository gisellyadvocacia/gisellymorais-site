import type { Metadata, Viewport } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gisellymoraisadvogada.com'),
  title: {
    default: 'Dra. Giselly Morais | Advogada Imobiliária e Sucessória em Uberaba MG',
    template: '%s | Dra. Giselly Morais',
  },
  description: 'Assessoria jurídica especializada em Direito Imobiliário e Sucessório em Uberaba/MG. Regularização de imóveis, usucapião, contratos de compra e venda, inventários e partilhas. Dra. Giselly Morais (OAB/MG 171.639).',
  keywords: [
    'advogado imobiliário uberaba',
    'advocacia imobiliaria uberaba',
    'regularização de imóveis uberaba',
    'usucapião uberaba',
    'inventario uberaba mg',
    'contrato compra e venda imovel',
    'advogada direito imobiliario',
    'dra giselly morais',
  ],
  authors: [{ name: 'Dra. Giselly Maria de Morais' }],
  creator: 'Dra. Giselly Maria de Morais',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.gisellymoraisadvogada.com',
    siteName: 'Dra. Giselly Morais Advocacia',
    title: 'Dra. Giselly Morais | Advocacia Imobiliária e Sucessória em Uberaba MG',
    description: 'Assessoria jurídica especializada em regularização de imóveis, contratos, usucapião e inventários em Uberaba e região. Agende pelo WhatsApp.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Dra. Giselly Morais - Advocacia Imobiliária em Uberaba',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Giselly Morais | Advocacia Imobiliária e Sucessória em Uberaba',
    description: 'Segurança jurídica para seu patrimônio: regularização de imóveis, contratos, inventários e assessoria especializada em Uberaba/MG.',
    images: ['/images/hero.jpg'],
  },
  alternates: {
    canonical: 'https://www.gisellymoraisadvogada.com',
  },
  verification: {
    google: 'yVgAucZfFv1yTHzDepUmLpa5om2t7-0emfUqDovCOzo',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        {/* Google tag (gtag.js) - Google Ads */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16658443724"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16658443724');
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-16658443724/fCBTCJSKiawcEMzbroc-',
                  'value': 1.0,
                  'currency': 'BRL',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
