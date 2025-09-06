import React from 'react';

const HemuServices = () => {
  const services = [
  {
    id: 'compressed-biogas',
    title: 'Compressed Biogas (CBG) Plants',
    description: 'Setting up plants for converting cattle dung and organic waste into usable biogas for energy and transport. Our CBG solutions help rural communities achieve energy independence while managing waste effectively. These plants also contribute to reducing carbon emissions and promoting a circular economy. With government support and growing demand, CBG is becoming a key driver of rural energy transition.',
    image: '/Serviceslist6.jpeg',
    borderColor: 'border-green-500',
    hoverColor: 'hover:border-yellow-400'
  },
  {
    id: 'solar-energy',
    title: 'Solar Energy Solutions',
    description: 'Providing comprehensive solar power solutions for rural infrastructure, including water pumps, cold storages, training centers, and residential installations. Complete EPC, PMC, O&M services. Our solar initiatives ensure affordable, clean, and reliable energy for every household and business. By reducing dependency on fossil fuels, solar projects pave the way for a sustainable and energy-secure future.',
    image: '/Serviceslist5.jpg',
    borderColor: 'border-yellow-500',
    hoverColor: 'hover:border-green-400'
  },
  {
    id: 'agri-input',
    title: 'Agri Input, Organic Manure & Mineral Supplements',
    description: 'Creating premium bio-fertilizers and cattle supplements from organic materials for improved soil health and enhanced livestock nutrition. Sustainable farming solutions for better yields. Our approach reduces chemical dependency and builds long-term agricultural resilience. These eco-friendly practices empower farmers to produce healthier crops while protecting the environment.',
    image: '/Serviceslist2.jpg',
    borderColor: 'border-green-400',
    hoverColor: 'hover:border-yellow-500'
  },
  {
    id: 'dairy-bakery',
    title: 'Dairy & Bakery Units',
    description: 'Supporting rural dairy production and bakery micro-enterprises for local consumption and market supply. Complete setup and training for sustainable rural businesses. These units generate employment while providing communities with fresh, nutritious food products. With proper infrastructure and guidance, they help rural entrepreneurs expand into larger markets.',
    image: '/Serviceslist3.jpg',
    borderColor: 'border-yellow-400',
    hoverColor: 'hover:border-green-500'
  },
  {
    id: 'allied-business',
    title: 'Allied Business Services',
    description: 'Comprehensive business solutions including Energy, Agriculture, FMCG, FMCD, Skill Training, Trading & Services. Empowering rural communities through diverse business opportunities. Our integrated model fosters entrepreneurship and drives inclusive rural growth. These services create long-term value chains, connecting rural enterprises with national and global markets.',
    image: '/Serviceslist4.jpg',
    borderColor: 'border-green-600',
    hoverColor: 'hover:border-yellow-400'
  }
];



  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50/10 via-yellow-50/10 to-green-50/10 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">


      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block">

            <div className="relative text-center py-4 rounded-2xl w-full max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-4xl lg:text-6xl font-extrabold text-green-700 drop-shadow-md">

                <span className="text-yellow-400">SERVICES</span>
              </h1>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              HEMU offers comprehensive services for rural sustainability and economic empowerment across Uttarakhand
            </p>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="flex items-center space-x-4 bg-white px-2 py-2 rounded-full shadow-lg border-2 border-green-200">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-bold text-sm">Empowering Rural Communities</span>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-8 px-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex-row items-center gap-12 lg:gap-16`}
            >
              {/* Service Image */}
              <div className="flex-1 relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl w-full h-80 lg:h-96 border-4 border-white">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* HEMU Brand Badge */}
                  <div className="absolute bottom-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 border border-green-200">
                      <span className="text-green-700 font-semibold text-sm">HEMU Solutions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="flex-1 space-y-3">
                <div className={`inline-flex items-center space-x-4 px-6 py-3 rounded-full text-gray-600 shadow-lg`}>
                  {/* <span className="text-3xl bg-white/20 p-2 rounded-full">{service.icon}</span> */}
                  <span className="font-semibold">Service #{index + 1}</span>
                </div>

                <h2 className="text-4xl lg:text-4xl max-w-md font-bold text-gray-800 leading-tight group-hover:text-green-700 transition-colors duration-300">
                  {service.title}
                </h2>

                <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full"></div>

                <p className="text-base text-gray-600 leading-relaxed text-justify max-w-lg">
                  {service.description}
                </p>

              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default HemuServices;