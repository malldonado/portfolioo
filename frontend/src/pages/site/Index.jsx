import React, { useState, useEffect } from 'react';
import Navbar from '../../components/site/navbar/navbar';
import Banner from '../../components/site/banner/banner';
import Skills from '../../components/site/skills/skills';
import OurProjects from '../../components/site/ourProjects/ourProjects';
import About from '../../components/site/about/about';
import Message from '../../components/site/message/message';
import Footer from '../../components/site/footer/footer';
import ButtonWhatsApp from '../../components/site/buttonWhatsApp/buttonWhatsApp';
import HashLoader from 'react-spinners/HashLoader';

function IndexPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className={`flex justify-center items-center w-full h-screen overflow-y-hidden ${loading ? '' : 'hidden'}`}>
        <HashLoader color="#ffffff" size={100} />
      </div>
      
      <div className={`${loading ? 'hidden' : ''}`}>
        <Navbar />
        <Banner />
        <OurProjects />
        <About />
        <Skills />
        <Message />
        <ButtonWhatsApp />
        <Footer />
      </div>
    </div>
  );
}

export default IndexPage;
