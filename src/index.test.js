import { describe, it, expect } from 'vitest'
import { models } from './models/users'

describe('models', () => {
  it('should return an error', async () => {
    const result = await models.login('test', 'test')
    expect(result).toBe(null)
  })
})

describe('models', () => {
  it('should register a new user', async () => {
    // Change data to test because it's a new user
    const newUser = {
      name: 'test1',
      lastName: 'test1',
      sector: 'test1',
      user: 'test3',
      password: 'test1'
    }
    const result = await models.register(newUser)
    console.log(result)

    expect(result).toEqual(newUser)
  })
})

describe('models', () => {
  it('should return all details', async () => {
    const result = await models.getDetails()
    expect(result).toBeInstanceOf(Array)
  })
})

describe('models', () => {
  it('should add details', async () => {
    const newDataDetails = {
      tema: 'test',
      description: 'test',
      direccion: 'test',
      solution: 'test'
    }
    const result = await models.addDetails(newDataDetails)
    expect(result).toEqual(newDataDetails)
  })
})
