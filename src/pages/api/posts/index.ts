import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from 'Utils/dbConnect'
import Post from '../../../models/Post'

console.log('hola')
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
    case 'GET':
      console.log('hola')
      try {
        const posts = await Post.find()
        console.log(posts)
        return res.status(200).json({success: true, data: posts})
      } catch ({message}) {
        if (typeof message === 'string') {
          return res.status(500).json({success: false, error: message})
        }
      }

    case 'POST':
      try {
        const newPost =  new Post(body)
        const savePost = await newPost.save()
        return res.json({success: true, data: savePost})
      } catch ({message}) {
        if (typeof message === 'string') {
          return res.status(500).json({success: false, error: message})
        }
      }

    default:
      return res.status(405).json({success: false,  error: 'Method Not Allowed' })
  }
}
