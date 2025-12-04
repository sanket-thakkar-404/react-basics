import React from "react";
import Heading1 from "./Section1.heading";
import SectionLeft from "./SectionLeft";
import SectionRight from "./sectionRight";
import CenterSection from "./CenterSection";

const Section1 = (props) => {
  return (
    <div className="h-screen w-full p-5">
      <Heading1 />
      <CenterSection user = {props.user}/>
    </div>
  );
};

export default Section1;
