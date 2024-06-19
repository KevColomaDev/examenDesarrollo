import { z } from 'zod'

// Details
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

// Users
const userSchema = z.object({
  name: z.string().trim(),
  lastName: z.string().trim(),
  sector: z.string().trim(),
  user: z.string().trim(),
  password: z.string()
})

export const validateUserSchema = (data) => {
  const isValid = userSchema.safeParse(data)
  if (isValid.success) {
    return isValid.data
  } else {
    throw new Error(isValid.error)
  }
}

const loginSchema = z.object({
  user: z.string().trim(),
  password: z.string()
})

export const validateLoginSchema = (data) => {
  const isValid = loginSchema.safeParse(data)
  if (isValid.success) {
    return isValid.data
  } else {
    throw new Error(isValid.error)
  }
}
