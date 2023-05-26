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

  const { method, body: {email, password} } = req

  switch (method) {
    case 'POST':
      try {

        const user = await User.findOne({email: email})

        if (user) {
        
        const match = await bcrypt.compare(password, user.password)
        
          if (match) {
            const token = jwt.sign({
              exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30),
              name: user.name,
              lastname: user.lastname,
              email: user.email
            }, `${process.env.SECRET_KEY}`)
            
            const serialized = serialize('my-token-name', token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'strict',
              maxAge: 1000 * 60 * 60 * 24 * 30,
              path: '/'
            })

            res.setHeader('Set-cookie', serialized)

            return res.json({success: true})
          }
        }
      
        return res.status(200).json({success: false, error: 'Invalid user'})

      } catch ({message}) {
        if (typeof message === 'string') {
          return res.status(500).json({success: false, error: message})
        }
      }

    default:
      return res.status(405).json({success: false,  error: 'Method Not Allowed' })
  }
}
