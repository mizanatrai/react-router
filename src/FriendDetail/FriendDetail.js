import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    const [friend, setFriend] = useState({});

    const {friendID} = useParams();

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendID}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, []);

    return (
        <div>
            <h1>This  is the details page about my dostow</h1>
            <p>ID no: {friendID}</p>
            <h1>Name: {friend.name} </h1>
            <h2>Phone: {friend.phone} </h2>
            <p><small>Website: {friend.website} </small></p>
        </div>
    );
};

export default FriendDetail;