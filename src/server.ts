import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)

    logger.info(`Database connect successfully!`)

    app.listen(config.port, () => {
      logger.info(`Application listening on http://localhost/5000`)
    })
  } catch (error) {
    errorLogger.error(`Failed to connect database`, error)
  }
}

main()
