import React from 'react';
import { UserSearchIcon, MessageCircleIcon, SendIcon } from 'lucide-react';
export const HowItWorks = () => {
  const steps = [{
    icon: <UserSearchIcon size={32} className="text-teal-500" />,
    title: 'Choose Your Influencer',
    description: 'Pick any public X profile or describe a persona you want to emulate.'
  }, {
    icon: <MessageCircleIcon size={32} className="text-teal-500" />,
    title: 'Provide Your Topic',
    description: 'Tell our AI what you want to tweet about for the day or week.'
  }, {
    icon: <SendIcon size={32} className="text-teal-500" />,
    title: 'Generate & Perfect Your Tweet',
    description: 'Receive AI-generated drafts in their voice. Edit, copy, and post.'
  }];
  return <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How to Tweet Like an Influencer in 3 Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From idea to perfect tweet in less than a minute
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-teal-100 z-0"></div>
          {steps.map((step, index) => <div key={index} className="flex-1 relative z-10 animate-on-scroll opacity-0 transition-opacity duration-1000" style={{
          transitionDelay: `${index * 200}ms`
        }}>
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {step.icon}
                </div>
                <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};