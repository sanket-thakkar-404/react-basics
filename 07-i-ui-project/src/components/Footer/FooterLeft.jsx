import React from "react";

const FooterLeft = () => {
  return (
    <div className="w-2/4 flex flex-col">
      <h1 className="text-5xl mb-10">
        Saas <span className="font-bold">mo</span>
      </h1>
      <div className="w-2/4 mb-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque
          temporibus ullam sequi numquam repellendus praesentium illum, iure
          modi autem?
        </p>
      </div>

      <div className="flex gap-5 mb-8">
        <input type="email" placeholder="Enter your email" className="px-8 py-2 bg-zinc-200 rounded-xl" />
        <button className="mr-4 bg-black px-10 py-2 rounded-full text-white">Subscribe</button>
      </div>
      <div>
        <span className="text-gray-500 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
          inventore.
        </span>
      </div>
    </div>
  );
};

export default FooterLeft;
