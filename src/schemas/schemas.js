import { z } from 'zod'

const detailsSchema = z.object({
  tema: z.string(),
  description: z.string(),
  direccion: z.string(),
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
