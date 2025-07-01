import Developers from "@/components/Developers";
import ContactForm from '@/components/ContactForm';
import Admissions from '@/components/Admission';
import CampusLife from '@/components/CampusLife';
import Programs from '@/components/Programs';
import Stats from '@/components/Stats';
import Hero from "@/components/Hero";

const Page = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
        >
            <main>
                <Hero />
                <Stats />
                <Programs />
                <CampusLife />
                <Admissions />
                <Developers />
                <ContactForm />
            </main>
        </div>

    );
};

export default Page;
