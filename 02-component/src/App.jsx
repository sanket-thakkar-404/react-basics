import React from 'react'
import Card from './components/card'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='bg-black w-full h-full'>
      <NavBar/>
       <NavBar/>
        <NavBar/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default App
