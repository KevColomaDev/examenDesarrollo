import { z } from 'zod'

const detailsSchema = z.object({
  tema: z.string(),
  description: z.string(),
  direccion: z.string(),
  solution: z.string().optional()
})

const detailsupdateSchema = z.object({
  tema: z.string().optional(),
  description: z.string().optional(),
  direccion: z.string().optional(),
  solution: z.string().optional()
})

export const validateSchema = (data) => {
  const isValid = detailsSchema.safeParse(data)
  if (isValid.success) {
    return isValid.data
  } else {
    throw new Error(isValid.error)
  }
}

export const validateupdateSchema = (data) => {
  const isValid = detailsupdateSchema.safeParse(data)
  if (isValid.success) {
    return isValid.data
  } else {
    throw new Error(isValid.error)
  }
}
