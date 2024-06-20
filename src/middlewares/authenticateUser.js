import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()

export const userLoginMiddleware = async (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) {
    return res.status(401).json({ message: 'No token provided' })
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' })
  }
}
