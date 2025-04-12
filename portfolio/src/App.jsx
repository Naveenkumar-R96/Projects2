import React from 'react'
import Nav from './Components/Nav/Nav' 
import Home from './Components/Home/Home' 
import AllRoutes from './Routes/AllRoutes'
import Button from './Button'
import Footer from  './Components/Footer/Footer'
const App = () => {
  return (
    <div className=''>
     
     <Nav />
      <AllRoutes />
     
      {/* <Button/> */}
    </div>
  )
}

export default App
