import { Router } from 'express'
import { addDetails, deleteDetails, getAllDetails, getDetailsById, loginAdmin, register, updateDetails, getUserById, getUsers } from '../controllers/admins.js'
import { adminLoginMiddleware } from '../middlewares/authenticateAdmin.js'

export const router = Router()

router.get('/', (req, res) => {
  res.send('Hola Mundo')
})

// CRUD
router.get('/details', adminLoginMiddleware, getAllDetails)
router.get('/details/:id', adminLoginMiddleware, getDetailsById)
router.post('/details', adminLoginMiddleware, addDetails)
router.put('/details/:id', adminLoginMiddleware, updateDetails)
router.delete('/details/:id', adminLoginMiddleware, deleteDetails)

// Users Details
router.get('/users', adminLoginMiddleware, getUsers)
router.get('/users/:id', adminLoginMiddleware, getUserById)

// Login and Register

router.post('/login', loginAdmin)
router.post('/register', register)
