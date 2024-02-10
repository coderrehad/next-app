'use client';

import {useParams} from "next/navigation";
import {useRouter} from "next/navigation";

function ProductDetails() {
    const params = useParams();

    const router = useRouter()
    const Submit = ()=>{
        console.log("Your Order Placed")
        router.push('/')
    }
    return(
        <>
            <h1>About details product {params.productId}</h1>
            <button onClick={Submit}>Place Order</button>
        </>
    )
}

export default ProductDetails;