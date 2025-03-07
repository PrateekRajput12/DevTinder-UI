import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { BASE_URL } from '../utils/constant'
import { addUser, removeUser } from '../utils/userSlice'

const NavBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    // console.log("USer", user);
    // console.log(user?.photoURL);
    const handleLogout = async () => {
        try {
            const res = await axios.post(BASE_URL + "/logout", {},
                { withCredentials: true }
            )
            dispatch(removeUser())
            return navigate("/login")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="navbar bg-base-300 shadow-sm">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost text-xl">DevTinder💀</Link>
            </div>
            {user && <div className="flex mx-[2rem] gap-4 justify-between items-center ">
                {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                <p>Welcome </p>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user.photoURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to={"/profile"} className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link to={'/connections'}>Connections</Link></li>
                        <li><Link to={'/requests'}>Requests</Link></li>

                        <li><Link onClick={handleLogout}>Logout</Link></li>
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default NavBar