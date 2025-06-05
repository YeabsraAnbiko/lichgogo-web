import Image from 'next/image';
import Team from '@/app/ui/team';
import InputField from '@/app/ui/input-field';
import MinCard from '@/app/ui/minCard';

export default function Page() {
  return (
        
<div>
{/* Hero Section */}
<section className="hero-section relative pt-16">
<div className="hero-overlay h-[600px] flex items-center">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="max-w-2xl">
<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Student Clubs & Activities</h1>
<p className="text-xl text-gray-300 mb-8">Discover your passion, develop new skills, and connect with like-minded peers through our diverse range of student-led clubs.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-primary text-white px-6 py-3 rounded-button font-medium hover:bg-blue-600 transition-colors whitespace-nowrap">Explore Clubs</button>
<button className="bg-transparent border border-white text-white px-6 py-3 rounded-button font-medium hover:bg-white/10 transition-colors whitespace-nowrap">View Calendar</button>
</div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
<div className="w-8 h-8 flex items-center justify-center">
<i className="ri-arrow-down-line ri-lg"></i>
</div>
</div>
</section>
{/* Clubs Section */}
<section id="clubs" className="py-16 bg-[#0F0F0F]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-white mb-4">Our Featured Clubs</h2>
<p className="text-gray-400 max-w-2xl mx-auto">Join one of our dynamic student-led clubs to explore your interests, develop new skills, and make lasting connections.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/* IT Club */}
<div className="club-card rounded-lg overflow-hidden border border-gray-800">
<div className="h-48 bg-cover bg-center" ></div>
<div className="p-6">
<div className="flex items-center mb-4">
<div className="w-10 h-10 flex items-center justify-center bg-blue-900/30 rounded-full text-primary mr-3">
<i className="ri-code-line ri-lg"></i>
</div>
<h3 className="text-xl font-bold text-white">IT Club</h3>
</div>
<div className="space-y-4">
<p className="text-gray-400">A dynamic community of tech enthusiasts exploring the cutting-edge of computer science and digital innovation. Our club provides hands-on experience in:</p>
<ul className="text-gray-400 space-y-2 list-disc pl-4">
<li>Full-stack web development using modern frameworks and tools</li>
<li>Mobile app development for iOS and Android platforms</li>
<li>Cybersecurity fundamentals and ethical hacking practices</li>
<li>Cloud computing and DevOps principles</li>
<li>Artificial Intelligence and Machine Learning projects</li>
</ul>
<p className="text-gray-400">Members participate in coding competitions, hackathons, and collaborative projects with industry mentors. We host weekly workshops and coding sessions to help members build their technical portfolio.</p>
<div className="flex justify-between items-center mt-4">
<span className="text-sm text-gray-500">42 active members</span>
</div>
</div>
</div>
</div>
{/* Innovation and Technology */}
<div className="club-card rounded-lg overflow-hidden border border-gray-800">
<div className="h-48 bg-cover bg-center" ></div>
<div className="p-6">
<div className="flex items-center mb-4">
<div className="w-10 h-10 flex items-center justify-center bg-green-900/30 rounded-full text-secondary mr-3">
<i className="ri-lightbulb-line ri-lg"></i>
</div>
<h3 className="text-xl font-bold text-white">Innovation and Technology</h3>
</div>
<div className="space-y-4">
<p className="text-gray-400">Pushing the boundaries of technology and innovation, our club focuses on turning creative ideas into reality. We explore breakthrough technologies and their practical applications:</p>
<ul className="text-gray-400 space-y-2 list-disc pl-4">
<li>Robotics design and programming using industry-standard tools</li>
<li>Internet of Things (IoT) projects for smart home and city solutions</li>
<li>3D printing and rapid prototyping techniques</li>
<li>Virtual and Augmented Reality application development</li>
<li>Sustainable technology solutions for environmental challenges</li>
</ul>
<p className="text-gray-400">Members work on long-term innovation projects, participate in robotics competitions, and collaborate with local tech companies. Regular workshops cover emerging technologies and entrepreneurship skills.</p>
<div className="flex justify-between items-center mt-4">
<span className="text-sm text-gray-500">38 active members</span>
</div>
</div>
</div>
</div>
{/* Omni Club */}
<div className="club-card rounded-lg overflow-hidden border border-gray-800">
<div className="h-48 bg-cover bg-center"></div>
<div className="p-6">
<div className="flex items-center mb-4">
<div className="w-10 h-10 flex items-center justify-center bg-amber-900/30 rounded-full text-amber-500 mr-3">
<i className="ri-planet-line ri-lg"></i>
</div>
<h3 className="text-xl font-bold text-white">Omni Club</h3>
</div>
<div className="space-y-4">
<p className="text-gray-400">A unique interdisciplinary space where creativity meets analytical thinking. We bridge the gap between arts, sciences, and humanities through innovative projects and meaningful discussions:</p>
<ul className="text-gray-400 space-y-2 list-disc pl-4">
<li>Digital art and creative technology installations</li>
<li>Science communication through multimedia platforms</li>
<li>Environmental science and sustainable art projects</li>
<li>Cultural heritage preservation using modern technology</li>
<li>Cross-disciplinary research and presentation opportunities</li>
</ul>
<p className="text-gray-400">Our club hosts interdisciplinary exhibitions, organizes creative workshops, and facilitates discussions on the intersection of different fields. Members develop diverse skills while working on collaborative projects that combine multiple disciplines.</p>
<div className="flex justify-between items-center mt-4">
<span className="text-sm text-gray-500">51 active members</span>
</div>
</div>
</div>
</div>
{/* Charity Club */}
<div className="club-card rounded-lg overflow-hidden border border-gray-800">
<div className="h-48 bg-cover bg-center"></div>
<div className="p-6">
<div className="flex items-center mb-4">
<div className="w-10 h-10 flex items-center justify-center bg-pink-900/30 rounded-full text-pink-500 mr-3">
<i className="ri-heart-line ri-lg"></i>
</div>
<h3 className="text-xl font-bold text-white">Charity Club</h3>
</div>
<div className="space-y-4">
<p className="text-gray-400">Making a positive impact in our community through organized charitable initiatives and social awareness campaigns. Our activities focus on:</p>
<ul className="text-gray-400 space-y-2 list-disc pl-4">
<li>Local food bank support and meal distribution programs</li>
<li>Educational mentoring for underprivileged students</li>
<li>Environmental cleanup and conservation projects</li>
<li>Senior citizen support and companionship programs</li>
<li>Fundraising events for various charitable causes</li>
</ul>
<p className="text-gray-400">Members develop leadership and organizational skills while making a real difference in the community. We partner with local non-profits and organize regular volunteering events, awareness campaigns, and fundraising activities.</p>
<div className="flex justify-between items-center mt-4">
<span className="text-sm text-gray-500">47 active members</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
  );
}
{/**/}
