import React from 'react';
import { UserIcon, MessageSquareTextIcon, EditIcon, BookmarkIcon } from 'lucide-react';
export const Features = () => {
  const features = [{
    icon: <UserIcon size={28} className="text-teal-500" />,
    title: 'Infinite Persona Engine',
    description: 'Mimic any public X handle, hashtag, or writing style.'
  }, {
    icon: <MessageSquareTextIcon size={28} className="text-teal-500" />,
    title: 'Effortless Topic Guidance',
    description: 'Just describe your theme. Our AI handles the creative heavy lifting.'
  }, {
    icon: <EditIcon size={28} className="text-teal-500" />,
    title: 'AI-Generated Drafts',
    description: 'Get 5 unique, editable tweets in seconds, complete with emojis & formatting.'
  }, {
    icon: <BookmarkIcon size={28} className="text-teal-500" />,
    title: 'Refine & Re-use',
    description: 'Tweak drafts directly, save your favorites, and build a library of proven posts.'
  }];
  return <section id="features" className="py-20 bg-gray-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            An AI Tweet Generator That Learns Their Style
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Craft compelling tweets that capture your favorite influencer's
            unique voice
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-on-scroll opacity-0 transition-opacity duration-1000" style={{
          transitionDelay: `${index * 150}ms`
        }}>
              <div className="bg-teal-50 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};