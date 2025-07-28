import ContactPage from '@/components/pages/contact/contactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Growth Technos',
  description: 'Get in touch with Growth Technos for your digital needs. We\'re here to help you grow your business.',
};

export default function Contact() {
  return <ContactPage />;
}