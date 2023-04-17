import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage : SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const loweCasePage = page.toLowerCase().replace(/ /g, "-") as SelectedPage;
  return (
    <AnchorLink
    className={`${selectedPage === loweCasePage ? "text-primary-100" : "text-gray-500"} text-md font-normal transition duration-300 ease-in-out hover:text-primary-100`}
    href={`#${loweCasePage}`}
    onClick={() => setSelectedPage(loweCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
