import { NextFunction, Request, Response } from 'express'
import { createUser } from './user.service'

export const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req.body
    const newUser = await createUser(user)

    return res.json({
      status: true,
      data: newUser,
    })
  } catch (error) {
    next()
  }
}
