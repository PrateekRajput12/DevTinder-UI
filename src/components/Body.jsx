import React, { use, useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router'
// import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Body = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userData = useSelector((store) => store.user)
    const fetchUser = async () => {
        if (userData) {
            return
        }
        try {
            const user = await axios.get(BASE_URL + '/profile/view',
                { withCredentials: true }
            )

            // console.log(user.data);

            dispatch(addUser(user?.data))

        } catch (e) {
            if (e.status === 401) {
                navigate("/login")
            }
            console.log("error", e);

        }
    }


    useEffect(() => {

        fetchUser()

    }, [])
    return (
        <div className='w-[100vw] h-[100vh] '>
            <NavBar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

export default Body