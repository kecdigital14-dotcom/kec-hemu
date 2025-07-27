export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="mx-auto px-6 lg:px-36 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logoheader.png"
                alt="Solar Energy Solution"
                className="w-36 h-24 object-cover shadow-2xl"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We're dedicated to helping you harness the power of organic waste to build a cleaner, greener future. Whether you're aiming to reduce fuel costs, cut carbon emissions effectively.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {["f", "in", "@", "▶"].map((icon, i) => (
                <div key={i} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">{icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gray-700 rounded-full mt-1 flex-shrink-0"></div>
                <div className="text-sm font-medium text-gray-400">
                  <p>429, 4th Floor, Amsal Chamber 2, Metro Station - Gate No.3</p>
                  <p>Bikaji Cama Place, New Delhi-110066</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gray-700 rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium text-gray-400">91-8287933634</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gray-700 rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium text-gray-400">Info@kisanexperience.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Why Choose Us", "Blog"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {["Customer Service", "Installation Process", "Maintenance Plans", "Contact Us", "Cbg FAQ"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-gray-800"></div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-3">
          <p className="text-sm text-gray-400">
            ©Copyright 2025 <span className="text-white font-semibold">Developers Infotech Pvt Ltd</span>. All rights reserved
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
            <span className="text-gray-600 hidden md:inline">|</span>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
