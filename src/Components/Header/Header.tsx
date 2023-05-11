import React from 'react'
import Style from './Header.module.scss'
import Link from 'next/link'
import SearchBar from 'Components/SearchBar/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCirclePlus, faMoon, faSun} from '@fortawesome/free-solid-svg-icons'

type Props = {
  changeTheme: () => void
  theme: string
}

export default function Header({changeTheme, theme}: Props) {

  return (
    <header className={Style.header}>
      <section className={Style.left}>
        <Link href='/'>
          My <span>Blog</span>
        </Link>
      </section>

      <section>
        <SearchBar />
      </section>
      
      <section className={Style.right}>
        <button onClick={changeTheme}>
          {
            theme === 'dark'
            ? <FontAwesomeIcon className={Style.theme} icon={faMoon}/>
            : <FontAwesomeIcon className={Style.theme} icon={faSun}/>
          }
        </button>

        <button>
          <FontAwesomeIcon className={Style.plus} icon={faCirclePlus}/>
        </button>

        <button>
          <FontAwesomeIcon className={Style.user} icon={faUser}/>
        </button>
      </section>
    </header>
  )
}
