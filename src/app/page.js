import { auth } from "./_lib/auth";


export default async function Home() {

 const obj=await auth()
 console.log(obj);
 
  return (
    <>

    {(obj)?<h1>Welcome {obj.user.name}</h1>:<h1>Please login first</h1>}  
    </>
  );
}
