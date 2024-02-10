import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <>
            <h1>Home page</h1>
            <h1><Link href='/product'>Product</Link></h1><br/>
            <Link href='/posts'>Posts</Link>
        </>
    );
};

export default Page;