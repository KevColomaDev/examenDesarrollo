import mongoose from 'mongoose'
import { config } from 'dotenv'
config()

const uri = process.env.MONGO_URI

export const connectDB = async () => {
  try {
    await mongoose.connect(uri)
    console.log('MongoDB connected')
    mongoose.set('strictQuery', true)
    const client = mongoose.connection.getClient()

    return client.db()
  } catch (error) {
    console.log(error)
  }
}
