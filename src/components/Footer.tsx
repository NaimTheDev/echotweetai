import React from 'react';
import { TwitterIcon, LinkedinIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-teal-500">
              EchoTweet<span className="text-gray-800">AI</span>
            </a>
            <p className="text-gray-600 mt-2">Tweet like an influencer</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
            <a href="#features" className="text-gray-600 hover:text-teal-500 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-teal-500 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-teal-500 transition-colors">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
              Privacy
            </a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-teal-500 transition-colors">
              <TwitterIcon size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-500 transition-colors">
              <LinkedinIcon size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 EchoTweet AI. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};