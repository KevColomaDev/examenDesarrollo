import mongoose from 'mongoose'
import { connectDB } from '../database.js'
import { models } from './users.js'

// Logic for CRUD
export const modelsAdmin = {
  async register (user) {
    try {
      const db = await connectDB()
      const collection = db.collection('Admins')
      await collection.insertOne(user)
      await collection.createIndex({ user: 1 }, { unique: true })
      return user
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async loginAdmin (userValidate, passwordValidate) {
    const db = await connectDB()
    const collection = db.collection('Admins')
    const result = await collection.findOne({ user: userValidate })
    if (result) {
      const pass = passwordValidate
      const validatePassword = await models.comparePassword(pass, result.password)
      if (validatePassword) {
        return result
      } else {
        return null
      }
    } else {
      return null
    }
  },
  async getDetails () {
    try {
      const db = await connectDB()
      const collection = db.collection('Problems')
      const details = await collection.find({}).toArray()
      return details
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async getDetailsById (id) {
    try {
      const db = await connectDB()
      const collection = db.collection('Problems')
      id = new mongoose.Types.ObjectId(id)
      const details = await collection.findOne({ _id: id })
      return details
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async addDetails (details) {
    try {
      const db = await connectDB()
      const collection = db.collection('Problems')
      await collection.insertOne(details)
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async updateDetails (id, details) {
    try {
      const db = await connectDB()
      const collection = db.collection('Problems')
      id = new mongoose.Types.ObjectId(id)
      await collection.updateOne({ _id: id }, { $set: details })
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async deleteDetails (id) {
    try {
      const db = await connectDB()
      const collection = db.collection('Problems')
      id = new mongoose.Types.ObjectId(id)
      await collection.deleteOne({ _id: id })
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async getUsers () {
    try {
      const db = await connectDB()
      const collection = db.collection('Users')
      const users = await collection.find({}).toArray()
      return users
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async getUserById (id) {
    try {
      const db = await connectDB()
      const collection = db.collection('Users')
      id = new mongoose.Types.ObjectId(id)
      const user = await collection.findOne({ _id: id })
      return user
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
