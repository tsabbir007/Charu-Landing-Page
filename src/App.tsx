import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Feature from "@/scenes/feature";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import { useEffect } from "react";

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

      <div className="container mx-auto">
        <Home setSelectedPage={setSelectedPage}/>
        <Feature setSelectedPage={setSelectedPage}/>
      </div>

    </div>
  );
}

export default App;
