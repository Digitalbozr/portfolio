import {} from 'react';

import { Experiences } from '../constants/index.js';
import { Educations } from '../constants/index.js';
import { motion } from "framer-motion";

const WorkExperience = () => {

  return (
    <section className="c-space my-20" id="Exducation">
      <div className="w-full text-white-600">
        <p className="head-text">Edication & Experience</p>

        <div className="flex flex-col lg:flex-row gap-5 mt-12">

          <div className=" rounded-lg bg-black-200 border border-black-300">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              
              {Educations.map((item, index) => (
                <motion.div
                initial={{opacity: 0 , y:-40}}
                whileInView={{opacity: 1, y:0}}
                transition={{duration:0.5 , }}
                  key={index}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo ">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.place}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className=" rounded-lg bg-black-200 border border-black-300">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {Experiences.map((item, index) => (
                <motion.div
                  initial={{opacity: 0 , y:-40}}
                  whileInView={{opacity: 1, y:0}}
                  transition={{duration:0.4 , }}
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo ">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos}  <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
