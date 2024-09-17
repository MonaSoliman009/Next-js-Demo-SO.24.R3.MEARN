"use client"

import { useState } from "react";

const Page = () => {

    
   const [counter , setCounter]= useState(0)
    return (
        <div>
            {counter}
            <button onClick={()=>{setCounter((prev)=>prev+1)}}>+</button>
        </div>
    );
}

export default Page;
