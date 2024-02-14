'use client'
import React from 'react';
import {useParams} from "next/navigation";
import Link from "next/link";

// eslint-disable-next-line @next/next/no-async-client-component
const PostDetails = async () => {
    let params = useParams()

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.Id}`)
    const data = await response.json()
    return (
        <div className='container mx-auto py-5'>
            <Link href='/posts' className='btn btn-primary mx-5'>Go Back</Link>
            <div className='card shadow m-5'>
                <img alt='' className='w-full h-screen object-cover' src='https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png'/>
                <div className='card-body p-4'>
                    <h3 className='card-title'>{data.id+'.'} {data['title']}</h3>
                    <p>{data['body']}</p>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;