import login from '../../schema/auth/login.js'
import Jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
class Login {
    async findUser(req, res) {
        try {
            const { email, password } = req.body
            const loginUser = await login.find({ email, password })
            const secretKey = process.env.JWT_SECRET
            const token = Jwt.sign(
                {   
                    userId: loginUser._id,
                    email: loginUser.email,
                },
                secretKey,
                { expiresIn: '1h' }
            )
            res.json({
                token,
                status: "success",
                message: "User logined successfully"
            })
            console.log(email);
            console.log(password);
        } catch (e) {
            console.error(e);
            res.status(500).json(e)
        }
    }

}

export default new Login