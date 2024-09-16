import { Suspense } from 'react';
import ProductList from '../_components/productList';
import styles from './products.module.css'


export const metadata = {
    title: "Products"
}
const Page = async () => {
    return (
        <>
            <h1>Products Page</h1>
            <p>This is a product page to display products from Api</p>
            <div className={styles.parent}>
                <Suspense fallback={<>Loading Products.....</>}>

                <ProductList/>
                </Suspense>
         

            </div>



        </>

    );
}

export const revalidate=60  //isr
export default Page;
