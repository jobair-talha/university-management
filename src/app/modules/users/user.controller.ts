import { Request, Response } from 'express'
import { createUser } from './user.service'

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const newUser = await createUser(user)

    return res.json({
      status: true,
      data: newUser,
    })
  } catch (error) {
    res.status(200).json({
      status: false,
      message: 'Failed to create user',
    })
  }
}
