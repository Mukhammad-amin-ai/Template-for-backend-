import mongoose from "mongoose";

const Register = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    conf_password: { type: String, required: true }
})

export default mongoose.model('register', Register)