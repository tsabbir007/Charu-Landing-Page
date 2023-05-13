import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="font-sand text-3xl  font-bold mb-8 mt-5">{children}</h1>
  );
};

export default HText;