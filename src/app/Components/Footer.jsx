import { Phone, Mail, Globe, MapPin, Facebook, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="mx-auto px-6 lg:px-36 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-start">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logoheader.png"
                alt="Harit Energy Mission"
                className="w-36 h-24 object-cover shadow-2xl"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We're dedicated to helping you harness the power of organic waste to build a cleaner, greener future. Whether you're aiming to reduce fuel costs, cut carbon emissions effectively.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <Icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-400">
                +91 8287933634
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-400">
                ceo@haritenergymissionuk.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-400">
                www.haritenergymissionuk.com
              </span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <div className="text-sm font-medium text-gray-400">
                <p>Joint Director, Dairy Development</p>
                <p>Aanchal Dairy Compound, Raipur Road</p>
                <p>Dehradun - 248001</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Why Choose Us", "Blog"].map(
                (link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                "Customer Service",
                "Installation Process",
                "Maintenance Plans",
                "Contact Us",
                "Cbg FAQ",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
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
            ©Copyright 2025{" "}
            <span className="text-white font-semibold">
              Harit Energy Mission
            </span>
            . All rights reserved
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
            <span className="text-gray-600 hidden md:inline">|</span>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
