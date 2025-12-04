import React from 'react'
import HeroSectionCompany from './HeroSectionCompany'

const HeroSection2 = (props) => {
  return (
    <div>
      <h1 className='text-5xl font-bold text-center p-5'>Trusted by <span>20,000+</span> Customer Across India</h1>

      <div>
        <div className='flex justify-between p-5 mb-5'>
        {props.company.map((elem ,idx )=>{
          return <HeroSectionCompany key={idx} image = {elem.image}  name = {elem.name}/>
        })}
        </div>
      </div>
    </div>
  )
}

export default HeroSection2
