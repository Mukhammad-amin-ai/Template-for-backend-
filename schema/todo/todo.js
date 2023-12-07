import mongoose from "mongoose";

const Todo = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
})


export default mongoose.model("todo", Todo)