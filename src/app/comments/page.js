'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";

// eslint-disable-next-line @next/next/no-async-client-component
const Page = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments')
    let data = await response.json()
    let LimitData = data.slice(0,10)

    return (
        <div className='container mx-auto p-5 text-center'>
            <h3 className='text-primary'>Lets Comment List</h3>
            <div className='grid grid-cols-4 gap-3 mt-5'>
                {LimitData.map((item,i)=>{
                    return(
                        <div key={i} className='card shadow'>
                            <div className='card-body'>
                                <h1>No: {item.id}</h1>
                                <h3>Name: {item['name']}</h3>
                                <p>Comment: {item['body']}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Link className='btn btn-primary mt-3' href='/'>Home</Link><br/><br/>
        </div>
    );
};

export default Page;