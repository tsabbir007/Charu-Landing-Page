import Navbar from "@/components/navbar";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  return <div className="app">
    <Navbar
       selectedPage={selectedPage}
       setSelectedPage={setSelectedPage}
    />
  </div>;
}

export default App;
