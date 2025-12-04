import "remixicon/fonts/remixicon.css";
import React from "react";
import HeroText from "./HeroText";
import HeroButton from "./HeroButton";
import HeroArrow from "./HeroArrow";

const SectionLeft = () => {
  return (
    <div className="h-full w-1/3  flex flex-col justify-between">
      {" "}
      <HeroText/>
      <HeroButton/>
      <HeroArrow/>
    </div>
  );
};

export default SectionLeft;
