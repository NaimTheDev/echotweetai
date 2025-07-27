import React from 'react';
import { CheckIcon } from 'lucide-react';
export const PricingTeaser = () => {
  return <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Started Today for Free
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No credit card required. Upgrade when you're ready.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="flex-1 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 border border-gray-100 animate-on-scroll opacity-0 transition-opacity duration-1000">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Free Beta</h3>
              <p className="text-gray-600">
                Perfect for trying out EchoTweet AI
              </p>
            </div>
            <div className="mb-8">
              <div className="text-4xl font-bold mb-2">$0</div>
              <p className="text-gray-600">Forever</p>
            </div>
            <div className="mb-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon size={20} className="text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>5 AI-generated tweets per week</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={20} className="text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Basic influencer analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={20} className="text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Standard editing tools</span>
                </li>
              </ul>
            </div>
            <a href="#get-started" className="block w-full text-center bg-white border border-teal-500 text-teal-500 py-3 rounded-md hover:bg-teal-50 transition-colors">
              Join the Beta
            </a>
          </div>
          {/* Pro Plan */}
          <div className="flex-1 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 text-white relative animate-on-scroll opacity-0 transition-opacity duration-1000 delay-200">
            <div className="absolute -top-4 right-8 bg-yellow-400 text-yellow-800 text-sm font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
              <p className="text-teal-100">For serious content creators</p>
            </div>
            <div className="mb-8">
              <div className="text-4xl font-bold mb-2">$9</div>
              <p className="text-teal-100">per month</p>
            </div>
            <div className="mb-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon size={20} className="text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span>Unlimited AI-generated tweets</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={20} className="text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span>Advanced influencer voice analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={20} className="text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span>Premium editing & formatting tools</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={20} className="text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span>Save unlimited tweet templates</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={20} className="text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
            <a href="#get-started" className="block w-full text-center bg-white text-teal-600 py-3 rounded-md hover:bg-gray-100 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>;
};