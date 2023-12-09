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
// LOGIN=========================================================
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

// GET====================================================================
/**
 * @swagger
 * /api/todo:
 *   get:
 *     summary: get all todo's
 *     tags: [Todo]
 *     responses:
 *       '200':
 *         description: Successfully retrieved todos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse4'
 *       '500':
 *         description: Internal server error
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterRequest4:
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
 *     RegisterResponse4:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: ID of the created user
 *         description:
 *           type: string
 *           description: A success message
 */


// PUT==========================================================================
/**
 * @swagger
 * /api/todo/{id}:
 *   put:
 *     summary: Update a todo by ID
 *     tags: [Todo]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the todo to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest5'
 *     responses:
 *       '200':
 *         description: Successfully updated todo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse5'
 *       '500':
 *         description: Internal server error
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterRequest5:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Todo title
 *         description:
 *           type: string
 *           description: Todo description
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterResponse5:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Updated title
 *         description:
 *           type: string
 *           description: Updated description
 */

//DELETE==========================================================
/**
 * @swagger
 * /api/todo/{id}:
 *   delete:
 *     summary: Delete a todo by ID
 *     tags: [Todo]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the todo to delete
 *     responses:
 *       '204':
 *         description: Successfully deleted todo
 *       '404':
 *         description: Todo not found
 *       '500':
 *         description: Internal server error
 */
