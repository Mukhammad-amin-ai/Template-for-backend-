import Router from "express";
import Register from "../controllers/auth/register.js";
import Login from '../controllers/auth/login.js'
import todo from "../controllers/todo/todo.js";
let router = new Router()

// Authentification

router.post('/register', Register.createUser)
router.post('/login', Login.findUser)

// Todo

router.post('/todo', todo.createTodo)
router.get('/todo', todo.getAll)
router.get('/todo/:id', todo.getOne)
router.put('/todo', todo.update)
router.delete('/todo/:id', todo.deleteFunc)

export default router