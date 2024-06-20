import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()

export const adminLoginMiddleware = async (req, res, next) => {
  const token = req.cookies.access_token_admin
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: 'No admin token provided' })
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    req.admin = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' })
  }
}
