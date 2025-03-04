import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'
import UserCard from './UserCard'

const Profile = () => {
    const user = useSelector((store) => store.user)
    return (
        <div className='flex mt-[2rem]  gap-[2rem] justify-center items-center'>
            {user && <EditProfile user={user} />}

        </div>

    )
}

export default Profile