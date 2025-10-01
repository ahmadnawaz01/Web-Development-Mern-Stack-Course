import express from "express";
import mongoose from "mongoose";
import { Todo } from "./models/todo.js";

const app = express();
const port = 3000;

let a = await mongoose.connect("mongodb://localhost:27017/mydatabase");
console.log(" Connected to MongoDB");

app.get("/", async(req, res) => {
    const todo = new Todo({ title: "hey my first todo", des: "Description of first todo", isDone: false,day:"4"
     })
    await todo.save()
    res.send("Hello World from ESM!");
});
app.get("/a", async(req, res) => {

    let todo=await Todo.findOne({})
    console.log(todo);
    
    res.json({title:todo.title,des:todo.des});
});

app.listen(port, () => {
    console.log(` Server running at http://localhost:${port}`);
});