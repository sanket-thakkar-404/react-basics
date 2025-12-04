import React from "react";

const HeroSectionCompany = (props) => {
  return (
    <div className=" flex  items-center  gap-4  w-54 px-8 py-2 border border-gray-700 rounded-full">
      <img
        className="w-15 h-12 object-center object-cover"
        src={props.image}
        alt=""
      />
      <h5>{props.name}</h5>
    </div>
  );
};

export default HeroSectionCompany;
