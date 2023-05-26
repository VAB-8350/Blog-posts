import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'

import Style from './PostHome.module.scss'

type User = {
  name: string;
  lastName: string;
  email: string;
};

type Post = {
  _id: string
  title: string
  body: string
  author: User
  likes: number
  createdAt: string
  updatedAt: string
}

type Props = {
  posts: Post[]
  topPosts: Post[]
}

export default function postsHome({posts}: Props) {
  return (
    <>
      {
        posts.map((post) => (
          <div className={Style.card} key={post._id}>
            <div className={Style.top}>
              <h3>{post.title}</h3>

              <div>
                <span className={Style.author}><strong>By:</strong> {post.author?.name ? `${post.author?.name} ${post.author?.lastName}` : 'Anonimo'}</span>
                <span className={Style.date}>fecha</span>
              </div>
            </div>

            <div className={Style.body}>
              <p>{post.body}</p>
            </div>

            <div className={Style.bottom}>
              <div className={Style.categories}>
                <span># Categorias</span>
                <span># Categorias</span>
              </div>

              <span className={Style.likes}>
                {/* <FontAwesomeIcon className={Style.like} icon={faHeart}/> */}
                <FontAwesomeIcon className={Style.like} icon={faHeartBroken}/>
                <span>{post.likes}</span>
              </span>
            </div>
          </div>
        ))
      }
    </>
  )
}
