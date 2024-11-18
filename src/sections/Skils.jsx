import React , {useState} from 'react';
import { FaHtml5 ,FaCss3Alt , FaJs , FaNodeJs , FaReact ,FaBootstrap , FaPython ,FaRaspberryPi ,FaPhp  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress , SiFramer ,SiMqtt ,SiCplusplus,SiMicropython , SiMysql , SiMongodb ,SiAdobephotoshop ,SiAdobeillustrator ,SiAdobeaftereffects ,SiArduino ,SiProteus  , SiKicad ,SiEasyeda ,SiNodered, SiAdobepremierepro, SiTailwindcss, SiPhp   } from "react-icons/si";
import { BiLogoBlender } from "react-icons/bi";
import { MdHttp } from "react-icons/md";
import { TbBrandThreejs } from "react-icons/tb";
import { motion } from "framer-motion";

import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



// Animation
// import { easeQuadInOut } from "d3-ease";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
// import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators

const percentage = 66;


    export default function Skils() {
      const [cskils, setcskils] = useState('all') ;

    function AllClick(){
      setcskils("all");

      document.getElementById("all").classList.add("bg-gray-700/60");
      document.getElementById("all").classList.remove("bg-gray-700/30");
      document.getElementById("web").classList.remove("bg-gray-700/60");
      document.getElementById("embedded").classList.remove("bg-gray-700/60");
      document.getElementById("design").classList.remove("bg-gray-700/60");

      document.getElementById("page_all").classList.add("flex");
      document.getElementById("page_dev").classList.add("hidden");
      document.getElementById("page_elec").classList.add("hidden");
      document.getElementById("page_des").classList.add("hidden");
      
      document.getElementById("page_all").classList.remove("hidden");
      document.getElementById("page_dev").classList.remove("flex");
      document.getElementById("page_elec").classList.remove("flex");
      document.getElementById("page_des").classList.remove("flex");


    }
    function EmbeddedClick(){
      setcskils("embedded");
      document.getElementById("embedded").classList.add("bg-gray-700/60");
      document.getElementById("embedded").classList.remove("bg-gray-700/30");
      document.getElementById("web").classList.remove("bg-gray-700/60");
      document.getElementById("all").classList.remove("bg-gray-700/60");
      document.getElementById("design").classList.remove("bg-gray-700/60");

      document.getElementById("page_all").classList.add("hidden");
      document.getElementById("page_dev").classList.add("hidden");
      document.getElementById("page_elec").classList.add("flex");
      document.getElementById("page_des").classList.add("hidden");
      
      document.getElementById("page_all").classList.remove("flex");
      document.getElementById("page_dev").classList.remove("flex");
      document.getElementById("page_elec").classList.remove("hidden");
      document.getElementById("page_des").classList.remove("flex");
    }
    function WebClick(){
      setcskils("web");
      document.getElementById("web").classList.add("bg-gray-700/60");
      document.getElementById("web").classList.remove("bg-gray-700/30");
      document.getElementById("embedded").classList.remove("bg-gray-700/60");
      document.getElementById("all").classList.remove("bg-gray-700/60");
      document.getElementById("design").classList.remove("bg-gray-700/60");

      document.getElementById("page_all").classList.add("hidden");
      document.getElementById("page_dev").classList.add("flex");
      document.getElementById("page_elec").classList.add("hidden");
      document.getElementById("page_des").classList.add("hidden");
      
      document.getElementById("page_all").classList.remove("flex");
      document.getElementById("page_dev").classList.remove("hidden");
      document.getElementById("page_elec").classList.remove("flex");
      document.getElementById("page_des").classList.remove("flex");

  
    }
    function DesignClick(){
      setcskils("design");
      document.getElementById("design").classList.add("bg-gray-700/60");
      document.getElementById("design").classList.remove("bg-gray-700/30");
      document.getElementById("web").classList.remove("bg-gray-700/60");
      document.getElementById("all").classList.remove("bg-gray-700/60");
      document.getElementById("embedded").classList.remove("bg-gray-700/60");

      document.getElementById("page_all").classList.add("hidden");
      document.getElementById("page_dev").classList.add("hidden");
      document.getElementById("page_elec").classList.add("hidden");
      document.getElementById("page_des").classList.add("flex");
      
      document.getElementById("page_all").classList.remove("flex");
      document.getElementById("page_dev").classList.remove("flex");
      document.getElementById("page_elec").classList.remove("flex");
      document.getElementById("page_des").classList.remove("hidden");
    }
    console.log(cskils);

    return (
      <section className="c-space my-20" id="Skils">
        <div className="w-full text-white-600">
            <p className="head-text">My Skils</p>

            <div className="flex justify-center rounded-md shadow-sm mt-12 mb-4  ">

              <button
                aria-current="page"
                onClick={AllClick}
                id='all'
                className="px-4 py-2 text-xs sm:text-sm font-medium   border  rounded-s-lg focus:z-10  bg-gray-700/60 border-gray-700 text-white hover:text-white hover:bg-gray-700/60  backdrop-blur-sm "
                
              >
                ALL
              </button>
              <button
                onClick={EmbeddedClick}
                id='embedded'
                className="px-4 py-2 text-xs sm:text-sm font-medium   border   focus:z-10  bg-gray-700/30 border-gray-700 text-white hover:text-white hover:bg-gray-700/60  backdrop-blur-sm "
              >
                Embedded systems
              </button>
              <button
                onClick={WebClick}
                id='web'
                className="px-4 py-2 text-xs sm:text-sm font-medium   border   focus:z-10  bg-gray-700/30 border-gray-700 text-white hover:text-white hover:bg-gray-700/60  backdrop-blur-sm "
              >
                Web Development
              </button>
              <button
                onClick={DesignClick}
                id='design'
                className="px-4 py-2 text-xs sm:text-sm font-medium   border  rounded-e-lg focus:z-10  bg-gray-700/30 border-gray-700 text-white hover:text-white hover:bg-gray-700/60  backdrop-blur-sm "
              >
                2D & 3D design
              </button>

            </div>

            {/* ---------------------------------------------- ALL -------------------------------------------------- */}
            <div
            id='page_all'
            className='w-full flex flex-wrap items-stretch bg-black/20 rounded-md border border-slate-400/20 shadow-sm shadow-slate-200/50 p-4 '
            
            >
                <div
                className='w-full lg:w-2/3 flex rounded-md flex-col'
                >
                    <div
                    className='w-full justify-around flex flex-col md:flex-row gap-2'
                    >
                        <motion.div
                          initial={{opacity: 0 ,}}
                          whileInView={{opacity: 1,}}
                          transition={{duration:1.4 , }}
                        className='w-full md:w-[32.7%] h-60 rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 ' 
                        >
                            <div 
                            className='p-4 w-48 m-auto  ' label="Progressbar with separators"
                            >
                                <CircularProgressbarWithChildren 
                                    value={85}
                                    text={"85"}
                                    strokeWidth={15}
                                    styles={buildStyles({
                                    pathColor: "#f59e0b",
                                    textColor: "#f59e0b",
                                    trailColor: "transparent",
                                    })}
                                >
                                    
                                </CircularProgressbarWithChildren>
                                </div>
                                <div className='text-center text-slate-200 text-lg bg-slate-100/10 py-2'>
                                    Embedded systems
                                </div>
                        </motion.div>    

                        <motion.div
                          initial={{opacity: 0 , }}
                          whileInView={{opacity: 1,}}
                          transition={{duration:1.4 , }}
                        className='w-full md:w-[32.7%] h-60 rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 ' 
                        >
                            <div 
                            className='p-4 w-48 m-auto  ' label="Progressbar with separators"
                            >
                                <CircularProgressbarWithChildren 
                                    value={70}
                                    text={"70"}
                                    strokeWidth={15}
                                    styles={buildStyles({
                                    pathColor: "#f59e0b",
                                    textColor: "#f59e0b",
                                    trailColor: "transparent",
                                    })}
                                >
                                    
                                </CircularProgressbarWithChildren>
                                </div>
                                <div className='text-center text-slate-200 text-lg bg-slate-100/10 py-2'>
                                  Web development
                                </div>
                        </motion.div>    
            
                        <motion.div
                          initial={{opacity: 0 , }}
                          whileInView={{opacity: 1,}}
                          transition={{duration:1.4 , }}
                        className='w-full md:w-[32.7%] h-60 rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 ' 
                        >
                            <div 
                            className='p-4 w-48 m-auto  ' label="Progressbar with separators"
                            >
                                <CircularProgressbarWithChildren 
                                    value={75}
                                    text={"75"}
                                    strokeWidth={15}
                                    styles={buildStyles({
                                    pathColor: "#f59e0b",
                                    textColor: "#f59e0b",
                                    trailColor: "transparent",
                                    })}
                                >
                                    
                                </CircularProgressbarWithChildren>
                                </div>
                                <div className='text-center text-slate-200 text-lg bg-slate-100/10 py-2'>
                                    Design 2D & 3D
                                </div>
                        </motion.div>    
                    </div>
                </div>

                <motion.div
                initial={{opacity: 0 , }}
                          whileInView={{opacity: 1,}}
                          transition={{duration:1.4 , }}
                className='w-full lg:w-1/3 '
                >
                
                    <ul className='text-slate-400 p-4 h-60 overflow-scroll rounded-md bg-slate-300/10 lg:ml-2 lg:mt-0 ml-0 mt-2 border border-slate-400/40'>
                    {/* <li className='pb-1 '><span className='text-xl pr-2'>#</span>Designing and developing electronic circuits.</li> */}
                    <li className='pb-1 '><span className='text-xl pr-2'>#</span>Building embedded systems.</li>
                    <li className='pb-1 '><span className='text-xl pr-2'>#</span>Developing IoT projects.</li>
                    <li className='pb-1  '><span className='text-xl pr-2'>#</span>ROS "robotic systems operating".</li>
                    <li className='pb-1  '><span className='text-xl pr-2'>#</span>Artificielle Intelligence</li>
                    <li className='pb-1  '><span className='text-xl pr-2'>#</span>Creating 3D models</li>
                    {/* <li className='pb-1  '><span className='text-xl pr-2'>#</span>Creating interactive frontend interfaces and efficient backend systems.</li> */}
                    <li className='pb-1  '><span className='text-xl pr-2'>#</span>Building App mobile using React Native.</li>
                    <li className='pb-1  '><span className='text-xl pr-2'>#</span>programming control systems PLC "S7".</li>
                    </ul>

                </motion.div>
                
                <motion.div
                  initial={{opacity: 0 , }}
                  whileInView={{opacity: 1,}}
                  transition={{duration:1.4 , }}
                className='w-full my-2 p-2 justify-center flex  flex-wrap rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 '
                >
                      <div className='text-4xl p-1 text-slate-500'>
                        <FaJs/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <FaCss3Alt/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <FaHtml5/>
                      </div>

                      {/* ------------------------------------------- */}
                      <div className='text-4xl p-1 text-slate-500'>
                        <FaNodeJs/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <FaReact/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiExpress/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <TbBrandThreejs/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <FaBootstrap/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <RiTailwindCssFill/>
                      </div>
                      {/* ------------------------------------------- */}
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiMysql/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiMongodb/>
                      </div>
                      {/* ------------------------------------------- */}
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiCplusplus/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <FaPhp/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <FaPython/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiMicropython/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <MdHttp/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiMqtt/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <FaRaspberryPi/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiArduino/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiAdobephotoshop/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiAdobeillustrator/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiAdobeaftereffects/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <BiLogoBlender/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiProteus/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiKicad/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiEasyeda/>
                      </div>

                </motion.div>

            </div>

            {/* ---------------------------------------------- electronic -------------------------------------------------- */}
            <div
            id='page_elec'
            className='w-full hidden flex-wrap items-stretch bg-black/20 rounded-md border border-slate-400/20 shadow-sm shadow-slate-200/50 p-4 '
            >
                <div
                className='w-full flex rounded-md flex-col'
                >
                    <div
                    className='w-full flex flex-col md:flex-row gap-2'
                    >
                        <motion.div
                          initial={{opacity: 0 , }}
                          whileInView={{opacity: 1, }}
                          transition={{duration:1.4 , }}
                        className='w-full md:w-1/4 h-60 rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 ' 
                        >
                            <div 
                            className='p-4 w-48 m-auto  ' label="Progressbar with separators"
                            >
                                <CircularProgressbarWithChildren 
                                    value={85}
                                    text={"85"}
                                    strokeWidth={15}
                                    styles={buildStyles({
                                    pathColor: "#f59e0b",
                                    textColor: "#f59e0b",
                                    trailColor: "transparent",
                                    })}
                                >
                                    
                                </CircularProgressbarWithChildren>
                            </div>
                                <div className='text-center text-slate-200 text-lg bg-slate-100/10 py-2'>
                                    C++
                                </div>
                        </motion.div>    

                        <motion.div
                          initial={{opacity: 0 , }}
                          whileInView={{opacity: 1, }}
                          transition={{duration:1.4 , }}
                        className='w-full md:w-1/4 h-60 rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 ' 
                        >
                            <div 
                            className='p-4 w-48 m-auto  ' label="Progressbar with separators"
                            >
                                <CircularProgressbarWithChildren 
                                    value={85}
                                    text={"85"}
                                    strokeWidth={15}
                                    styles={buildStyles({
                                    pathColor: "#f59e0b",
                                    textColor: "#f59e0b",
                                    trailColor: "transparent",
                                    })}
                                >
                                    
                                </CircularProgressbarWithChildren>
                                </div>
                                <div className='text-center text-slate-200 text-lg bg-slate-100/10 py-2'>
                                    Python
                                </div>
                        </motion.div>    
          
                        <motion.div
                          initial={{opacity: 0 , }}
                          whileInView={{opacity: 1, }}
                          transition={{duration:1.4 , }}
                        className='  text-slate-400 w-full md:w-2/4 h-60 p-4 rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 overflow-scroll ' 
                        >
                          <div className='py-2 '>
                          Basic electronic
                          </div>
                          <div className='py-2 '>
                          PCB Design  : "Kicad","EasyIDE","proteus"
                          </div>
                          <div className='py-2 '>
                          pysical protocols : UART , SPI , I2C , RS485 
                          </div>
                          <div className='py-2 '>
                          werlles protocols : WIFI , LORA , Bluetooth
                          </div>
                          <div className='py-2 '>
                          programming of various types of microcontrols : atmega , PIC , ESP32 , STM32 , attiny ...
                          </div>
                          <div className='py-2 '>
                            HTTP , MQTT
                          </div>
                          <div className='py-2 '>
                            Basic electronic
                          </div>
                          <div className='py-2 '>
                            Testing and Debugging Circuit
                          </div>
                          <div className='py-2 '>
                            Welding electronic components
                          </div>
                        </motion.div>
                    </div>
                </div>
                
                <motion.div
                  initial={{opacity: 0 , }}
                  whileInView={{opacity: 1,}}
                  transition={{duration:1.4 , }}
                className='w-full my-2 p-2 justify-center flex  flex-wrap rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 '
                >


                      {/* ------------------------------------------- */}
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiCplusplus/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <FaPython/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiMicropython/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <MdHttp/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiMqtt/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <FaRaspberryPi/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiArduino/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiProteus/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiKicad/>
                      </div>
                      <div className='text-4xl p-1 text-slate-500'>
                        <SiEasyeda/>
                      </div>

                </motion.div>

            </div>

            {/* ---------------------------------------------- web dev -------------------------------------------------- */}
            <div
            id='page_dev'
            className='w-full hidden flex-wrap items-stretch bg-black/20 rounded-md border border-slate-400/20 shadow-sm shadow-slate-200/50 p-4 '
            >
                <div
                className='w-full flex rounded-md flex-col'
                >
                    <div
                    className='w-full flex flex-col md:flex-row gap-2'
                    >
                        <motion.div
                          initial={{opacity: 0 , }}
                          whileInView={{opacity: 1,}}
                          transition={{duration:1.4 , }}
                        className='w-full lg:w-1/4 h-60 rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 ' 
                        >
                            <div 
                            className='p-4 w-48 m-auto  ' label="Progressbar with separators"
                            >
                                <CircularProgressbarWithChildren 
                                    value={75}
                                    text={"75"}
                                    strokeWidth={15}
                                    styles={buildStyles({
                                    pathColor: "#f59e0b",
                                    textColor: "#f59e0b",
                                    trailColor: "transparent",
                                    })}
                                >
                                    
                                </CircularProgressbarWithChildren>
                                </div>
                                <div className='text-center text-slate-200 text-lg bg-slate-100/10 py-2'>
                                    FrontEnd
                                </div>
                        </motion.div>    

                        <motion.div
                          initial={{opacity: 0 , }}
                          whileInView={{opacity: 1, }}
                          transition={{duration:1.4 , }}
                        
                        className='w-full lg:w-1/4 h-60 rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 ' 
                        >
                            <div 
                            className='p-4 w-48 m-auto  ' label="Progressbar with separators"
                            >
                                <CircularProgressbarWithChildren 
                                    value={65}
                                    text={"65"}
                                    strokeWidth={15}
                                    styles={buildStyles({
                                    pathColor: "#f59e0b",
                                    textColor: "#f59e0b",
                                    trailColor: "transparent",
                                    })}
                                >
                                    
                                </CircularProgressbarWithChildren>
                                </div>
                                <div className='text-center text-slate-200 text-lg bg-slate-100/10 py-2'>
                                    Backend
                                </div>
                        </motion.div>    
                        <div className='w-full md:w-2/4 overflow-y-scroll h-60'>
                        <div
                        className='  text-slate-400 w-full   backdrop-blur-sm ' 
                        >

                          <div>
                            Frontend
                          </div>
                          <motion.div
                          initial={{opacity: 0 ,}}
                          whileInView={{opacity: 1,}}
                          transition={{duration:1.4 , }}
                          className='w-full   p-2  flex  flex-wrap rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 '
                          >


                                {/* ------------------------------------------- */}

                                      
                                      <div className='text-4xl p-1 text-slate-500'>
                                       < FaHtml5/>
                                      </div>
                                      <div className='text-4xl p-1 text-slate-500'>
                                      < FaCss3Alt/>
                                      </div>
                                      <div className='text-4xl p-1 text-slate-500'>
                                      < FaJs/>
                                      </div>
                                      <div className='text-4xl p-1 text-slate-500'>
                                        <FaBootstrap/>
                                      </div>
                                      <div className='text-4xl p-1 text-slate-500'>
                                        <SiTailwindcss/>
                                      </div>



                          </motion.div>
                        </div>
                        <div
                        className='  text-slate-400 w-full    backdrop-blur-sm' 
                        >

                          <div>
                            Backend
                          </div>
                          <motion.div
                          initial={{opacity: 0 , }}
                          whileInView={{opacity: 1,}}
                          transition={{duration:1.4 , }}
                          className='w-full  p-2  flex  flex-wrap rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 '
                          >


                                {/* ------------------------------------------- */}

                                      <div className='text-4xl p-1 text-slate-500'>
                                        <FaPython/>
                                      </div>
                                      <div className='text-4xl p-1 text-slate-500'>
                                        <FaNodeJs/>
                                      </div>
                                      <div className='text-4xl p-1 text-slate-500'>
                                        <SiExpress/>
                                      </div>
                                      <div className='text-4xl p-1 text-slate-500'>
                                        <SiPhp/>
                                      </div>



                          </motion.div>
                        </div>
                        <div
                        className='  text-slate-400 w-full  backdrop-blur-sm' 
                        >

                          <div>
                            Database
                          </div>
                          <motion.div
                          initial={{opacity: 0 , }}
                          whileInView={{opacity: 1, }}
                          transition={{duration:1.4 , }}
                          className='w-full  p-2  flex  flex-wrap rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 '
                          >


                                {/* ------------------------------------------- */}

                                      
                                      <div className='text-4xl p-1 text-slate-500'>
                                        <SiMongodb/>
                                      </div>
                                      <div className='text-4xl p-1 text-slate-500'>
                                        <SiMysql/>
                                      </div>
                          </motion.div>
                        </div>
                        </div>

                    </div>
                </div>
                
            </div>

            {/* ---------------------------------------------- desifn -------------------------------------------------- */}
            <div
            id='page_des'
            className='w-full hidden flex-wrap items-stretch bg-black/20 rounded-md border border-slate-400/20 shadow-sm shadow-slate-200/50 p-4 '
            >
                <div
                className='w-full flex rounded-md flex-col'
                >
                    <div
                    className='w-full flex flex-col md:flex-row gap-2'
                    >
                        <motion.div
                          initial={{opacity: 0 ,}}
                          whileInView={{opacity: 1,}}
                          transition={{duration:1.4 , }}
                        className='w-full md:w-1/4 h-60 rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 ' 
                        >
                            <div 
                            className='p-4 w-48 m-auto  ' label="Progressbar with separators"
                            >
                                <CircularProgressbarWithChildren 
                                    value={85}
                                    text={"85"}
                                    strokeWidth={15}
                                    styles={buildStyles({
                                    pathColor: "#f59e0b",
                                    textColor: "#f59e0b",
                                    trailColor: "transparent",
                                    })}
                                >
                                    
                                </CircularProgressbarWithChildren>
                                </div>
                                <div className='text-center text-slate-200 text-lg bg-slate-100/10 py-2'>
                                    Design 2D 
                                </div>
                        </motion.div>    

                        <motion.div
                          initial={{opacity: 0 ,}}
                          whileInView={{opacity: 1,}}
                          transition={{duration:1.4 , }}
                        className='w-full md:w-1/4 h-60 rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 ' 
                        >
                            <div 
                            className='p-4 w-48 m-auto  ' label="Progressbar with separators"
                            >
                                <CircularProgressbarWithChildren 
                                    value={85}
                                    text={"85"}
                                    strokeWidth={15}
                                    styles={buildStyles({
                                    pathColor: "#f59e0b",
                                    textColor: "#f59e0b",
                                    trailColor: "transparent",
                                    })}
                                >
                                    
                                </CircularProgressbarWithChildren>
                                </div>
                                <div className='text-center text-slate-200 text-lg bg-slate-100/10 py-2'>
                                    Design 3D 
                                </div>
                        </motion.div>    
          
                        <motion.div
                          initial={{opacity: 0 ,}}
                          whileInView={{opacity: 1,}}
                          transition={{duration:1.4 , }}
                        className='  text-slate-400 w-full md:w-2/4 h-60 p-4 rounded-md bg-slate-300/10 backdrop-blur-sm border border-slate-400/40 overflow-scroll ' 
                        >
                          <div className='py-2 '>
                          create video Animation   
                          </div>
                          <div className='py-2 '>
                          video Editing  
                          </div>
                          <div className='py-2 '>
                          Creating 3D models and machine designs. 
                          </div>
                          <div className='py-2 '>
                          Tools
                          </div>
                          <div className='flex gap-1'>
                            <div className='border border-slate-400 rounded-md p-2 text-2xl text-slate-400  '>
                                <SiAdobephotoshop/>
                            </div>
                            <div className='border border-slate-400 rounded-md p-2 text-2xl text-slate-400  '>
                                <SiAdobeillustrator/>
                            </div>
                            <div className='border border-slate-400 rounded-md p-2 text-2xl text-slate-400  '>
                                <SiAdobeaftereffects/>
                            </div>
                            <div className='border border-slate-400 rounded-md p-2 text-2xl text-slate-400  '>
                                <SiAdobepremierepro/>
                            </div>
                            <div className='border border-slate-400 rounded-md p-2 text-2xl text-slate-400  '>
                                <BiLogoBlender/>
                            </div>
                          </div> 

                        </motion.div>
                    </div>
                </div>
                
            </div>

        </div>
      </section>
    );
  }