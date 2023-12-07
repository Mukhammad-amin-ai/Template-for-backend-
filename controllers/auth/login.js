import login from '../../schema/auth/login.js'

class Login {
    async create(req, res) {
        try {
            const { email, password } = req.body
            const login = await login.create({ email, password })
            res.json(login)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new Login