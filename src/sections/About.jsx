import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { CgProfile } from "react-icons/cg";
import Developer from '../components/Developer2.jsx';
import CanvasLoader from '../components/Loading.jsx';

const WorkExperience = () => {
  // const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="About">
      <div className="w-full text-white-600">
        <p className="head-text">About me </p>

        <div className="work-container ">
          <div className="work-canvas  ">
            <Canvas className='min-h-80'>
              <ambientLight intensity={7} />
              {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} /> */}
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                {/* <Developer position-y={-3} scale={3} animationName={'idle'} /> */}
                <Developer position-y={-3} scale={3} />

              </Suspense>
            </Canvas>
          </div>

          <div className="work-content ">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">

              <div className="flex flex-row items-start md:gap-5  rounded-lg sm:px-5 px-2.5">

                    <div className="flex flex-col h-1/4 justify-start items-center py-2">
                      <div className="">
                        <CgProfile className='w-20 text-5xl' />
                      </div>

                    </div>

                    <div className="sm:p-5 px-2.5 py-5 w-3/4 ">
                      <p className="font-bold text-xl text-white-800 mb-4 ">Profile</p>
                      <p className=" font-bold text-sm sm:text-lg ">
                        Ayoub ELBOUZARI
                      </p>
                      <p className="text-sm sm:text-lg text-justify ">
                          My name is Ayoub Elbouzari, and I am a 23-year-old programmer specializing in microcontrollers, electronics, and PLC programming. I have extensive experience in developing IoT systems, working with devices like ESP32, and integrating them into practical solutions such as remote irrigation systems and automated incubators. While I also have skills in web development and 2D/3D design, my main focus is on programming embedded systems, designing electronic circuits, and working with PLCs to create smarter, more efficient systems.
                      </p>
                      <br/>
                      <p>Phone number : 0680381809</p>
                    </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
