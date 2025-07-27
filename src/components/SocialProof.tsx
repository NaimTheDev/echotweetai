import React from 'react';
import { StarIcon } from 'lucide-react';
export const SocialProof = () => {
  return <section className="py-20 bg-gray-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop Guessing, Start Influencing
          </h2>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 animate-on-scroll opacity-0 transition-opacity duration-1000">
          <div className="flex flex-col items-center">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => <StarIcon key={i} size={24} className="text-yellow-400 fill-current" />)}
            </div>
            <blockquote className="text-xl md:text-2xl text-center text-gray-700 italic mb-6">
              "EchoTweet AI is the only AI tweet generator I've found that
              actually nails the influencer voice. It's transformed my social
              strategy."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Sam L. profile picture" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold">Sam L.</p>
                <p className="text-gray-600 text-sm">Indie Hacker</p>
              </div>
            </div>
          </div>
        </div>
        <div className="animate-on-scroll opacity-0 transition-opacity duration-1000">
          <p className="text-center text-gray-600 mb-8">
            Trusted by forward-thinking creators and marketers
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {[...Array(5)].map((_, i) => <div key={i} className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">LOGO</span>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};