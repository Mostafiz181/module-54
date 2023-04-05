import React from 'react';
import { useLoaderData } from 'react-router-dom';
import "./FriendDetails.css"

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div className='friend-details'>
            <h3>Name : {friend.name}</h3>
            <p>Email : {friend.email}</p>
        </div>
    );
};

export default FriendDetails;