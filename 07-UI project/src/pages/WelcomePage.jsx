import React from "react";

const WelcomePage = () => {
  return (
    <div className="flex items-center flex-col justify-between h-screen w-full p-10 m-auto">
      <div className="top ">
       
        <div className="logo flex items-center justify-center gap-3">
           <img src="https://cdn-icons-png.flaticon.com/512/1047/1047460.png" alt="cup image"  className="w-8 h-8"/>
        <h4 className="text-2xl font-bold ">Kupa</h4>
      </div>
      </div>

      <div className="centerText">
        <div className="bigCircle w-80 h-80 bg-gray-300 rounded-full border-gray-400">
          <div className="mainImage">
            <img src="https://img.freepik.com/free-psd/roasted-chicken-dinner-platter-delicious-feast_632498-25445.jpg?semt=ais_hybrid&w=740&q=80" alt=""  className="rounded-full bg-gray-300 w-15 ml-5"/>
            <img src="https://img.freepik.com/free-psd/roasted-chicken-dinner-platter-delicious-feast_632498-25445.jpg?semt=ais_hybrid&w=740&q=80" alt=""  className="rounded-full bg-gray-300 w-15 mt-5"/>
          </div>
        </div>
      </div>

      <div className="bottom">
        this is bottom text
      </div>
    </div>
  );
};

export default WelcomePage;
