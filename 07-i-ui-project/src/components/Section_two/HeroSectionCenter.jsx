import React from 'react'
import HeroSectionLeft from './HeroSectionLeft'
import HeroSectionRight from './HeroSectionRight'

const HeroSectionCenter = () => {
  return (
    <div className='flex gap-2  p-5'>
      <HeroSectionLeft/>
      <HeroSectionRight/>
    </div>
  )
}

export default HeroSectionCenter
