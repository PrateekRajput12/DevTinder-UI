import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router'
import Body from './components/Body'
import Login from './components/Login'
import Feed from './components/Feed'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Profile from './components/Profile'

const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename='/'>

        <Routes>
          <Route path='/' element={<div><Body></Body></div>} >
            <Route path='/login' element={<Login />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/profile' element={<Profile />} />



          </Route>



        </Routes>

      </BrowserRouter>
    </Provider>
  )
}

export default App