import ContactPage from '@/components/pages/contact/contactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Growth Technos | Get in Touch for Digital Solutions',
  description: 'Get in touch with Growth Technos for your digital needs. Contact our team for web development, SEO, digital marketing, and branding solutions. We\'re here to help you grow your business.',
  keywords: [
    'contact Growth Technos',
    'digital agency contact',
    'web development contact',
    'SEO services contact',
    'Noida digital agency',
    'get quote',
    'free consultation',
  ],
  openGraph: {
    title: 'Contact Us - Growth Technos | Get in Touch',
    description: 'Get in touch with Growth Technos for your digital needs. We\'re here to help you grow your business with innovative digital solutions.',
    url: 'https://growthtechnos.com/contact',
    siteName: 'Growth Technos',
    images: [
      {
        url: '/og-contact.jpg', // You need to provide this: 1200x630px
        width: 1200,
        height: 630,
        alt: 'Contact Growth Technos - Get in Touch',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Growth Technos',
    description: 'Get in touch with Growth Technos for your digital needs. We\'re here to help you grow your business.',
    images: ['/og-contact.jpg'],
  },
  alternates: {
    canonical: 'https://growthtechnos.com/contact',
  },
};

export default function Contact() {
  return <ContactPage />;
}
