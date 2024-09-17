
import React from 'react';
import './add.css'
import { todoModel } from '@/app/_lib/models/todo';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { saveTodo } from '@/app/_lib/actions';

const Page = () => {

   

    return (
        <div className="form_container">
            <form action={saveTodo}>
                <label for="fname">Title</label>
                <input type="text" id="fname" name="title" placeholder="Your title.." />

                <label for="lname">Status</label>
                <input type="text" id="lname" name="status" placeholder="Your status.." />



                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Page;
