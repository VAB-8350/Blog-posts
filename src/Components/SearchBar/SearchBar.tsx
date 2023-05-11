import React from 'react'
import Style from './SearchBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
  return (
    <div className={Style['search-content']}>
      <input type="text" placeholder='Search'/>
      <FontAwesomeIcon className={Style.search} icon={faSearch}/>
    </div>
  )
}
