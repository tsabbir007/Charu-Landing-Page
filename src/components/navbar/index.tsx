import { useState } from "react";
import Logo  from "@/assets/logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";

type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
};

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex item-center justify-between";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} w-11/12 mx-auto`}>
            {/* logo */}
            <img alt="logo" src={Logo} className="w-24"/>
            {/* navbar */}
            <div className={`${flexBetween} gap-4`}>
                <Link page="Home Page" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Service Page" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
            {/* searchbar */}
            <div className={`${flexBetween} gap-4`}>
                <input type="text" className="w-64 h-10 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500" placeholder="Search"/>
            </div>
            {/* help icon */}
            <div className={``}></div>
            {/* login/signup button */}
            <div className={`${flexBetween} gap-4`}>
                <button className={``}>Log in</button>
                <button className={``}>Sign Up</button>
            </div>
        </div>
        </div>
    </nav>
  );
};
export default Navbar;
