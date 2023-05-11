import { connect, connection } from "mongoose"

const URI: string = process.env.MONGO_URI || ''

const conn = {
  isConnected: false,
}

console.log('connect')
const connectDB = async () => {
  if (conn.isConnected) return

  try {

    await connect(URI)
    console.log("MongoDB Connected")

  } catch (error) {
    console.log(error)
  }
}

connection.on('connected', () => {
  conn.isConnected = true
  console.log("MongoDB Connected")
})

connection.on('error', (e) => console.log(e))

export default connectDB
