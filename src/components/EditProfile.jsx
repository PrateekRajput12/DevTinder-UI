import React, { use } from 'react'
import { useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { BASE_URL } from '../utils/constant'
import { addUser } from '../utils/userSlice'
const EditProfile = ({ user }) => {
    // const { firstName, lastName, age, gender, photoURL } = user
    // const navigate = useNavigate()
    const [firstName, setfirstName] = useState(user.firstName)
    const [about, setabout] = useState(user.about)
    const [gender, setgender] = useState(user.gender)
    const [age, setage] = useState(user.age)
    const [photoURL, setphotoURL] = useState(user.photoURL)
    const [showToast, setshowToast] = useState(false)
    const [lastName, setlastName] = useState(user.lastName)
    const [skills, setskills] = useState(user.skills)

    const [error, seterror] = useState("")
    const dispatch = useDispatch()
    // const handleLogin = async () => {
    //     try {
    //         // console.log("Sending data:", { emailId, password });
    //         const res = await axios.post(BASE_URL + '/login', {
    //             emailId,
    //             password
    //         },
    //             { withCredentials: true }
    //         )
    //         // console.log("res", res);
    //         dispatch(addUser(res.data))
    //         return navigate("/feed")
    //     } catch (e) {
    //         seterror(e?.response?.data || "Something went wrong")

    //     }
    // }
    const saveProfile = async () => {
        console.log(firstName, lastName, age, photoURL, about);
        try {
            const res = await axios.patch(BASE_URL + '/profile/edit',
                {

                    age,
                    gender,
                    skills,
                    photoURL,
                    about
                },
                { withCredentials: true })
            console.log('hlo');

            // console.log(res?.data);
            dispatch(addUser(res?.data?.data))
            setshowToast(true)

            setTimeout(() => {
                setshowToast(false)
            }, 3000)
        } catch (error) {
            // console.log(error.response.data);
            seterror(error.response.data)
            console.log(error);
        }
    }

    return (

        <div>
            <div className='flex justify-center items-center flex-row   gap-[2rem] mt-[2rem]'>
                <div className='flex justify-center  items-center'>
                    <div className="card card-border  mt-[3rem] bg-base-300 w-96">
                        <div className="card-body">
                            <h2 className="card-title   justify-center">Edit Profile</h2>
                            {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                            <div className=''>
                                <fieldset className="fieldset flex flex-col gap-[1rem] ">
                                    {/* <legend className="fieldset-legend">EmailId ID</legend> */}
                                    <div>
                                        <label htmlFor='firstName'>
                                            firstName
                                        </label>
                                        <input type="text" value={firstName} disabled={true} className="input outline-none border-none" id='firstName' placeholder="Type here" onChange={(e) => setfirstName(e.target.value)} />
                                    </div>
                                    {/* <p className="fieldset-label">Optional</p> */}
                                    <div>
                                        <label htmlFor='lastName'>
                                            LastName
                                        </label>
                                        <input type="text" value={lastName} disabled={true} className="input outline-none border-none" id='lastName' placeholder="Type here" onChange={(e) => setlastName(e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor='photo'>
                                            Photo
                                        </label>
                                        <input type="text" value={photoURL} className="input outline-none border-none" id='photo' placeholder="Type here" onChange={(e) => setphotoURL(e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor='age'>
                                            Age
                                        </label>
                                        <input type="text" value={age} className="input outline-none border-none" id='age' placeholder="Type here" onChange={(e) => setage(e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor='gender'>
                                            Gender
                                        </label>
                                        {/* <input type="text" value={gender} className="input outline-none border-none" id='gender' placeholder="Type here" onChange={(e) => setgender(e.target.value)} /> */}
                                        <select value={gender} className="input outline-none border-none" id='gender' placeholder="Type here" onChange={(e) => setgender(e.target.value)}>
                                            <option value={'male'} >Male</option>
                                            <option value={'female'} >Female</option>
                                            <option value={'other'} >Other</option>


                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor='about'>
                                            About
                                        </label>
                                        <input type="text" value={about} className="input outline-none border-none" id='about' placeholder="Type here" onChange={(e) => setabout(e.target.value)} />
                                        {/* <textarea rows={4} cols={10} value={about} className="input outline-none border-none resize-none" id='about' placeholder="Type here" onChange={(e) => setabout(e.target.value)}   ></textarea> */}
                                    </div>
                                    <div>
                                        <label htmlFor='skill'>
                                            Skills
                                        </label>
                                        <input type="text" value={skills} className="input outline-none border-none resize-none" id='skill' placeholder="Type here" onChange={(e) => setskills(e.target.value)} />
                                    </div>
                                </fieldset>
                            </div>
                            {/* <p className=' text-red-500'>{error}</p> */}
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary " onClick={saveProfile}>Save</button>
                            </div>
                        </div>
                    </div>
                </div >

                <UserCard user={{ firstName, lastName, age, gender, photoURL, about }} />
            </div >
            {showToast && <div className="toast toast-top toast-start">
                {error && <div className="alert alert-info">
                    <span>{error}</span>
                </div>}
                <div className="alert alert-success">
                    <span>Profile Updated Successfully</span>
                </div>
            </div>}
        </div >
    )
}


export default EditProfile