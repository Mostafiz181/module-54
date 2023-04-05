import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import "./FriendDetails.css"

const FriendDetails = () => {
    const friend = useLoaderData();

    const navigate = useNavigate()

    const handleBack =()=>{
        navigate(-1)
    }
    return (
        <div className='friend-details'>
            <h3>Name : {friend.name}</h3>
            <p>Email : {friend.email}</p>

            <button onClick={handleBack}>Back</button>
        </div>
    );
};

export default FriendDetails;