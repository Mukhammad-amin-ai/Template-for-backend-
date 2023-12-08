// REGISTRATION
/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Create a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *     responses:
 *       '200':
 *         description: Successfully created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse'
 *       '500':
 *         description: Internal server error
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterRequest:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           description: First name of the user
 *         lastname:
 *           type: string
 *           description: Last name of the user
 *         password:
 *           type: string
 *           description: User password
 *         email:
 *           type: string
 *           description: User email
 *         conf_password:
 *           type: string
 *           description: Confirm password
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterResponse:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           description: ID of the created user
 *         message:
 *           type: string
 *           description: A success message
 */
// LOGIN
/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Create a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest2'
 *     responses:
 *       '200':
 *         description: Successfully created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse2'
 *       '500':
 *         description: Internal server error
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterRequest2:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: User email
 *         password:
 *           type: string
 *           description: User password
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterResponse2:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           description: ID of the created user
 *         message:
 *           type: string
 *           description: A success message
 */


// TODO======================================================================
// POST
/**
 * @swagger
 * /api/todo:
 *   post:
 *     summary: Create a new user
 *     tags: [Todo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest3'
 *     responses:
 *       '200':
 *         description: Successfully created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse3'
 *       '500':
 *         description: Internal server error
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterRequest3:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: User email
 *         description:
 *           type: string
 *           description: User password
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterResponse3:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           description: ID of the created user
 *         message:
 *           type: string
 *           description: A success message
 */




