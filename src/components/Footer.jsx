import { Calendar, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          {/* Company Info */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                EventSphere
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed sm:text-base px-6 sm:px-0">
              Connecting communities through amazing events and unforgettable experiences. Discover, attend, and create memories that last a lifetime.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-gray-800 hover:bg-indigo-600 rounded-lg transition duration-200">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-0 md:ml-28">
            <details className="sm:hidden">
              <summary className="text-lg font-semibold cursor-pointer">Quick Links</summary>
              <ul className="space-y-2 mt-2 text-sm">
                {["Home", "Featured Events", "Categories", "About Us", "Contact"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
            <div className="hidden sm:block">
              <h3 className="text-lg sm:text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm sm:text-base mt-2">
                {["Home", "Featured Events", "Categories", "About Us", "Contact"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Event Categories */}
          <div className="space-y-0 md:ml-20">
            <details className="sm:hidden">
              <summary className="text-lg font-semibold cursor-pointer">Categories</summary>
              <ul className="space-y-2 mt-2 text-sm">
                {["Music & Concerts", "Technology", "Food & Drink", "Adventure", "Arts & Culture"].map((cat, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
            <div className="hidden sm:block">
              <h3 className="text-lg sm:text-xl font-semibold">Categories</h3>
              <ul className="space-y-2 text-sm sm:text-base mt-2">
                {["Music & Concerts", "Technology", "Food & Drink", "Adventure", "Arts & Culture"].map((cat, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 mx-auto text-left sm:text-left" style={{ maxWidth: "300px" }}>
            <h3 className="text-lg sm:text-xl font-semibold text-center sm:text-left">Contact Us</h3>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-indigo-400 mt-0.5" />
                <span>management@eventsphere.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-indigo-400 mt-0.5" />
                <span>+92 (51) 123-4567</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-indigo-400 mt-0.5" />
                <span>123 Event Street, Islamabad, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-sm text-center">
          <p className="text-gray-400">&copy; 2025 EventSphere. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, i) => (
              <a key={i} href="#" className="text-gray-400 hover:text-white transition duration-200">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
