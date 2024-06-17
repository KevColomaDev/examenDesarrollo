import { connectDB } from '../database.js'

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
      const details = await collection.findOne({ id })
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
      await collection.updateOne({ id }, { $set: details })
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async deleteDetails (id) {
    try {
      const db = await connectDB()
      const collection = db.collection('development')
      await collection.deleteOne({ id })
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
