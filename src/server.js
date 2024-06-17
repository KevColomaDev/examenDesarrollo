import express from 'express'
import { router } from './routers/routes.js'

export const app = express()

app.use(express.json())

// Routes
app.use('/examen/v1', router)
