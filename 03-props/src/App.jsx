import React from 'react'
import NavBar from './components/NavBar'
import Card from './components/Card'

const App = () => {
  return (
    <div className='overflow-hidden m-5'>
      <NavBar/>
      <div className="card flex gap-2 flex-wrap">
        <Card user ='Sanket Thakkar' age={20}/>
      <Card user ='Kamlesh Thakkar' age={52}/>
      <Card user ='Krisha Thakkar' age={22}/>
      <Card user ='Shaan Thakkar' age={20}/>
      </div>
    </div>
  )
}

export default App
