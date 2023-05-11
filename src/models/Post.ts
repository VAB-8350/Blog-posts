import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 40,
  },
  body: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
  },
  author_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  comments: [{
    body: String,
    date: Date,
    autor_id: Schema.Types.ObjectId,
    default: []
  }],
  likes: [{
    autor_id: Schema.Types.ObjectId,
    default: []
  }],
},
{
  timestamps: true,
  versionKey: false
})

export default models.Post || model('Post', postSchema)