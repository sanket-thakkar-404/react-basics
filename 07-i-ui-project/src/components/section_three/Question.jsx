import React from 'react'

const Question = (props) => {
  console.log(props.question)
  return (
    <div className='w-full h-14 bg-white flex items-center rounded-full px-10 justify-between mb-4'>
      <h1>{props.question}</h1>
      <h5 className='text-xl'><i className="ri-arrow-right-fill"></i></h5>
    </div>
  )
}

export default Question
