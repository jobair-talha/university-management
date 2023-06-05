import config from '../../../config'
import { IUser } from './uer.interface'
import { User } from './user.model'
import { generateUserId } from './user.utills'

export const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  // ? default password
  const id = await generateUserId()
  user.id = id

  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to create user')
  }

  return createdUser
}
