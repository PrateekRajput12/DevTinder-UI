import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const [password, setpassword] = useState("Kaju@123")
    const [emailId, setemailId] = useState("kaju@gmail.com")
    const handleLogin = async () => {
        try {
            console.log("Sending data:", { emailId, password });
            const res = await axios.post('http://localhost:7070/login', {
                emailId,
                password
            },
                { withCredentials: true }
            )
            console.log("res", res);
        } catch (e) {
            console.error("Error in logging in:", e.response?.data || e.message);
        }
    }
    return (
        <div className='flex justify-center  items-center'>
            <div className="card card-border  mt-[3rem] bg-base-300 w-96">
                <div className="card-body">
                    <h2 className="card-title   justify-center">Login</h2>
                    {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                    <div className=''>
                        <fieldset className="fieldset flex flex-col gap-[1rem] ">
                            {/* <legend className="fieldset-legend">EmailId ID</legend> */}
                            <div>
                                <label htmlFor='emailId'>
                                    EmailId Id
                                </label>
                                <input type="emailId" value={emailId} className="input outline-none border-none" id='emailId' placeholder="Type here" onChange={(e) => setemailId(e.target.value)} />
                            </div>
                            {/* <p className="fieldset-label">Optional</p> */}
                            <div>
                                <label htmlFor='password'>
                                    Password
                                </label>
                                <input type="password" value={password} className="input outline-none border-none" id='password' placeholder="Type here" onChange={(e) => setpassword(e.target.value)} />
                            </div>
                        </fieldset>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary " onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login