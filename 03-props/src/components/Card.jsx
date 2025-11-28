import React from 'react'

const Card = (props) => {

  return (
   
        <div className='p-3 items-center'>
      <div className="contanier bg-white w-108 text-center text-black rounded-2xl p-5">
        <div className="image flex items-center justify-center mb-5  ">
          <img className='w-50 h-50 object-top  object-cover  items-center rounded-full' src="https://images.unsplash.com/photo-1763990840358-a54e99a19b5d?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <h1 className='text-2xl font-serif'>{props.user}, {props.age}</h1>
        <div className="paragraph mt-7 mb-7">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quam saepe ullam placeat mollitia enim ut quia nemo ipsum eum.</p>
        </div>
        <div className="btn1">
          <button className='px-5 py-2 border-2 rounded-xl text-base mb-5'>view Profile</button>
        </div>
      </div>
    </div>
  )
}

export default Card
