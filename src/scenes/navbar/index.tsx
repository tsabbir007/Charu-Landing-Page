import { useState } from "react";
import Logo from "@/assets/logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex item-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "drop-shadow-xl bg-white" : "bg-white";

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-11/12`}>
          {!isAboveMediumScreens ? (
            <div className={`${flexBetween} gap-4`}>
              <Bars3Icon
                className="h-8 w-8"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              />
            </div>
          ) : (
            <div></div>
          )}

          <img alt="logo" src={Logo} className="w-24" />

          {isAboveMediumScreens ? (
            <div className={`${flexBetween} gap-20`}>
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Service"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Products"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          ) : (
            <div></div>
          )}

          {/* searchbar */}
          <div className={`${flexBetween} gap-4`}>
            <input
              type="text"
              className="h-10 w-full sm:w-64 rounded-lg border-2 border-gray-300 px-4 focus:border-gray-500 focus:outline-none sm:block hidden"
              placeholder="Search"
            />
          </div>
          {/* help icon */}
          <div className={``}></div>
          {/* login/signup button */}
          <div className={`${flexBetween} gap-4`}>
            <button className={`roundes-md bg-gray-100 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>Log in</button>
            <ActionButton setSelectedPage={setSelectedPage}>
              Sign up
            </ActionButton>
          </div>
        </div>
      </div>
      {/* mobile menu modal*/}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed left-0 bottom-0 z-40 h-full w-[300px] bg-white drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="px-[10%] flex flex-col gap-10 text-2xl">
          <input
              type="text"
              className="h-10 w-full sm:w-64 rounded-lg border-2 border-gray-300 px-4 focus:border-gray-500 focus:outline-none"
              placeholder="Search"
            />
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Service"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
             <Link
              page="Products"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
