import User from 'Models/User'
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
import bcrypt from 'bcrypt'

import connectDB from 'Utils/dbConnect'

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

  const { method, body: {name, lastname, email, password} } = req

  switch (method) {
    case 'POST':
      try {

        const user = await User.findOne({email: email})

        if (user) {
          return res.status(200).json({success: false, error: 'This email already exists'})
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const body = {
          name,
          lastname,
          email,
          password: hashPassword
        }

        const newUser =  new User(body)
        const saveUser = await newUser.save()

        return res.status(200).json({success: true, data: {...saveUser, message: 'Successfully registered, you can log in with your new user.'}})

      } catch ({message}) {
        if (typeof message === 'string') {
          return res.status(500).json({success: false, error: message})
        }
      }

    default:
      return res.status(405).json({success: false,  error: 'Method Not Allowed' })
  }
}
