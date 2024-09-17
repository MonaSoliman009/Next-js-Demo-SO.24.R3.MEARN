import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProducts } from '@/app/_lib/data-service';
import styles from '@/app/products/products.module.css'
const ProductList = async() => {
    
    const { data: products } = await getAllProducts()

    console.log(products);
    return (

        <>
            {products.map((prd) => <Link className={styles.card} href={`/products/${prd.id}`} key={prd.id}  >

                <div >
                    <Image  width={100} height={300} layout='responsive' src={prd.image} alt="Avatar" style={{ width: "100%" }} />
                    <div className={styles.container}>
                        <h4>{prd.title}</h4>
                        <p>{prd.description}</p>
                    </div>
                </div>
            </Link>)}

        </>

    );
}

export default ProductList;
