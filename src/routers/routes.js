import { Router } from 'express'
import { getAllDetails } from '../controllers/controllers.js'

export const router = Router()

router.get('/', (req, res) => {
  res.send('Hola Mundo')
})

router.get('/details', getAllDetails)
