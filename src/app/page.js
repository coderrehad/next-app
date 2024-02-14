import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <>
            <h1>Home page</h1><br/><br/>
            <Link className='btn btn-primary' href='/product'>Product</Link><br/><br/>
            <Link className='btn btn-primary' href='/posts'>Posts</Link><br/><br/>
            <Link className='btn btn-primary' href='/comments'>Comments</Link><br/><br/>
        </>
    );
};

export default Page;