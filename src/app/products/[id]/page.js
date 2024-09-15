import { redirect } from 'next/navigation';
import React from 'react';

const Page = async({params:{id}}) => {
let product;
    // try{
        const res =await fetch(`https://fakestoreapi.com/products/${id}`)
        product= await res.json()
    // }catch{
    //     redirect('/not-found')

    // }


    
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
        </div>
    );
}

export default Page;
