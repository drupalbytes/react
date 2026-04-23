import { BsPersonFill, BsBriefcaseFill, BsCheckCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
        <p className="text-gray-400">Let me introduce myself.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate web developer with experience in building highly interactive and responsive websites. I love to code and create amazing web experiences.
          </p>
        </div>
        
        <div className="lg:w-1/2 flex flex-col sm:flex-row gap-6 justify-between">
          <div className="flex items-center gap-4 bg-cardBg p-4 rounded-lg flex-1">
            <BsPersonFill className="text-primary text-4xl" />
            <div>
              <h4 className="text-2xl font-bold text-white">5+</h4>
              <p className="text-xs text-gray-400 uppercase">Years Experience</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-cardBg p-4 rounded-lg flex-1">
            <BsBriefcaseFill className="text-primary text-4xl" />
            <div>
              <h4 className="text-2xl font-bold text-white">50+</h4>
              <p className="text-xs text-gray-400 uppercase">Projects Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-cardBg p-4 rounded-lg flex-1">
            <BsCheckCircleFill className="text-primary text-4xl" />
            <div>
              <h4 className="text-2xl font-bold text-white">100%</h4>
              <p className="text-xs text-gray-400 uppercase">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;