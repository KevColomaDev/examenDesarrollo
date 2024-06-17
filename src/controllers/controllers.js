import { models } from '../models/models.js'

export const getAllDetails = async (req, res) => {
  const details = await models.getDetails()
  res.send(details)
}
