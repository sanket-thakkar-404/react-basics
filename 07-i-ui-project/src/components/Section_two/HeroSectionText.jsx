import React from 'react'

const HeroSectionText = (props) => {

  return (
    <div className='flex justify-between gap-5 p-10 items-center'>
     <div className='`w-1/4 p-10'>
       <h1 className='text-6xl font-bold'>{props.head} <br />{props.span}</h1>
     </div>

      <div className='w-2/4 text-gray-600 leading-[1.8]'> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum possimus repudiandae facilis excepturi, laborum nihil alias delectus ea quis debitis quia perferendis dignissimos quos blanditiis nostrum optio? Velit, nesciunt. Commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, possimus.</p>
      </div>
    </div>
  )
}

export default HeroSectionText
