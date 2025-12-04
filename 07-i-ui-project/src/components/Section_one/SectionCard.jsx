import React from "react";
import CardContent from "./CardContent";

const SectionCard = (props) => {

  return (
    <div className="h-full w-84 shrink-0 relative ">
        <img
          className="w-full h-full object-cover rounded-4xl"
          src={props.image}
          alt=""
        />

        <div className="w-full h-full absolute top-0 p-8 flex  flex-col justify-between">
          <h3 className="bg-white h-14 w-14 rounded-full flex justify-center items-center text-xl text-black font-bold">{props.id
            +1}</h3>

          <CardContent tag = {props.tags} />
        </div>
    </div>
  );
};

export default SectionCard;
