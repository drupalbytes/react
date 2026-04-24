import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    role: "Founder, TechFlow",
    content: "Smith is an absolute professional. He took our complex requirements and turned them into a seamless, high-performing web application.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Mike C.",
    role: "CTO, NextGen Systems",
    content: "His expertise in React helped us scale our platform 3x faster than expected. Highly recommended for any serious project.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Amanda R.",
    role: "Digital Director, BrightSpark Agency",
    content: "Smith migrated our entire legacy site to Drupal flawlessly. The performance improvements were immediate and the content team loves the new admin experience.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "David L.",
    role: "CEO, CreativeHub",
    content: "We needed a complex WordPress multisite setup and Smith delivered beyond expectations. Clean code, great documentation, and zero downtime during launch.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5
  },
  {
    id: 5,
    name: "Priya M.",
    role: "Product Manager, StudioX",
    content: "Smith set up our Sanity CMS and built a fully custom studio experience for our editors. The structured content approach has transformed how our team works.",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 5
  },
  {
    id: 6,
    name: "Chris B.",
    role: "CTO, LaunchPad Inc.",
    content: "Smith built our entire backend API with Strapi in record time. The flexibility of the content types and role-based permissions saved us months of custom development.",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 5
  },
  {
    id: 7,
    name: "Lisa T.",
    role: "Founder, GrowthLoop",
    content: "Our MERN stack application went from concept to production in just 6 weeks. Smith's full-stack expertise meant seamless communication between frontend and backend throughout.",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Testimonials</h2>
          <p className="text-gray-400">What My Clients Say</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon Background */}
          <div className="absolute -top-10 -left-10 text-white/5">
            <Quote size={120} />
          </div>

          {/* Testimonial Card */}
          <div className="bg-cardBg border border-white/10 p-8 md:p-12 rounded-3xl relative z-10 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-gray-300 italic mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-14 h-14 rounded-full border-2 border-purple-500"
                />
                <div className="text-left">
                  <h4 className="text-white font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-purple-400 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-[#1a1a3a] border border-white/10 text-white hover:bg-purple-600 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-[#1a1a3a] border border-white/10 text-white hover:bg-purple-600 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;