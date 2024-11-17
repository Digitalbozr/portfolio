import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import Skils from './sections/Skils.jsx';
import { useState , useEffect } from 'react';

const App = () => {

  var [ stisky , setstisky ] = useState (false) ;
  useEffect( ()=>{
    window.addEventListener('scroll' , ()=>{
      console.log(window.scrollY);
      // window.scrollY > 50 ? setstisky = true : setstisky = false ;
      if(window.scrollY > 50){
        setstisky = true ;
        console.log('syle bg true');
        document.getElementById("bg").classList.add("bg-white/10");
      }
      else{
        setstisky = false ;
        console.log('syle bg false');
        document.getElementById("bg").classList.remove("bg-white/10");

      }

    })
  } , [])

  return (
    <main className="max-w-7xl mx-auto ">
      <Navbar stylebg={stisky} />
      <Hero />
      <About />
      <WorkExperience />
      <Skils />
      <Projects />
      {/* <Clients /> */}
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
