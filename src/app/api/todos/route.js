import { dbConnection } from "@/app/_lib/dbConnection";
import { todoModel } from "@/app/_lib/models/todo";



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
    try {
        const newTodo = await todoModel.create(todo)

        return new Response(JSON.stringify({ data: newTodo }), { status: 201 })

    } catch (err) {

        return new Response(JSON.stringify({ message: err.message }), { status: 500 })
    }






}


