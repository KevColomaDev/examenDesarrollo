import { Router } from 'express'
import { addDetails, deleteDetails, getAllDetails, getDetailsById, login, register, updateDetails, getUserById, getUsers } from '../controllers/admins.js'

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

// Users Details
router.get('/users', getUsers)
router.get('/users/:id', getUserById)

// Login and Register

router.post('/login', login)
router.post('/register', register)
