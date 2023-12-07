import Router from "express";
import Register from "../controllers/auth/register.js";

let router = new Router()

router.post('/register', Register.createUser)



export default router