'use client'
import React from 'react';
import {useParams} from "next/navigation";

// eslint-disable-next-line @next/next/no-async-client-component
const NewsDetails = async () => {
    const params = useParams();
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.Id}`);
    let data = await response.json()
    console.log(data)
    return (
        <div className='container mx-auto p-5 text-center'>
            <h3 className='text-primary'>Lets News Details</h3>
            <div className='grid grid-cols-1 mt-5'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <span>{data.id}</span>
                        <h3>{data['title']}</h3>
                        <p>{data['body']}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;