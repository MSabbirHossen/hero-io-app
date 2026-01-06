import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              🦸‍♂️ Hero IO
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Discover amazing apps and games for your mobile device. Your ultimate destination for app discovery.
            </p>
            <div className="flex gap-4">
              {[
                { icon: "f", label: "Facebook" },
                { icon: "𝕏", label: "Twitter" },
                { icon: "📷", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title={social.label}
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {["App Discovery", "Reviews & Ratings", "Download Guide", "App Support"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Contact", "Blog", "Careers"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              {["Terms of Use", "Privacy Policy", "Cookie Policy", "Disclaimer"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; {currentYear} Hero IO. All rights reserved.</p>
          <p className="text-sm mt-4 md:mt-0">
            Made with <span className="text-red-500">❤️</span> for app lovers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
