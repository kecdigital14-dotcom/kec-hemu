import React from 'react';
import { 
  Heart, 
  Shield, 
  Microscope, 
  Phone, 
  Stethoscope, 
  Truck, 
  GraduationCap, 
  Pill, 
  Building, 
  Users,
  CheckCircle,
  Activity
} from 'lucide-react';

const VeterinaryServices = () => {
  const veterinaryImages = [
    "/veterinarycare1.jfif", // Veterinary consultation
    "/veterinarycare2.jfif", // Farmer with cattle
    "/veterinarycare3.jfif", // Veterinary examination
    "/veterinarycare4.jfif", // Health camp
  ];

  const services = [
    {
      id: 1,
      title: "Regular Health Check-ups",
      description: "Periodic health camps and routine examinations for livestock to ensure early diagnosis and treatment of diseases.",
      icon: <Heart className="w-6 h-6" />,
      details: ["Early disease detection", "Preventive care programs", "Regular monitoring"]
    },
    {
      id: 2,
      title: "Vaccination Programs",
      description: "Implementation of vaccination drives to protect livestock against common diseases like Foot-and-Mouth Disease (FMD), Brucellosis, and other infections.",
      icon: <Shield className="w-6 h-6" />,
      details: ["FMD prevention", "Brucellosis control", "Seasonal vaccination drives"]
    },
    {
      id: 3,
      title: "Artificial Insemination (AI)",
      description: "Provision of artificial insemination services to improve the breed quality and productivity of livestock.",
      icon: <Microscope className="w-6 h-6" />,
      details: ["Breed improvement", "Genetic enhancement", "Productivity increase"]
    },
    {
      id: 4,
      title: "Emergency Care Services",
      description: "Quick-response teams to handle emergencies such as injuries, infections, or calving issues.",
      icon: <Phone className="w-6 h-6" />,
      details: ["24/7 emergency response", "Injury treatment", "Critical care support"]
    },
    {
      id: 5,
      title: "Disease Diagnostics and Treatment",
      description: "On-site diagnostic services and treatment for various ailments affecting livestock. Distribution of medicines and supplements at affordable rates.",
      icon: <Stethoscope className="w-6 h-6" />,
      details: ["On-site diagnosis", "Affordable medicines", "Treatment protocols"]
    },
    {
      id: 6,
      title: "Mobile Veterinary Units",
      description: "Deployment of mobile veterinary units equipped with essential tools and medicines to serve remote areas.",
      icon: <Truck className="w-6 h-6" />,
      details: ["Remote area coverage", "Essential equipment", "Doorstep services"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-green-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-green-700/90"></div>
        <div className="relative px-6 py-4 text-center">
          <div className="flex justify-center mb-2">
            <Activity className="w-16 h-16 text-yellow-300" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Veterinary Services
          </h1>

        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-16 max-w-7xl">
          {/* Introduction Section */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Content */}
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Comprehensive Veterinary Care
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The Uttarakhand Cooperative Dairy Federation Ltd. (UCDF), under its brand "HEMU," provides comprehensive veterinary services to support the health and productivity of livestock owned by farmers.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    These services play a crucial role in ensuring sustainable dairy farming and improving the overall livelihood of farmers in Uttarakhand.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Professional veterinary care</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3" />
                      <span className="text-gray-700">State-wide service coverage</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Advanced healthcare solutions</span>
                    </div>
                  </div>
                </div>
                
                {/* Right Images Grid */}
                <div className="relative bg-gradient-to-br from-green-100 to-yellow-50 p-8 lg:p-12">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                          src={veterinaryImages[0]} 
                          alt="Veterinary consultation" 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                          src={veterinaryImages[1]} 
                          alt="Farmer with cattle" 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-4 mt-8">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                          src={veterinaryImages[2]} 
                          alt="Veterinary examination" 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                          src={veterinaryImages[3]} 
                          alt="Health camp" 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Center Logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full p-6 shadow-xl border-4 border-yellow-400">
                      <Heart className="w-12 h-12 text-green-600" />
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-200 rounded-full opacity-50"></div>
                  <div className="absolute bottom-8 left-8 w-6 h-6 bg-green-200 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Services Section */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
              Key Veterinary Services Offered
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-l-4 border-green-600"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-100 rounded-full p-3 mr-4">
                      <div className="text-green-700">
                        {service.icon}
                      </div>
                    </div>
                    <div className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {service.id}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.details.map((detail, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-gradient-to-r from-green-600 to-yellow-500 rounded-lg shadow-xl p-8 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Veterinary Camps</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50,000+</div>
                <div className="text-sm opacity-90">Animals Treated</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-90">Mobile Units</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Emergency Care</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeterinaryServices;