'use client';

import {useParams} from "next/navigation";

function ReviewDetails() {
    const params = useParams()
    return(
        <h1>Review {params.reviewId} for Product {params.productId}</h1>
    )
}


export default ReviewDetails;