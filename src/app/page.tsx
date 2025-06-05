import Image from 'next/image';
import InputField from '@/components/input-field';
import MinCard from '@/components/minCard';
import Team from '@/components/Team';
import { devTeams } from '@/lib/contents/devTeam';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300" data-theme="light">
        <main>
            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" width={1920} height={1080} ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
                <div style={{margin:"100px 0"}} className="container mx-auto px-6 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-fadeInUp">
                            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/5 rounded-full">
                                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                                <span className="text-primary font-medium">Welcome to Lichgogo boarding school</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold">
                                <span className="block text-gray-900">Shape Your</span>
                                <span className="block mt-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Future Today</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                            Join a vibrant community of innovators, leaders, and changemakers. Experience world-class education that prepares you for success in an ever-evolving global landscape.
                            </p>
                            <div className="flex flex-wrap gap-6 items-center">
                                <button className="group relative px-8 py-4 bg-primary text-white !rounded-button overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
                                    <span className="relative z-10">Start Your Journey</span>
                                    <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </button>
                                <button className="group flex items-center gap-2 px-8 py-4 border-2 border-gray-900 text-gray-900 !rounded-button hover:bg-gray-900 hover:text-white transition-all duration-300">
                                    <span>Virtual Tour</span>
                                    <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
                                </button>
                            </div>
                            <div className="flex items-center gap-8 pt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">250+</div>
                                    <div className="text-sm text-gray-600">Students</div>
                                </div>
                                <div className="h-12 w-px bg-gray-200"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">100%</div>
                                    <div className="text-sm text-gray-600">Success Rate</div>
                                </div>
                                <div className="h-12 w-px bg-gray-200"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">15+</div>
                                    <div className="text-sm text-gray-600">Programs</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative hidden lg:block">
                            <Image src="/logo.png"
                            width={800}
                            height={1000}
                            alt="over view"
                            className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                                />
                            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-4 animate-float">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <i className="ri-graduation-cap-fill text-2xl text-primary"></i>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">250+</div>
                                        <div className="text-sm text-gray-600">Global Alumni</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg className="relative block w-full h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
                        <path fill="#ffffff" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
                    </svg>
                </div>
            </section>
            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <MinCard 
                        label="100%"
                        desc="University acceptance Rate"
                        />

                        <MinCard
                        label="15+"
                        desc="Academic Programs"
                        />

                        <MinCard 
                        label="5+"
                        desc="Extra Curricular programs"
                        />

                        <MinCard 
                        label="95+%"
                        desc="Fully Funded Scholarship"
                        />

                    </div>
                </div>
            </section>
            {/* Featured Programs */}
            <section id="programs" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Programs</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover our diverse range of secondary and preparatory programs designed to prepare you for success in your chosen field.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="program-card bg-white rounded-lg overflow-hidden shadow-lg">
                            <Image src="/academics.jpg" 
                            width={1000}
                            height={1000}
                            alt="academics" 
                            className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Academics</h3>
                                <p className="text-gray-600 mb-4">Develop essential business skills and leadership qualities for the modern corporate world.</p>
                                <button className="text-primary hover:text-primary/80 font-medium flex items-center">
                                    Learn More <i className="ri-arrow-right-line ml-2"></i>
                                </button>
                            </div>
                        </div>
                        <div className="program-card bg-white rounded-lg overflow-hidden shadow-lg">
                            <Image src="/Extracurricular-Activities.webp" 
                            width={1000}
                            height={1000}
                            alt="Extracurricular activities" 
                            className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Extra Curriculars</h3>
                                <p className="text-gray-600 mb-4">Master the latest technologies and prepare for a career in the digital age.</p>
                                <button className="text-primary hover:text-primary/80 font-medium flex items-center">
                                    Learn More <i className="ri-arrow-right-line ml-2"></i>
                                </button>
                            </div>
                        </div>
                        <div className="program-card bg-white rounded-lg overflow-hidden shadow-lg">
                            <Image src="/clubs.jpg" 
                            width={1000}
                            height={1000}
                            alt="clubs" 
                            className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Major Clubs</h3>
                                <p className="text-gray-600 mb-4">Innovate and solve complex problems  together with peers cutting-edge with scientific principles.</p>
                                <button   className="text-primary hover:text-primary/80 font-medium flex items-center"  >
                                    <a href="clubs.html" target="_blank">Learn More</a> <i className="ri-arrow-right-line ml-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 border-2 border-primary text-primary !rounded-button hover:bg-primary hover:text-white">
                            View All Programs
                        </button>
                    </div>
                </div>
            </section>
            {/* Campus Life */}
            <section id="campus" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Experience Campus Life</h2>
                            <p className="text-xl text-gray-600 mb-8">
                            {" Our vibrant campus community offers endless opportunities for growth, learning, and connection. From state-of-the-art facilities to diverse student organizations, there's something for everyone at LBSE. "}
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4">
                                        <i className="ri-community-line text-xl text-primary"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Student Organizations</h3>
                                        <p className="text-gray-600">Join student clubs and organizations</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4">
                                        <i className="ri-building-2-line text-xl text-primary"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Modern Facilities</h3>
                                        <p className="text-gray-600">Access to cutting-edge research labs and learning spaces</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4">
                                        <i className="ri-group-line text-xl text-primary"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Diverse Community</h3>
                                        <p className="text-gray-600">Students from Diverse Background</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Image src="/building.png"
                        width={1000}
                        height={1000}
                            alt="Campus Life" 
                            className="w-full h-48 object-cover rounded-lg"
                            />
                            <Image src="/japan.jpg" 
                        width={1000}
                        height={1000}
                            alt="Campus Activities" 
                            className="w-full h-48 object-cover rounded-lg"
                            />
                            <Image src="/door.jpg" 
                        width={1000}
                        height={1000}
                            alt="Student Housing" 
                            className="w-full h-48 object-cover rounded-lg"
                            />
                            <Image src="/mola2.jpg" 
                        width={1000}
                        height={1000}
                            alt="Sports Facilities" 
                            className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Admissions */}
            <section id="admissions" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Begin Your Journey</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Take the first step towards your future at Lichogogo Boarding School of Exellence. Our admissions team is here to guide you through the process.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                                <i className="ri-file-list-3-line text-2xl text-primary"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Application Requirements</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center">
                                    <i className="ri-checkbox-circle-line text-primary mr-2"></i>
                                    Academic transcripts
                                </li>
                                <li className="flex items-center">
                                    <i className="ri-checkbox-circle-line text-primary mr-2"></i>
                                    Letters of recommendation
                                </li>
                                <li className="flex items-center">
                                    <i className="ri-checkbox-circle-line text-primary mr-2"></i>
                                    Personal statement
                                </li>
                                <li className="flex items-center">
                                    <i className="ri-checkbox-circle-line text-primary mr-2"></i>
                                    Standardized test scores
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                                <i className="ri-calendar-line text-2xl text-primary"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Important Dates</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center">
                                    <i className="ri-time-line text-primary mr-2"></i>
                                    Opens: ASAP th Regional exam results are out.
                                </li>
                                <li className="flex items-center">
                                    <i className="ri-time-line text-primary mr-2"></i>
                                    Selection Date: Will be Announced
                                </li>
                                <li className="flex items-center">
                                    <i className="ri-time-line text-primary mr-2"></i>
                                    Entrance Exam: Will be Announced;
                                </li>
                                <li className="flex items-center">
                                    <i className="ri-time-line text-primary mr-2"></i>
                                    Financial Aid: After the Examination
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                                <i className="ri-customer-service-2-line text-2xl text-primary"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Get Support</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center">
                                    <i className="ri-phone-line text-primary mr-2"></i>
                                    +1 (415) 555-2671
                                </li>
                                <li className="flex items-center">
                                    <i className="ri-mail-line text-primary mr-2"></i>
                                    admissions@westfield.edu
                                </li>
                                <li className="flex items-center">
                                    <i className="ri-map-pin-line text-primary mr-2"></i>
                                    1250 University Avenue
                                </li>
                                <li className="flex items-center">
                                    <i className="ri-time-line text-primary mr-2"></i>
                                    Mon-Fri: 9:00 AM - 5:00 PM
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Meet Our Team Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Development Team</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        The talented individuals behind our success, working together to create exceptional educational experiences.
                        </p>
                    </div>
                        <div className="flex gap-4 md:gap-6 lg:gap-8 transition-transform duration-500 ease-out" id="teamSlider">
                        {/*people*/}
        {devTeams.map((member, index) => (
          <Team key={index} {...member} />
        ))}
                        </div>
                    <div className="relative px-4 md:px-6 lg:px-8">
                        <div className="flex justify-center mt-8 gap-4">
                            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300" id="prevBtn">
                                <i className="ri-arrow-left-s-line text-2xl text-gray-600"></i>
                            </button>
                            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300" id="nextBtn">
                                <i className="ri-arrow-right-s-line text-2xl text-gray-600"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Form */}
            <section id="contact" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                            <p className="text-xl text-gray-600">
                            {"Have questions? We're here to help. Send us a message and we'll respond as soon as possible."}
                            </p>
                        </div>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField field="First Name" type="text" />
                        <InputField field="Last Name" type="text" />
                        <InputField field="Email" type="email" />
                        <InputField field="Phone" type="tel" />
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" required></textarea>
                            </div>
                            <div className="md:col-span-2 text-center">
                                <button type="submit" className="px-8 py-3 bg-primary text-white !rounded-button hover:bg-primary/90">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
        </div>
        
  );
}
