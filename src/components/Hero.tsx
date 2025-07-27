import React from 'react';
import { EmailForm } from './EmailForm';
export const Hero = () => {
  return <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 animate-on-scroll opacity-0 transition-opacity duration-1000">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tweet Like an <span className="text-teal-500">Influencer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our AI tweet generator analyzes any X account or persona. Just add
              your topic and instantly get posts written in their unique voice
              and style.
            </p>
            <div id="get-started">
              <EmailForm />
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <svg className="w-5 h-5 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No credit card required • Free to get started
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate-on-scroll opacity-0 transition-opacity duration-1000 delay-300">
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl p-1 shadow-xl">
                <div className="bg-white rounded-xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1000" alt="EchoTweet AI interface showing tweet generation in the style of a tech influencer" className="w-full h-auto" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-3 max-w-[200px]">
                <div className="text-sm font-medium">
                  <span className="text-teal-500">5 unique tweets</span>{' '}
                  generated in seconds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};