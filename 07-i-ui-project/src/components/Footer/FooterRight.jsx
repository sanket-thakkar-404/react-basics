import React from 'react'
import FooterContext from './FooterContext'

const FooterRight = (props) => {


  return (
    <div className='w-2/3'>
      <FooterContext footerItems={props.footerItems}/>
    </div>
  )
}

export default FooterRight
