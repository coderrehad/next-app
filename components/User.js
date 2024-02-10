import React from 'react';

const User = async () => {

    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()

    return (
        <>
            <h3>User List</h3>
            <ul>
                {
                    data.map((item, i) => {
                        return (
                            <li key={i}>
                                <h3>{item['phone']}</h3>
                                <h6>{item['username']}</h6>
                                <p>{item['email']}</p>
                                <p>{item['website']}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
};

export default User;