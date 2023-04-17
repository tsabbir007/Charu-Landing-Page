import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Feature from "@/scenes/services";
import Services from "@/scenes/features";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import { useEffect } from "react";
import Carousel from "@/scenes/caousel";
import Masonry from "@/scenes/masonry";
import Footer from "@/scenes/footer";

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

      <div className="container mx-auto md:px-36">
        <Home setSelectedPage={setSelectedPage} />
        <Feature setSelectedPage={setSelectedPage} />
        <Services setSelectedPage={setSelectedPage} />
        <Masonry/>
      </div>
      <div className="px-6">
        <Carousel setSelectedPage={setSelectedPage} />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
