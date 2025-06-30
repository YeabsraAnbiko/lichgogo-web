export type ProgramCardProps = {
  image: string
  title: string
  description: string
  link?: string
}

const ProgramCard = ({ image, title, description, link }: ProgramCardProps): JSX.Element => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {link && (
          <a href={link} className="text-primary hover:text-primary/80 font-medium flex items-center">
            Learn More <i className="ri-arrow-right-line ml-2" />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProgramCard

