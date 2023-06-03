import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
export const app: Application = express()

/* 
 ! middleware 
*/
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.send('Talha')
  } catch (error) {
    next()
  }
})

export default app
