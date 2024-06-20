import { Router } from 'express'
import { addDetails, deleteDetails, getAllDetails, getDetailsById, login, register, updateDetails } from '../controllers/users.js'
import { userLoginMiddleware } from '../middlewares/authenticateUser.js'

export const router = Router()

router.get('/', (req, res) => {
  res.send('Hola Mundo')
})

// CRUD
router.get('/details', getAllDetails)
router.get('/details/:id', getDetailsById)
router.post('/details', userLoginMiddleware, addDetails)
router.put('/details/:id', userLoginMiddleware, updateDetails)
router.delete('/details/:id', userLoginMiddleware, deleteDetails)

// Login and Register

router.post('/login', login)
router.post('/register', register)
