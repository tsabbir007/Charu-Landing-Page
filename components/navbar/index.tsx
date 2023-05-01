import { useState } from "react";
import Logo from "@/assets/charu-logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import AnchorLink from "./AnchorLink";
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
      <div className={`${navbarBackground} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-11/12`}>
          {!isAboveMediumScreens ? (
            <div className={`${flexBetween} gap-4`}>
              <Bars3Icon
                className="h-8 w-8"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              />
            </div>
          ) : (
            <div>
              {/* <img alt="logo" src={Logo} className="w-10" /> */}
              <h1 className="text-3xl font-sand font-bold">
                <a href="#">
                  Charu
                </a>
              </h1>
            </div>
          )}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} gap-20 items-center`}>
              <AnchorLink
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <AnchorLink
                page="Service"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <AnchorLink
                page="Products"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <AnchorLink
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          ) : (
            <div></div>
          )}
          {/* login/signup button */}
          <div className={`${flexBetween} gap-4`}>
            <ActionButton setSelectedPage={setSelectedPage}>
              Download Free
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
            <AnchorLink
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <AnchorLink
              page="Service"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <AnchorLink
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
