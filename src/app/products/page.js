import Link from 'next/link';
import styles from './products.module.css'
const Page = async () => {

    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()

    console.log(products);


    return (
        <>
        <div className={styles.parent}>
        {products.map((prd) =><Link className={styles.card} href={`/products/${prd.id}`}  key={prd.id}  >
        
            <div >
                <img src={prd.image} alt="Avatar" style={{ width: "100%" }} />
                <div className={styles.container}>
                    <h4>{prd.title}</h4>
                    <p>{prd.description}</p>
                </div>
            </div>
        </Link>)}

        </div>
       


        </>

    );
}

export default Page;
