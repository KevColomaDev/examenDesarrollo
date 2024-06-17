import { z } from 'zod'

const detailsSchema = z.object({
  sector: z.string(),
  mainStreet: z.string(),
  secondStreet: z.string(),
  city: z.string()
})

export const validateSchema = (data) => {
  const isValid = detailsSchema.safeParse(data)
  if (!isValid.success) {
    throw new Error('Invalid data')
  } else {
    return isValid.data
  }
}
