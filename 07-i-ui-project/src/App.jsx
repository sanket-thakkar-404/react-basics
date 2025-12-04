import React from 'react'
import Section1 from './components/Section_one/Section1'
import Section2 from './components/Section_two/Section2'
import Section3 from './components/section_three/Section3'
import Footer from './components/Footer/Footer'
import BottomFooter from './components/Footer/BottomFooter'

const App = () => {
  const users = [
    {
      image : 'https://images.unsplash.com/photo-1628125660717-5190c3fdfb86?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : '',
      tag : 'Satisfied',
    },
    {
      image : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : '',
      tag : 'UnderServed',
    },
    {
      image : 'https://images.unsplash.com/photo-1752856408620-2e6fc6ac072f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : '',
      tag : 'UnderBanked',
    },
  ]

  const company = [
    {
      image : 'https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg',
      name : 'Google',
    },
    {
      image : 'https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg',
      name : 'Amazon',
    },
    {
      image : 'https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg',
      name : 'Meta',
    },
    {
      image : 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24760594/Adobe_wordmark.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100',
      name : 'Adobe',
    },
    {
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rIxFRNX2QZlnQidGjE75yAg9jR4Jhy3Jgw&s',
      name : 'Apple',
    },
  ]


  return (
    <div > 
      <Section1 user = {users}/>
      <Section2 company = {company}/>
      <Section3/>
      <hr />
      <Footer/>
      <hr  className='mb-5'/>
      <BottomFooter/>
    </div>
  )
}

export default App
