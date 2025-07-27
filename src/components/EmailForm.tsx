import React, { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
export const EmailForm = ({
  className = '',
  buttonText = 'Get Free AI Tweets'
}) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const validateEmail = (email: string) => {
    return email.includes('@') && email.includes('.');
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsValid(true);
      setSubmitted(true);
      // Here you would normally send the email to your backend
      console.log('Email submitted:', email);
    } else {
      setIsValid(false);
    }
  };
  return <div className={className}>
      {!submitted ? <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <div className="flex-grow">
            <input type="email" placeholder="Your email address" value={email} onChange={e => {
          setEmail(e.target.value);
          if (!isValid) setIsValid(true);
        }} className={`w-full px-4 py-3 rounded-md border ${isValid ? 'border-gray-300' : 'border-red-500'} focus:outline-none focus:ring-2 focus:ring-teal-500`} required />
            {!isValid && <p className="text-red-500 text-sm mt-1">
                Please enter a valid email address
              </p>}
          </div>
          <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-md transition-colors flex items-center justify-center whitespace-nowrap">
            {buttonText} <ArrowRightIcon size={18} className="ml-2" />
          </button>
        </form> : <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
          Thanks! We'll send your free AI tweets shortly.
        </div>}
    </div>;
};