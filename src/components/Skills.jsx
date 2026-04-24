import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { BsFiletypeHtml, BsFiletypeCss, BsBraces, BsCodeSlash } from 'react-icons/bs';
import { FaReact, FaWordpress, FaDrupal, FaPhp } from 'react-icons/fa';
import { SiMysql, SiSanity, SiStrapi } from 'react-icons/si';

const skillsData = [
  { name: 'Drupal', icon: <FaDrupal size={40} className="text-blue-700" /> },
  { name: 'HTML', icon: <BsFiletypeHtml size={40} className="text-orange-500" /> },
  { name: 'CSS', icon: <BsFiletypeCss size={40} className="text-blue-500" /> },
  { name: 'JavaScript', icon: <BsBraces size={40} className="text-yellow-400" /> },
  { name: 'Sanity', icon: <SiSanity size={40} className="text-red-500" /> },
  { name: 'React', icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: 'Tailwind', icon: <BsCodeSlash size={40} className="text-teal-400" /> },  
  { name: 'WordPress', icon: <FaWordpress size={40} className="text-blue-600" /> },
  { name: 'PHP', icon: <FaPhp size={40} className="text-indigo-500" /> },
  { name: 'MySQL', icon: <SiMysql size={40} className="text-blue-400" /> },  
  { name: 'Strapi', icon: <SiStrapi size={40} className="text-purple-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-darkBg px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-2">My Skills</h2>
      <p className="text-gray-400 mb-12">What I Can Do</p>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="pb-12"
      >
        {skillsData.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="bg-cardBg py-8 px-4 rounded-xl flex flex-col items-center justify-center shadow-lg border border-gray-800 hover:border-primary transition duration-300">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-white font-medium">{skill.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Skills;