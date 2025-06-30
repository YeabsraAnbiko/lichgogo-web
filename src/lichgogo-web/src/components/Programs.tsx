// components/Programs.tsx
import ProgramCard from './ProgramCard'

const programs = [
  {
    image: '/images/img/academics.jpg',
    title: 'Academics',
    description: 'Develop essential business skills and leadership qualities for the modern corporate world.',
  },
  {
    image: '/images/img/Extracurricular-Activities.webp',
    title: 'Extra Curriculars',
    description: 'Master the latest technologies and prepare for a career in the digital age.',
  },
  {
    image: '/images/img/clubs.jpg',
    title: 'Major Clubs',
    description: 'Innovate and solve complex problems together with peers cutting-edge with scientific principles.',
    link: '/clubs'
  }
]

const Programs = (): JSX.Element => {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our diverse range of secondary and preparatory programs designed to prepare you for success in your chosen field.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  )
}

export default Programs

