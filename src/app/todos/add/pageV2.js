"use client"
import React, { useState } from 'react';
import './add.css'
import { useRouter } from 'next/navigation'
const Page = () => {
    const [todo, setTodo] = useState({
        title: "",
        status: ""
    })
    const router = useRouter()


    const handleChange = (evt) => {

        setTodo({ ...todo, [evt.target.name]: evt.target.value })


    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch("http://localhost:3000/api/todos", {
            method: "POST",
            body: JSON.stringify(todo)
        })

        if (res.status == 201) {
            router.push('/todos')
        } else {
            console.log("failed");

        }

    }

    return (
        <div class="form_container">
            <form onSubmit={handleSubmit}>
                <label for="fname">Title</label>
                <input onChange={(e) => { handleChange(e) }} type="text" id="fname" name="title" placeholder="Your name.." />

                <label for="lname">Status</label>
                <input onChange={(e) => { handleChange(e) }} type="text" id="lname" name="status" placeholder="Your last name.." />



                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Page;
