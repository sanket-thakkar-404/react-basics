import React from 'react'
import SectionLeft from './SectionLeft'
import SectionRight from './sectionRight'

const CenterSection = (props) => {

  return (
    <div className='h-[89vh] flex items-center gap-8 justify-between p-4'>
      <SectionLeft/>
      <SectionRight user = {props.user}/>
    </div>
  )
}

export default CenterSection
