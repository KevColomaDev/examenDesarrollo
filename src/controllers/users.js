import { models } from '../models/users.js'
import { validateLoginSchema, validateSchema, validateUserSchema, validateupdateSchema } from '../schemas/schemas.js'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()

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
    newUser.password = await models.encryptPassword(newUser.password)
    console.log(newUser.password)
    const result = await models.register(newUser)
    console.log(result)
    const { password, ...others } = result
    res.status(201).json({ message: 'User created successfully', result: others })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

/*
export const login = async (req, res) => {
  try {
    const userLogin = validateLoginSchema(req.body)
    const db = await connectDB()
    const collection = db.collection('Users')
    const result = await collection.findOne({ user: userLogin.user })
    console.log(result)
    if (result) {
      const pass = userLogin.password
      const validatePassword = await models.comparePassword(pass, result.password)
      console.log(validatePassword)
      if (validatePassword) {
        res.status(200).json({ message: 'Login successful', result })
      } else {
        res.status(401).json({ message: 'Invalid pass' })
      }
    } else {
      res.status(401).json({ message: 'Invalid user' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
*/

export const login = async (req, res) => {
  try {
    const userLogin = validateLoginSchema(req.body)
    const result = await models.login(userLogin.user, userLogin.password)
    const token = jwt.sign({ result }, process.env.TOKEN_SECRET, {
      expiresIn: '1d'
    })
    if (result) {
      const { _id, password, ...others } = result
      res.cookie('access_token_user', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
      })
      res.status(200).json({ message: 'Login successful', result: others })
    } else {
      res.status(401).json({ message: 'User or password invalid' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
