import Developers from "@/components/Developers"
import ContactForm from '@/components/ContactForm';
import Admissions from '@/components/Admission';
import CampusLife from '@/components/CampusLife';
import Programs from '@/components/Programs';
import Stats from '@/components/Stats';
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300" data-theme="light">
        <main>
            {/* hero section */}
                <Hero />
            {/* stats section */}
                <Stats />
            {/* featured programs */}
                <Programs />
            {/* Campus Life */}
                <CampusLife />
            {/* Admissions */}
                <Admissions />
            {/* Meet Our Team Section */}
                <Developers />
            {/* Contact Form */}
                <ContactForm />
        </main>
        </div>
        
  );
}
