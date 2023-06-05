import { User } from './user.model'

export const findLastUserId = async (): Promise<string | undefined> => {
  try {
    const lastUser = await User.findOne({}, { _id: 0 })
      .sort({ createdAt: -1 })
      .lean()

    return lastUser?.id
  } catch (error) {
    return undefined
  }
}

export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')
  const incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0')

  return incrementId
}
