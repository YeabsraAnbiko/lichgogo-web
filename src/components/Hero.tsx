
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/5 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              <span className="text-primary font-medium">Welcome to Lichgogo Boarding School</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="block text-gray-900">Shape Your</span>
              <span className="block mt-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Future Today</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Join a vibrant community of innovators, leaders, and changemakers. Experience world-class education that prepares you for success in an ever-evolving global landscape.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <button className="group relative px-8 py-4 bg-primary text-white rounded overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button className="group flex items-center gap-2 px-8 py-4 border-2 border-gray-900 text-gray-900 rounded hover:bg-gray-900 hover:text-white transition-all duration-300">
                <span>Virtual Tour</span>
                <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">250+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Programs</div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <img
              src="/images/students.jpg"
              alt="Students at LBSE"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-4 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <i className="ri-graduation-cap-fill text-2xl text-primary" />
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
          <path
            fill="#ffffff"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
