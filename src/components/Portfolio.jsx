import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  { 
    title: 'Stage and Screen', 
    category: 'Corporate / B2B Travel Services', 
    img: '/project1.png',
    link: 'https://stageandscreen.travel/'
  },
  { 
    title: 'Legal Rights For Youths', 
    category: 'Educational / Legal Information Portal', 
    img: '/project2.png',
    link: 'https://legalrightsforyouth.ca/'
  },
  { 
    title: 'Kids Familieschange', 
    category: 'Educational / Child Support & Emotional Guidance', 
    img: '/project3.png',
    link: 'https://kids.familieschange.ca/'
  },
  { 
    title: 'Hybrid Battery 911', 
    category: 'Service-Based / Automotive Repair', 
    img: '/project4.png',
    link: 'https://www.hybridbattery911.com/'
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-2">Portfolio</h2>
      <p className="text-gray-400 mb-12">Some of My Recent Work</p>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-16"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="bg-cardBg rounded-xl overflow-hidden shadow-lg border border-gray-800 text-left h-full hover:scale-105 transition">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-60 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {project.category}
                  </p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;