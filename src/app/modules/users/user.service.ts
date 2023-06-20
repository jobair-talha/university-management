import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { IUser } from './uer.interface'
import { User } from './user.model'
import { generateUserId } from './user.utills'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  // ? default password
  const id = await generateUserId()
  user.id = id

  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)

  if (!createUser) {
    throw new ApiError(400, 'Failed to create user')
  }

  return createdUser
}

export const UserService = {
  createUser,
}
