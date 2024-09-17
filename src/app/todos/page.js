import React from 'react';
import { GET } from '../api/todos/route';


//static rendered
const Page =async () => {

  
  const res =await GET()
  const {data :todos}= await res.json()
  console.log(todos);
  
  


    return (
       <>
       <ul>
       {todos.map((t)=><li key={t._id}>{t.title}</li>)}

       </ul>
       </>
    );
}

// export const revalidate=60
export default Page;
