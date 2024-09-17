import mongoose from "mongoose";

export function dbConnection(){
    
    mongoose.connect(`mongodb+srv://monsoliman:${process.env.SECRET}@cluster0.ag3im.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(()=>{

    // mongoose.connect('mongodb://127.0.0.1:27017/MEARNSONext').then(()=>{
        console.log("connected to db");
        
    }).catch((err)=>{
        console.log(err);
        
    })

}