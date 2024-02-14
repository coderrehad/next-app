import React from 'react';
import Link from "next/link";

const Page = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()
    let LimitData = data.splice(0,10)

    return (
        <div className='container mx-auto p-5 text-center'>
            <h3 className='text-primary'>Lets News List</h3>
            <div className='grid grid-cols-4 gap-3 mt-5'>
                {LimitData.map((item, i) => {
                    return (
                        <Link href={`/news/${item.id}`} key={i} className='card shadow'>
                            <div className='card-body'>
                                <span>{item.id}</span>
                                <h3>{item['title']}</h3>
                                <p>{item['body']}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <Link className='btn btn-primary mt-3' href='/'>Home</Link><br/><br/>
        </div>
    );
};

export default Page;