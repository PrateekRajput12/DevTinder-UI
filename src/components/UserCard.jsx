import React from 'react'

const UserCard = ({ user }) => {
    // console.log(user);
    // console.log(user.photoURL);
    const { firstName, lastName, photoURL, skills, about, age, gender } = user
    console.log(about);
    return (
        <div className="card bg-base-300 w-96 shadow-sm">
            <figure>
                <img
                    src={photoURL}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                <p > {age && <span>{age} </span>} , {gender && <span> {gender}</span>}</p>
                {/* {about && <p>{about} </p>} */}
                <p>{about}</p>
                {skills && <p>{skills}</p>}

                <div className="card-actions justify-center my-4">
                    <button className="btn btn-primary ">Ignore </button>
                    <button className="btn btn-secondary">Interested</button>

                </div>
            </div>
        </div >)
}

export default UserCard