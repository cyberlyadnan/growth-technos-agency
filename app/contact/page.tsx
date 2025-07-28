import { Metadata } from 'next';
import { ContactPage } from '@/components/pages/contact/contact-page';

export const metadata: Metadata = {
  title: 'Contact Us - Growth Technos',
  description: 'Get in touch with Growth Technos for your digital needs. We\'re here to help you grow your business.',
};

export default function Contact() {
  return <ContactPage />;
}