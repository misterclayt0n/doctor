import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Rodolfo Leite Arantes - Cardiologista Santos SP | Consultas e Tratamentos",
  description: "Dr. Rodolfo Leite Arantes, cardiologista especialista em Santos/SP com 30+ anos de experiência. Agende sua consulta: WhatsApp, telefone ou Google Calendar. Tratamento personalizado de hipertensão e problemas cardiovasculares.",
  keywords: "cardiologista Santos, Dr Rodolfo Leite Arantes, cardio Santos SP, consulta cardiologista, hipertensão arterial, tratamento cardíaco, cardiologia Santos, médico coração Santos",
  authors: [{ name: "Dr. Rodolfo Leite Arantes" }],
  creator: "Dr. Rodolfo Leite Arantes",
  publisher: "Consultório Dr. Rodolfo Leite Arantes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://drcardios.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dr. Rodolfo Leite Arantes - Cardiologista Santos SP",
    description: "Especialista em cardiologia com 30+ anos de experiência. Agende sua consulta via WhatsApp, telefone ou Google Calendar. Av. Conselheiro Nébias, 756 - Santos/SP",
    url: 'https://drcardios.com.br',
    siteName: 'Dr. Cardios - Dr. Rodolfo Leite Arantes',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Rodolfo Leite Arantes - Cardiologista Santos SP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. Rodolfo Leite Arantes - Cardiologista Santos SP",
    description: "Especialista em cardiologia com 30+ anos de experiência. Agende sua consulta via WhatsApp ou telefone.",
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'google-site-verification-code', // Adicionar código real do Google Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Dr. Rodolfo Leite Arantes - Cardiologista",
              "url": "https://drcardios.com.br",
              "logo": "https://drcardios.com.br/logo.png",
              "image": "https://drcardios.com.br/og-image.jpg",
              "description": "Cardiologista especialista em Santos/SP com 30+ anos de experiência. Consultas personalizadas e tratamento de hipertensão arterial.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Conselheiro Nébias, 756 - conj. 2007",
                "addressLocality": "Santos",
                "addressRegion": "SP",
                "postalCode": "11045-101",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-23.9548",
                "longitude": "-46.3344"
              },
              "telephone": "+55-13-99790-5778",
              "priceRange": "$$",
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 08:00-12:00"
              ],
              "sameAs": [
                "https://www.doctoralia.com.br/rodolfo-leite-arantes/cardiologista/santos"
              ],
              "physician": {
                "@type": "Physician",
                "name": "Dr. Rodolfo Leite Arantes",
                "jobTitle": "Cardiologista",
                "worksFor": {
                  "@type": "MedicalOrganization",
                  "name": "Consultório Dr. Rodolfo Leite Arantes"
                },
                "alumniOf": {
                  "@type": "EducationalOrganization",
                  "name": "Faculdade de Ciências Médicas de Santos"
                },
                "memberOf": {
                  "@type": "MedicalOrganization",
                  "name": "Sociedade Brasileira de Cardiologia"
                }
              },
              "medicalSpecialty": [
                "Cardiologia",
                "Hipertensão Arterial",
                "Ergometria"
              ]
            })
          }}
        />
        
        {/* Google Ads and Analytics Tags */}
        <meta name="google-ads-verification" content="google-ads-verification-code" />
        
        {/* Contact Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPoint",
              "telephone": "+55-13-99790-5778",
              "contactType": "Appointment Booking",
              "areaServed": "Santos, SP",
              "availableLanguage": "Portuguese"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* WhatsApp Web Widget */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.onload = function() {
                // Track WhatsApp clicks for Google Ads
                document.querySelectorAll('[href*="wa.me"], [onclick*="wa.me"]').forEach(function(element) {
                  element.addEventListener('click', function() {
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'whatsapp_click', {
                        'event_category': 'contact',
                        'event_label': 'whatsapp'
                      });
                    }
                  });
                });
                
                // Track phone clicks
                document.querySelectorAll('[href*="tel:"]').forEach(function(element) {
                  element.addEventListener('click', function() {
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'phone_click', {
                        'event_category': 'contact',
                        'event_label': 'phone'
                      });
                    }
                  });
                });
              };
            `
          }}
        />
      </body>
    </html>
  );
}
