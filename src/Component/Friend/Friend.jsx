import React from 'react';
import "./Friend.css"
import { Link, useNavigate } from 'react-router-dom';



const Friend = ({friend}) => {

    const navigate = useNavigate()

    const handleNavigate = ()=>{
        navigate(`/friend/${id}`)


    }
    // console.log(friend)

    const {name,email,username,website,phone,id} = friend
    return (
        <div className='friend'>
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            <p>UserName : {username}</p>
            <p>Website : {website}</p>
            <p>Phone : {phone}</p>

            <p><Link to = {`/friend/${id}`}>Show Details</Link></p>

            <Link to={`/friend/${id}`}><button >Show More</button></Link>

            <button onClick={handleNavigate}>show more details</button>

           
            
        </div>
    );
};

export default Friend;