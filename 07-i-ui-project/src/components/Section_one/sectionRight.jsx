import React from "react";
import SectionCard from "./SectionCard";

const SectionRight = (props) => {
  return (
    <div className="h-full w-2/3 rounded-4xl overflow-x-auto flex flex-nowrap gap-4">
      {props.user.map((elem, idx) => {
        return (
            <SectionCard key={idx} id={idx}  image={elem.image} tags={elem.tag} />
        );
      })}
    </div>
  );
};

export default SectionRight;
