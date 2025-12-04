import React from 'react'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import BottomFooter from './BottomFooter'

const Footer = () => {
  return (
    <div className='flex gap-5 w-full p-10 bg-gray-100'>
      <FooterLeft/>
      <FooterRight/>
    </div>
  )
}

export default Footer
