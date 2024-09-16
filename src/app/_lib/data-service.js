export async function getAllProducts(){

    try{
        const res = await fetch('https://fakestoreapi.com/products')
        const products = await res.json()
       
        return {data:products,staus:res.status}
    }catch(err){

        return err
    }
  
}
export async function getSingleProducts(id){

    try{
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const product = await res.json()
       
        return {data:product,staus:res.status}
    }catch(err){

        return err
    }
  
}