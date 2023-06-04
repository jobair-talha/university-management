import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)

    console.log(`Database connection successfully!`)

    app.listen(config.port, () => {
      console.log(`Application listening on port 5000`)
    })
  } catch (error) {
    console.log(`Failed to connect database`, error)
  }
}

main()
