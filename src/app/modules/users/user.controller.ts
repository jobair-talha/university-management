import { Request, Response } from 'express'
import { createUser } from './user.service'

export const createNewUser = async (req: Request, res: Response) => {
  const user = await createUser({
    role: 'student',
    id: '0001',
    password: 'new',
  })

  return res.json({
    status: true,
    user,
  })
}
