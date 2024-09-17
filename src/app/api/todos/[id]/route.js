import { todoModel } from "@/app/_lib/models/todo";

export async function GET(req, { params }) {
    try {
        const todo = await todoModel.findById(params.id)
        return new Response(JSON.stringify({ data: todo }))
    } catch (err) {
        return new Response(JSON.stringify({ message: err.message }), { status: 500 })

    }

}



// export async function PATCH(req, { params }) {


// }

// export async function DELETE(req, { params }) {


// }
