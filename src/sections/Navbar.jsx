import { useState } from 'react';
import { motion } from "framer-motion";
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = (stylebg) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  console.log(stylebg);
  return (
    <header className="fixed top-2 left-0 right-0 z-50 ">
      <div className="xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-lg mx-auto  rounded-full  transition-all duration-1000 ease-in-out backdrop-blur-md " id='bg'>
        <div className="flex justify-between items-center py-3 mx-auto c-space">
          <motion.div      
              initial={{  opacity: 0, scale: 1 }}
              animate={{  opacity: 1, scale: 1 }}
            >
            <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
              Bozr
            </a>

          </motion.div>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <motion.div
              
              initial={{  opacity: 0, y: -20 }}
              animate={{  opacity: 1, y: 0 }}
              transition={{duration:0.7 , ease: "easeInOut"}}
            >
              <NavItems />
            </motion.div>

          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
