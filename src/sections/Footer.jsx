import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center  c-space pt-7 mt-32 pb-3 border-t border-black-300 h-20">
      <div className="text-white-500 w-52 md:block hidden">
        <p>BOZR </p>
      </div>

        <div className="social-icon w-52">
        <a href='https://github.com/Digitalbozr'><FaGithub className="w-4 h-4 mx-2 text-white " /></a>
        <a href='https://www.linkedin.com/in/ayoub-elbouzari-9810442b7/'><FaLinkedin className="w-4 h-4 mx-2 text-white" /></a>
        <a href='https://www.instagram.com/ayoub_el_bouzari/profilecard/?igsh=a2R5eGV6Yml3bTF6'><FaInstagram className="w-4 h-4 mx-2 text-white" /></a>
        </div>
      <p className="text-white-500 w-52">© 2024. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
