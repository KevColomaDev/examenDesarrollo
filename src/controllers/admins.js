import { modelsAdmin as models } from '../models/admins.js'
import { validateLoginSchema, validateSchema, validateUserSchema, validateupdateSchema } from '../schemas/schemas.js'
import { models as modelsUser } from '../models/users.js'

export const getAllDetails = async (req, res) => {
  try {
    const details = await models.getDetails()
    res.json(details)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getDetailsById = async (req, res) => {
  try {
    const details = await models.getDetailsById(req.params.id)
    res.json(details)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const addDetails = async (req, res) => {
  try {
    const newDataDetails = validateSchema(req.body)
    const result = await models.addDetails(newDataDetails)
    res.status(201).json({ message: 'Details added successfully', result })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateDetails = async (req, res) => {
  try {
    const id = req.params.id
    const newDataDetails = validateupdateSchema(req.body)
    await models.updateDetails(id, newDataDetails)
    res.status(200).json({ message: 'Details updated successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteDetails = async (req, res) => {
  try {
    await models.deleteDetails(req.params.id)
    res.status(200).json({ message: 'Details deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const register = async (req, res) => {
  try {
    const newUser = validateUserSchema(req.body)
    console.log(newUser.password)
    newUser.password = await modelsUser.encryptPassword(newUser.password)
    console.log(newUser.password)
    const result = await models.register(newUser)
    res.status(201).json({ message: 'User created successfully', result })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const login = async (req, res) => {
  try {
    const userLogin = validateLoginSchema(req.body)
    const result = await models.login(userLogin.user, userLogin.password)
    if (result) {
      res.status(200).json({ message: 'Login successful', result })
    } else {
      res.status(401).json({ message: 'User or password invalid' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await models.getUsers()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await models.getUserById(req.params.id)
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
