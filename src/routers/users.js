import { Router } from 'express'
import { addDetails, deleteDetails, getAllDetails, getDetailsById, updateDetails } from '../controllers/users.js'

export const router = Router()

router.get('/', (req, res) => {
  res.send('Hola Mundo')
})

router.get('/details', getAllDetails)
router.get('/details/:id', getDetailsById)
router.post('/details', addDetails)
router.put('/details/:id', updateDetails)
router.delete('/details/:id', deleteDetails)
