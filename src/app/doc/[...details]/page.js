'use client';

import {useParams} from "next/navigation";

function DocPage() {
    const params = useParams();
    console.log(params.details)

    if(params.details.length === 3){
        return (
            <h1>This is Doc {params.details[0]} and {params.details[1]} and {params.details[2]}</h1>
        )
    }
    if(params.details.length === 2){
        return (
            <h1>This is Doc {params.details[0]} and {params.details[1]}</h1>
        )
    }
    if(params.details.length === 1){
        return (
            <h1>This is Doc {params.details[0]}</h1>
        )
    }

    return(
        <h1>Go Back <a href='/'>Home</a></h1>
    )
}

export default DocPage;