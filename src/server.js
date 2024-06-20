import express from 'express'
import { router } from './routers/users.js'
import { router as admins } from './routers/admins.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

export const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

// Routes
app.use('/examen/v1', router)
app.use('/examen/v1/admin', admins)
