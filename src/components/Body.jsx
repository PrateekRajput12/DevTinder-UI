import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const Body = () => {
    return (
        <div className='w-[100vw] h-[100vh] '>
            <NavBar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

export default Body