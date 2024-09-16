const { default: mongoose } = require("mongoose");


const todoSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    status:{
        type:String,
        default:"todo",
        enum:["todo","in Progress","completed"]
    }
})

export const todoModel=mongoose.models.Todo|| mongoose.model('Todo',todoSchema)

