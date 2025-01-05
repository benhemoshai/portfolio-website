import AboutImage from './AboutImage';
import AboutContent from './AboutContent';
import ContactForm from './ContactForm';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-16">
          <AboutImage />
          <AboutContent />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
