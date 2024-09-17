import { dbConnection } from "@/app/_lib/dbConnection";
import { todoModel } from "@/app/_lib/models/todo";
import schema from "./schema";



dbConnection()

export async function GET() {
    try {
        const todos = await todoModel.find()
        return new Response(JSON.stringify({ data: todos }), { status: 200 })
    } catch (err) {

        return new Response(JSON.stringify({ message: err.message }), { status: 500 })
    }


}

export async function POST(request) {

    console.log(request);
    

    const todo = await request.json()

    const validation = schema.safeParse(todo)
    console.log(validation);

    if(!validation.success){

        return new Response(JSON.stringify({ message:validation.error.errors}),{status:400})
    }
    //joi
    
    try {
        const newTodo = await todoModel.create(todo)

        return new Response(JSON.stringify({ data: newTodo }), { status: 201 })

    } catch (err) {

        return new Response(JSON.stringify({ message: err.message }), { status: 500 })
    }






}


