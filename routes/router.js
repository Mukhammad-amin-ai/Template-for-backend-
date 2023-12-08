import Router from "express";
import Register from "../controllers/auth/register.js";
import Login from '../controllers/auth/login.js'
import todo from "../controllers/todo/todo.js";
let router = new Router()

// Authentification
// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     Book:
//  *       type: object
//  *       required:
//  *         - title
//  *         - author
//  *         - finished
//  *       properties:
//  *         id:
//  *           type: string
//  *           description: The auto-generated id of the book
//  *         title:
//  *           type: string
//  *           description: The title of your book
//  *         author:
//  *           type: string
//  *           description: The book author
//  *         finished:
//  *           type: boolean
//  *           description: Whether you have finished reading the book
//  *         createdAt:
//  *           type: string
//  *           format: date
//  *           description: The date the book was added
//  *       example:
//  *         id: d5fE_asz
//  *         title: The New Turing Omnibus
//  *         author: Alexander K. Dewdney
//  *         finished: false
//  *         createdAt: 2020-03-10T04:05:06.157Z
//  */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentification to  managing API
 * /api/register:
 *   post:
 *     summary: Create a new todo
 *     tags: [register]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: 'api/register'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: 'api/register'
 *       500:
 *         description: Some server error
 *
 */






router.post('/register', Register.createUser)
router.post('/login', Login.findUser)

// Todo

router.post('/todo', todo.createTodo)
router.get('/todo', todo.getAll)
router.get('/todo/:id', todo.getOne)
router.put('/todo', todo.update)
router.delete('/todo/:id', todo.deleteFunc)

export default router