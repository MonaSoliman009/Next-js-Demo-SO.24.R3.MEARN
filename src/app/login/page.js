import React from 'react';
import { signIn } from '../_lib/auth';

const Page = () => {

  async  function login(){
        "use server"

        await  signIn("google",{redirectTo:"/"})
    }
    return (
        <>
          <h1>
            Login
        </h1>

       <form action={login} >
       <button type="submit">Login using gmail</button>
       </form>
       
        
        </>
      
    );
}

export default Page;
