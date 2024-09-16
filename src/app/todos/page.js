import React from 'react';
import { todoModel } from '../_lib/models/todo';
import { GET } from '../api/todos/route';

const Page =async () => {

  const res =await GET()
  const {data :todos}= await res.json()
  console.log(todos);
  
  


    return (
       <>
       {todos.map((t)=><li key={t._id}>{t.title}</li>)}
       </>
    );
}

export default Page;
