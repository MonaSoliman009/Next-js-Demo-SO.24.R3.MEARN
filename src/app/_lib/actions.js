"use server"

import { revalidatePath } from "next/cache";
import { todoModel } from "./models/todo";
import { redirect } from "next/navigation";

export async function saveTodo(formdata) {
    
    const title = formdata.get("title")
    const status = formdata.get("status")

     try{
    const newTodo = await todoModel.create({ title, status })
    console.log(newTodo);


     }catch(err){
        console.log(err);

     }
     revalidatePath("/todos")

     redirect("/todos")
}
