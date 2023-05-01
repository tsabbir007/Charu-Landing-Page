import { useState } from "react";
import { useEffect } from "react";

import { SelectedPage } from "@/shared/types";
import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Feature from "@/components/features";
import Services from "@/components/services";
import Masonry from "@/components/masonry";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* container */}
      <div className="container mx-auto px-5 md:px-36">
        <Home setSelectedPage={setSelectedPage} />
        <Feature setSelectedPage={setSelectedPage} />
        {/* <Services setSelectedPage={setSelectedPage} /> */}
        <Masonry />
      </div>
      <div className="px-6">
        <Carousel setSelectedPage={setSelectedPage} />
        <Footer  setSelectedPage={setSelectedPage}/>
      </div>
    </div>
  );
}

export default App;
