import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from 'Utils/dbConnect'
import User from 'Models/User'

connectDB()

type Response = {
  success: boolean
  data?: unknown
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {

  const { method, body } = req

  switch (method) {
    case 'POST':
      try {
        const newUser =  new User(body)
        const saveUser = await newUser.save()
        return res.json({success: true, data: saveUser})
      } catch ({message}) {
        if (typeof message === 'string') {
          return res.status(500).json({success: false, error: message})
        }
      }

    default:
      return res.status(405).json({success: false,  error: 'Method Not Allowed' })
  }
}
