import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { addConnection } from '../utils/connectionSlice';

const Connections = () => {
    const connections = useSelector((store) => store.connections)
    console.log("user", connections);
    const dispatch = useDispatch()

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + '/user/connections', {
                withCredentials: true
            })
            // console.log(res.data);
            dispatch(addConnection(res.data.data))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchConnections()
    }, [])
    if (!connections) return

    if (connections.length === 0) return <h1>No Connections Found</h1>
    return (
        <div className=' mt-[2rem] flex-col  flex  mx-auto'>
            <h1 className='text-2xl font-bold text-center'>Connections</h1>
            {connections.map((connection, index) => {
                const { _id, firstName, lastName, photoURL, age, about, skills, gender } = connection
                return (
                    <div key={_id} className=' w-[60%] mx-auto flex  gap-[1rem] bg-base-200 m-[2rem] rounded-2xl' >
                        <img src={photoURL} alt='profilePic' className='h-20 rounded-full w-20 m-6' />
                        <div>
                            <h2 className='text-xl font-bold'>{firstName + " " + lastName}</h2>
                            {age && gender && <p>{age + " " + gender}</p>}
                            <p>{about}</p>
                        </div>
                    </div>
                )
            })
            }
        </div >

    )
}

export default Connections