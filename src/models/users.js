import { connectDB } from '../database.js'
import mongoose from 'mongoose'

export const models = {
  async getDetails () {
    try {
      const db = await connectDB()
      const collection = db.collection('development')
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
      const collection = db.collection('development')
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
      const collection = db.collection('development')
      await collection.insertOne(details)
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async updateDetails (id, details) {
    try {
      const db = await connectDB()
      const collection = db.collection('development')
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
      const collection = db.collection('development')
      id = new mongoose.Types.ObjectId(id)
      await collection.deleteOne({ _id: id })
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
