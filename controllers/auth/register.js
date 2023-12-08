import register from '../../schema/auth/register.js'
import Jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
class Register {
    async createUser(req, res) {
        try {
            const { firstname, lastname, email, password, conf_password } = req.body
            const newUser = await register.create({ firstname, lastname, email, password, conf_password })
            const secretKey = process.env.JWT_SECRET
            const token = Jwt.sign(
                {
                    userId: newUser._id,
                    email: newUser.email,
                },
                secretKey,
                { expiresIn: '1h' }
            )
            res.json({
                token,
                status: "success",
                message: "User created successfully"
            })
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new Register



