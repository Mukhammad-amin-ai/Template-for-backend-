import mongoose from 'mongoose'

const Login = new mongoose.Schema({
    email: {
        type: String, required: true, lowercase: true,
    },
    password: { type: String, required: true }
})

export default mongoose.model('login', Login)
