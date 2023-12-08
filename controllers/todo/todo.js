import todo from '../../schema/todo/todo.js'

class Todo {
    async createTodo(req, res) {
        try {
            const { title, description } = req.body
            const todoCreate = await todo.create({ title, description })
            res.json({ todoCreate, message: 'todo created succesfully' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    async getAll(req, res) {
        try {
            const data = await todo.find()
            return res.json(data)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                return res.status(400).json({ message: "There is no id" })
            }
            const data = await todo.findById(id)
            return res.json(data)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    async update(req, res) {
        try {
            const todos = req.body
            if (!todos._id) {
                return res.status(400).json({ message: "There is no id" })
            }
            const updateTodo = await todo.findByIdAndUpdate(todos._id, todos, { new: true })
            return res.json({ updateTodo, message: "todo updated successfully" })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    async deleteFunc(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                return res.status(400).json({ message: "There is no id" })
            }
            const delet = await todo.findByIdAndDelete(id)
            return res.json({ message: "todo deleted succesfully" })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

export default new Todo