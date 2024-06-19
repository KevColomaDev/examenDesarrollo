import { Router } from 'express'
import { addDetails, deleteDetails, getAllDetails, getDetailsById, login, register, updateDetails } from '../controllers/users.js'

export const router = Router()

router.get('/', (req, res) => {
  res.send('Hola Mundo')
})

// CRUD
router.get('/details', getAllDetails)
router.get('/details/:id', getDetailsById)
router.post('/details', addDetails)
router.put('/details/:id', updateDetails)
router.delete('/details/:id', deleteDetails)

// Login and Register

router.post('/login', login)
router.post('/register', register)
