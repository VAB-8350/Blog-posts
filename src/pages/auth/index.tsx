import React, { useState } from 'react'

import Theme from 'Components/Theme/Theme';
import Login from './Forms/login'
import Register from './Forms/register'

import Style from './Auth.module.scss'

export default function Auth() {

  const [form, setForm] = useState('login')

  return (
    <Theme>
      <div className={Style.auth}>
        <div className={`${Style.switch} ${Style[form]}`}>
          <button onClick={() => setForm('login')}>Login</button>
          <button onClick={() => setForm('register')}>Register</button>
        </div>

        <div className={Style.forms}>
          <div className={`${Style['form-container']} ${form === 'login' ? Style.show : ''}`}><Login /></div>
          <div className={`${Style['form-container']} ${form === 'register' ? Style.show : ''}`}><Register /></div>
        </div>
      </div>
    </Theme>
  )
}
