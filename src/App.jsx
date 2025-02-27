import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router'
import Body from './components/Body'
import Login from './components/Login'
import Dummy from './components/Dummy'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><Body></Body></div>} >
          <Route path='/login' element={<Login />} />
          <Route path='/dummy' element={<Dummy />} />


        </Route>



      </Routes>
    </BrowserRouter>
  )
}

export default App