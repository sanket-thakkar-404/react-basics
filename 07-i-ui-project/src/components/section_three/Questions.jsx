import React from "react";
import Question from "./Question";

const Questions = (props) => {
  return (
    <div className="px-15 w-full h-10  border-zinc-400 p-5">
      {props.question.map((elem , idx)=>{
        return <Question key={idx}  question={elem}/>
      })}
    </div>
  );
};

export default Questions;
