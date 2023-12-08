import Router from "express";
import Register from "../controllers/auth/register.js";
import Login from '../controllers/auth/login.js'
let router = new Router()

router.post('/register', Register.createUser)
router.post('/login', Login.findUser)


export default router