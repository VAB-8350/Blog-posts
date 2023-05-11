import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Style from './PostHome.module.scss'

export default function postsHome() {
  return (
    <div className={Style.card}>
      <div className={Style.top}>
        <h3>Titulo de la card</h3>

        <div>
          <span className={Style.author}><strong>By:</strong> nombre autor</span>
          <span className={Style.date}>fecha</span>
        </div>
      </div>

      <div className={Style.body}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem corrupti ex eveniet possimus molestias velit laudantium, reiciendis, distinctio nobis doloremque doloribus vel id sunt culpa. Maxime mollitia quo aliquid! Deleniti rerum impedit sequi, aspernatur doloremque quasi ipsa recusandae quam, tenetur ipsum voluptatum? Alias temporibus distinctio dolorem maiores cumque natus harum inventore? Minima perspiciatis officiis et voluptatem dicta rerum distinctio porro placeat, dolor modi quod illo atque, asperiores doloribus sapiente nam accusamus aliquid voluptas nemo reiciendis laborum quae eaque? Recusandae ab modi quisquam corporis vitae id incidunt tenetur adipisci, nihil cupiditate ea nobis magnam corrupti, hic quos quasi eveniet. Dolorum, nobis illum dolore vero recusandae inventore pariatur maiores minima. Necessitatibus numquam explicabo accusantium animi laboriosam neque ut optio iure dolore. Iure, est?</p>
      </div>

      <div className={Style.bottom}>
        <div className={Style.categories}>
          <span># Categorias</span>
          <span># Categorias</span>
        </div>

        <span className={Style.likes}>
          <FontAwesomeIcon className={Style.like} icon={faHeart}/>
          <span>423</span>
        </span>
      </div>
    </div>
  )
}
