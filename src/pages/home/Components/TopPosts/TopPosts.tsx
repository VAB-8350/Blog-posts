import React from 'react'

import Style from './TopPosts.module.scss'
import connectDB from 'Utils/dbConnect'
import Post from 'Models/Post'

export default function TopPosts() {
  return (
    <div className={Style.card}>
      <h2>Top <span>Posts</span></h2>

      <section className={Style.body}>
        <div className={Style.post}>
          <h4>title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam facilis culpa doloribus aperiam cumque ipsam assumenda aut iste accusantium sed magni nobis, quos consectetur provident laboriosam dignissimos eligendi mollitia! Autem unde tempore, ad at enim neque! Perspiciatis nam mollitia est. Ipsam minus nam iusto numquam vero quod vel incidunt eveniet!</p>
        </div>

        <div className={Style.post}>
          <h4>title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam facilis culpa doloribus aperiam cumque ipsam assumenda aut iste accusantium sed magni nobis, quos consectetur provident laboriosam dignissimos eligendi mollitia! Autem unde tempore, ad at enim neque! Perspiciatis nam mollitia est. Ipsam minus nam iusto numquam vero quod vel incidunt eveniet!</p>
        </div>

        <div className={Style.post}>
          <h4>title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam facilis culpa doloribus aperiam cumque ipsam assumenda aut iste accusantium sed magni nobis, quos consectetur provident laboriosam dignissimos eligendi mollitia! Autem unde tempore, ad at enim neque! Perspiciatis nam mollitia est. Ipsam minus nam iusto numquam vero quod vel incidunt eveniet!</p>
        </div>

        <div className={Style.post}>
          <h4>title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam facilis culpa doloribus aperiam cumque ipsam assumenda aut iste accusantium sed magni nobis, quos consectetur provident laboriosam dignissimos eligendi mollitia! Autem unde tempore, ad at enim neque! Perspiciatis nam mollitia est. Ipsam minus nam iusto numquam vero quod vel incidunt eveniet!</p>
        </div>

        <div className={Style.post}>
          <h4>title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam facilis culpa doloribus aperiam cumque ipsam assumenda aut iste accusantium sed magni nobis, quos consectetur provident laboriosam dignissimos eligendi mollitia! Autem unde tempore, ad at enim neque! Perspiciatis nam mollitia est. Ipsam minus nam iusto numquam vero quod vel incidunt eveniet!</p>
        </div>
      </section>

    </div>
  )
}
