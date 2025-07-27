import React, { useEffect, useState } from "react";
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-teal-500">
              EchoTweet<span className="text-gray-800">AI</span>
            </span>
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="text-gray-600 hover:text-teal-500 transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-teal-500 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-teal-500 transition-colors"
          >
            Pricing
          </a>
        </nav>
        <div>
          <a
            href="#get-started"
            className="hidden md:inline-block bg-teal-500 text-white px-5 py-2 rounded-md hover:bg-teal-600 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};
