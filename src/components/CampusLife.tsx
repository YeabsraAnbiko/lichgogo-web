// components/CampusLife.tsx

const CampusLife = (): JSX.Element => {
  return (
    <section id="campuslife" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Experience Campus Life</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our vibrant campus community offers endless opportunities for growth, learning, and connection. From state-of-the-art facilities to diverse student organizations, there's something for everyone at LBSE.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4">
                  <i className="ri-community-line text-xl text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Student Organizations</h3>
                  <p className="text-gray-600">Join student clubs and organizations</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4">
                  <i className="ri-building-2-line text-xl text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Modern Facilities</h3>
                  <p className="text-gray-600">Access to cutting-edge research labs and learning spaces</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4">
                  <i className="ri-group-line text-xl text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Diverse Community</h3>
                  <p className="text-gray-600">Students from Diverse Background</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/img/building.png" alt="Campus Life" className="w-full h-48 object-cover rounded-lg" />
            <img src="/images/img/japan.jpg" alt="Campus Activities" className="w-full h-48 object-cover rounded-lg" />
            <img src="/images/img/door.jpg" alt="Student Housing" className="w-full h-48 object-cover rounded-lg" />
            <img src="/images/img/mola2.jpg" alt="Sports Facilities" className="w-full h-48 object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampusLife

