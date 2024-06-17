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
  }
}
