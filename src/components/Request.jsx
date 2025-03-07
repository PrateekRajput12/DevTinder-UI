import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest } from '../utils/requestSlice';

const Request = () => {
    const requests = useSelector((store) => store.requests)
    // console.log("user", connections);
    const dispatch = useDispatch()
    console.log("Reuqests", requests);
    const fetchRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + '/user/requests/receive', {
                withCredentials: true
            })
            // console.log(res.data);
            dispatch(addRequest(res.data.data))
            console.log(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchRequests()
    }, [])
    if (!requests) return

    if (requests.length === 0) return <h1>No Connections Found</h1>
    return (
        <div className=' mt-[2rem] flex-col  flex  mx-auto'>
            <h1 className='text-2xl font-bold text-center'>Request</h1>
            {requests?.map((requests, index) => {
                console.log(requests);
                const { _id, firstName, lastName, photoURL, age, about, skills, gender } = requests.fromUserId
                // console.log(firstName);
                return (
                    <div key={index} className=' w-[60%] mx-auto flex items-center justify-evenly  gap-[1rem] bg-base-200 m-[2rem] rounded-2xl' >
                        <img src={photoURL} alt='profilePic' className='h-20 rounded-full w-20 m-6' />
                        <div className='  '>
                            <h2 className='text-xl font-bold'>{firstName + " " + lastName}</h2>
                            {age && gender && <p>{age + " " + gender}</p>}
                            <p>{about}</p>
                        </div>
                        <div className='flex gap-2'>
                            <button className="btn btn-success" >Accept</button>
                            <button className="btn btn-warning">Reject</button>
                        </div>
                    </div>
                )
            })
            }
        </div >

    )
}

export default Request