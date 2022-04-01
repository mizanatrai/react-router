import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, [])

    return (
        <div>
            <h1>This is friends zone</h1>
            <p>Nothing to compromise...</p>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }

        </div>
    );
};

export default Friends;