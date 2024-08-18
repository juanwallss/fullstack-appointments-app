import mongoose from 'mongoose'

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    const connection = mongoose.connection

    connection.on('connected', () => {
      console.log('Connected to MongoDB')
    })
    connection.on('error', (err) => {
      console.error('Error connecting to MongoDB:', err)
    })
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}
