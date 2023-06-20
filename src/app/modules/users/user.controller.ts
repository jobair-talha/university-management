import { RequestHandler } from 'express'
import { UserService } from './user.service'

const createNewUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body
    const newUser = await UserService.createUser(user)

    return res.json({
      status: true,
      data: newUser,
    })
  } catch (error) {
    next(error)
  }
}

export const UserController = {
  createNewUser,
}
