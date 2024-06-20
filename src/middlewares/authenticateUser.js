import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()

export const adminMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token
    if (!token) {
      return res.status(401).json({ message: 'No token provided' })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' })
    }
    req.user = decoded
    next()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}