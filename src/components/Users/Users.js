import React, { useEffect, useRef, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const shouldLog = useRef(true);
    const [users, setUsers] = useState([]);

    useEffect( () => {
        if(shouldLog.current){
            shouldLog.current=false;
            fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => setUsers(data.results))
        }       
    }, [])

    return (
        <div>
            {
                users.map(user => console.log(user))
            }
            {
                users.map(user => <User user={user} key={user.login.uuid}></User>)
            }
        </div>
    );
};

export default Users;