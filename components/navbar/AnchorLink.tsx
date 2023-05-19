import React from 'react'
import Link from 'next/link'
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
};

const AnchorLink = ({ page, selectedPage, setSelectedPage, isMenuToggled, setIsMenuToggled }: Props) => {
  const scrollToSection = (event: any, sectionId: string) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const lowerCasePage = page.toLowerCase().replace(/ /g, "-") as SelectedPage;
  return (
    <Link
      className={`${selectedPage === lowerCasePage ? "text-primary-100" : "text-black-500"} font-normal transition duration-300 ease-in-out hover:text-primary-100`}
      href={`#${lowerCasePage}`}
      onClick={(event) => {
        setSelectedPage(lowerCasePage);
        setIsMenuToggled(!isMenuToggled);
        scrollToSection(event, `#${lowerCasePage}`);
      }}

    >
      {page}
    </Link>
  );
};

export default AnchorLink;
