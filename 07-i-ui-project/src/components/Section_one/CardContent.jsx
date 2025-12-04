import React from "react";

const CardContent = (props) => {

  return (
    <div>
      <p className="text-white text-lg l font-medium mb-12 tracking-wide leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        quaerat voluptatem porro error molestiae pariatur veniam saepe
        recusandae doloribus minima?
      </p>
      <div className="flex gap-2 text-white">
        <button className="bg-blue-500 w-full px-6 py-2 text-xl rounded-full">
          {props.tag}
        </button>
        <button className="bg-blue-500 px-6 py-2 rounded-full">
          <i className="ri-arrow-right-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default CardContent;
