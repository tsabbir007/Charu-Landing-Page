import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage : string;
  setSelectedPage: (value: string) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const loweCasePage = page.toLowerCase().replace(" ", "-");
  return (
    <AnchorLink
    className={`${selectedPage === loweCasePage ? "text-gray-900" : "text-gray-500"} text-lg font-medium transition duration-300 ease-in-out hover:text-gray-900`}
    href={`#${loweCasePage}`}
    onClick={() => setSelectedPage(loweCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
