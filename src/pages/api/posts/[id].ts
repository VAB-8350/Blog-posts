import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from 'Utils/dbConnect'
import Post from 'Models/Post'

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

  const { method, body, query: {id} } = req

  switch (method) {
    case 'GET':
      try {

        const post = await Post.findById(id)
        
        if (!post) return res.status(404).json({success: false, error: 'Post not found'})
        
        return res.json(post)

      } catch ({message}) {
        if (typeof message === 'string') {
          return res.status(500).json({success: false, error: message})
        }
      }

    case 'PUT':
      try {

        const updatePost = await Post.findByIdAndUpdate(id, body, {new: true})

        if (!updatePost) return res.status(404).json({success: false, error: 'Post not found'})

        return res.json({success: true, data: updatePost})
        
      } catch ({message}) {
        if (typeof message === 'string') {
          return res.status(500).json({success: false, error: message})
        }
      }
    
    case 'DELETE':
      try {

        const deletePost = await Post.findByIdAndDelete(id)

        if (!deletePost) return res.status(404).json({success: false, error: 'Post not found'})

        return res.json({success: true})

      } catch ({message}) {
        if (typeof message === 'string') {
          return res.status(500).json({success: false, error: message})
        }
      }

    default:
      return res.status(405).json({success: false,  error: 'Method Not Allowed' })
  }
}