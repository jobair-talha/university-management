import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.routes'
export const app: Application = express()

/* 
 ! middleware 
*/
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user', UserRoutes)

// Global Error
app.use(globalErrorHandler)

export default app
