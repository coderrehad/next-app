import React from 'react';
import Link from "next/link";

const Page = async () => {
   let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()
    let limitData = data.slice(0,10)
    return (
        <div className='container mx-auto my-5'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 mx-5 gap-5'>
                {
                    limitData.map((item, i) => {
                        return (
                            <Link key={i} href={`/posts/${item.id}`} className='card shadow'>
                                <h3 className='card-title p-2'>Latest</h3>
                                <figure>
                                    <img className='w-full h-[200px] object-cover'
                                         src='https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png'
                                         alt='next'/>
                                </figure>
                                <div className='card-body p-4'>
                                    <h3 className='card-title'>{item.id + '.'} {item['title']}</h3>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Page;