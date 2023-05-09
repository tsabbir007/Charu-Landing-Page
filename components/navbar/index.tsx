import { useState } from "react";
import Logo from "@/assets/charu-logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import AnchorLink from "./AnchorLink";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import Link from "next/link";

type Props = {
  isMainPage: boolean;
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isMainPage, isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "drop-shadow-xl bg-white" : "bg-white";

  return (
    <nav>
      <div className={`${navbarBackground} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-11/12`}>
          <div className={`${flexBetween} gap-4`}>
            {!isAboveMediumScreens && isMainPage && (
              <div>
                <div className={`gap-4`}>
                  <Bars3Icon
                    className="h-8 w-8"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  />
                </div>
              </div>
            )}
            <div>
              <Link href="/">
                <svg width="auto" height="2em" viewBox="0 0 115 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M113.692 34.9038C111.192 38.3038 104.592 46.4038 103.492 46.0038C102.392 45.6038 111.492 25.0038 111.492 25.0038C111.492 25.0038 109.792 20.9038 108.492 23.1038C105.992 26.5038 93.6922 46.5038 92.5922 46.0038C91.3922 45.6038 100.492 25.0038 100.492 25.0038C100.492 25.0038 98.8922 20.9038 97.4922 23.1038C97.3922 23.2038 93.9922 29.1038 91.5922 35.1038C89.0922 38.6038 82.5922 46.4038 81.5922 46.0038C80.3922 45.6038 90.6922 23.8038 90.6922 23.8038C90.6922 23.8038 88.9922 21.8038 87.6922 22.4038C87.6922 22.4038 87.6922 22.5038 87.5922 22.5038C87.1922 22.9038 84.0922 25.0038 84.0922 22.4038C84.0922 22.4038 86.1922 20.6038 87.0922 16.8038C87.9922 12.9038 82.7922 14.7038 82.7922 14.7038C82.7922 14.7038 79.5922 20.2038 80.9922 23.1038L81.0922 23.6038C79.1922 26.7038 75.1922 32.9038 72.6922 36.2038C69.7922 40.0038 64.4922 46.3038 63.4922 46.0038C62.2922 45.6038 68.7922 32.2038 68.7922 32.2038C68.7922 32.2038 67.6922 30.2038 66.5922 29.8038C66.9922 27.6038 67.1922 22.4038 62.5922 22.4038C58.1922 22.4038 52.9922 29.0038 50.1922 35.0038C47.6922 38.4038 41.1922 46.4038 40.0922 46.0038C38.8922 45.6038 48.4922 25.0038 48.4922 25.0038C48.4922 25.0038 47.1922 22.4038 45.9922 22.5038V22.4038C45.9922 22.4038 45.9922 22.5038 45.8922 22.5038C45.6922 22.5038 45.4922 22.6038 45.2922 22.8038C38.7922 26.3038 33.0922 35.0038 29.6922 41.1038C29.9922 40.3038 30.2922 39.5038 30.6922 38.7038C35.4922 27.0038 43.6922 9.80376 43.8922 8.90376C43.8922 8.90376 42.2922 5.60376 40.8922 7.80376C40.7922 7.90376 31.9922 24.5038 27.2922 35.2038C26.3922 36.4038 24.9922 38.3038 23.4922 40.1038C19.9922 44.6038 15.2922 49.6038 9.5922 48.5038C6.9922 48.1038 5.3922 45.0038 5.1922 40.8038C4.5922 30.2038 12.1922 15.7038 19.0922 8.50376C26.0922 1.20376 31.0922 0.903761 32.8922 3.70376C35.8922 8.50376 27.4922 21.4038 15.4922 22.1038C15.4922 22.1038 15.0922 23.8038 17.8922 24.4038C24.7922 26.1038 38.9922 12.3038 34.2922 3.00376C31.9922 -1.89624 23.4922 -0.896239 15.4922 6.70376C3.8922 17.6038 -3.5078 35.6038 1.6922 45.7038C8.4922 58.8038 20.5922 46.9038 24.7922 41.2038C24.8922 41.1038 24.9922 41.0038 25.0922 40.9038C24.6922 41.9038 24.4922 42.8038 24.4922 43.3038C24.2922 45.6038 23.9922 48.3038 27.6922 48.3038C34.7922 35.0038 40.1922 28.9038 43.2922 26.1038C39.8922 32.6038 32.7922 47.6038 39.5922 48.3038C41.4922 48.4038 45.4922 43.8038 48.2922 40.1038C48.0922 40.7038 48.0922 41.3038 47.9922 41.9038C47.8922 46.9038 50.4922 48.3038 53.1922 48.3038C54.5922 48.3038 57.6922 44.4038 60.2922 40.7038C59.2922 44.4038 59.3922 47.7038 62.8922 48.3038C65.2922 48.8038 70.7922 41.4038 73.3922 37.8038L73.4922 37.9038L82.4922 24.9038C83.1922 25.2038 84.2922 25.3038 85.9922 25.1038C82.6922 30.9038 73.9922 47.6038 81.1922 48.4038C83.1922 48.5038 87.2922 43.7038 90.0922 40.0038C88.8922 44.4038 88.8922 48.1038 92.1922 48.4038C93.7922 48.5038 98.1922 42.4038 102.292 36.2038C99.9922 42.2038 98.9922 48.0038 103.192 48.4038C106.392 48.6038 114.892 35.9038 114.892 35.9038L113.692 34.9038ZM88.3922 24.7038C88.3922 24.8038 88.2922 24.8038 88.3922 24.7038ZM52.7922 44.9038C49.7922 45.3038 57.1922 28.3038 61.6922 25.8038C64.9922 24.1038 65.8922 27.5038 65.3922 30.1038L65.1922 30.3038C65.0922 30.4038 64.2922 31.7038 63.2922 33.5038C61.0922 36.8038 55.3922 44.6038 52.7922 44.9038Z" fill="url(#paint0_linear_1_4)" />
                  <defs>
                    <linearGradient id="paint0_linear_1_4" x1="2.4922" y1="19.5038" x2="114.992" y2="26.0038" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#1BBECE" />
                      <stop offset="0.567708" stop-color="#676EE9" />
                      <stop offset="1" stop-color="#8A47F4" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
              {/* <h1 className="text-3xl font-sand font-bold">
                <Link href="/">
                  Charu
                </Link>
              </h1> */}
            </div>
          </div>
          {isAboveMediumScreens && isMainPage && (
            <div className={`${flexBetween} gap-20 items-center`}>
              <AnchorLink
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
              <AnchorLink
                page="Features"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
              <AnchorLink
                page="Templates"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
              <AnchorLink
                page="Blogs"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
            </div>
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
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
            />
            <AnchorLink
              page="Features"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
            />
            <AnchorLink
              page="Templates"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
            />
            <AnchorLink
              page="Blogs"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
            />
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
