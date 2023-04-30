import React from 'react'
import Link from 'next/link'
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage : SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const AnchorLink = ({ page, selectedPage, setSelectedPage }: Props) => {
  const loweCasePage = page.toLowerCase().replace(/ /g, "-") as SelectedPage;
  return (
    <Link
    className={`${selectedPage === loweCasePage ? "text-primary-100" : "text-black-500"} text-sm font-normal transition duration-300 ease-in-out hover:text-primary-100`}
    href={`#${loweCasePage}`}
    onClick={() => setSelectedPage(loweCasePage)}
    >
      {page}
    </Link>
  );
};

export default AnchorLink;
