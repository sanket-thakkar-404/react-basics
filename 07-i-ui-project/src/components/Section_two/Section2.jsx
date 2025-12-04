import React from 'react'
import HeroSection2 from './HeroSection2'
import HeroSectionText from './HeroSectionText'
import HeroSectionCenter from './HeroSectionCenter'

const Section2 = (props) => {
  return (
    <div className='h-screen w-full mt-5 p-5'>
      <HeroSection2 company = {props.company}/>
      <HeroSectionText head = {'Here Our Vision'} span = {'& Mission'}/>
      <HeroSectionCenter/>
    </div>
  )
}

export default Section2
