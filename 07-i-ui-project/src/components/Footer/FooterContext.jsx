import React from "react";

const FooterContext = (props) => {
  return (
    <div className=" text-center flex gap-10 flex-nowrap">
      {props.footerItems.map((item, index) => (
        <div key={index}>
          <h5 className="text-2xl mb-2">{item.name}</h5>
          <hr className="mb-4" />

          {item.items.map((subItem, idx) => (
            <a href='' key={idx} className="block mt-2">
              {subItem}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterContext;