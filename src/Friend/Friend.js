import React from 'react';
import { useNavigate } from 'react-router-dom';


const Friend = (props) => {
    const {name, username, email, id} = props.friend;


    let navigate = useNavigate;

    const showFriendDetail = () => {
        const path = `/friend/${id}`
        navigate(path)
    }

    return (
        <div>
            <h1>Name: {name}</h1>
            <p>email: {email}</p>
            <button onClick={showFriendDetail}>{username} : {id}</button>
            <p>I'm here...</p>
        </div>
    );
};

export default Friend;