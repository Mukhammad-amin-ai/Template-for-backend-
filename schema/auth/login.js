import mongoose from 'mongoose'

const Login = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, reuqired: true }
})

export default mongoose.model('login', Login)
