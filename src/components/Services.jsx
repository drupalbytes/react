// Services.jsx
import React from 'react';
// Import icons from a library like lucide-react or react-icons
import { Layout, Server, Cloud, BarChart } from 'lucide-react';

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful digital experiences.",
    icon: <Layout size={40} className="text-purple-500" />
  },
  {
    title: "API Integration",
    description: "Connecting your frontend to robust backend services.",
    icon: <Server size={40} className="text-blue-500" />
  },
  {
    title: "Frontend Development",
    description: "Building fast, responsive, and scalable web applications using modern frameworks.",
    icon: <Cloud size={40} className="text-green-500" />
  },
  {
    title: "Performance Optimization",
    description: "Improving load times, SEO, and overall application performance for better user experience.",
    icon: <BarChart size={40} className="text-red-500" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-10">
      <div className="container py-10 bg-darkBg px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Services</h2>
        <p className="text-gray-400 mb-12">What I Can Do For You</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-cardBg p-8 rounded-2xl border border-white/10 hover:border-purple-500 transition-all duration-300">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;