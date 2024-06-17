import { models } from '../models/models.js'
import { validateSchema } from '../schemas/schemas.js'

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
    await models.updateDetails(req.params.id, req.body)
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
