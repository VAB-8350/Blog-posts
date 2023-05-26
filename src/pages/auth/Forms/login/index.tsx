import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'

import Style from '../Form.module.scss'

type Inputs = {
  email: string,
  password: string,
};

export default function Login() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (credentials) => {
    const {status, data} = await axios.post('/api/auth/login', credentials);

    console.log(data)
  }

  return (
    <form className={Style.form} onSubmit={handleSubmit(onSubmit)}>

      <div>
        <input {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}/>
        <label className={(watch('email')?.length > 0) ? Style.hasContent : ''}><FontAwesomeIcon icon={faEnvelope}/> Email</label>
        {errors.email && <p>The email entered is not valid.</p>}
      </div>

      <div>
        <input {...register("password", { required: true, minLength: 8 })} type='password' autoComplete='off'/>
        <label className={(watch('password')?.length > 0) ? Style.hasContent : ''}><FontAwesomeIcon icon={faLock}/> Password</label>
        {errors.password && <p>Password must be at least 8 characters</p>}
      </div>

      <button type="submit">Login <FontAwesomeIcon icon={faArrowRightToBracket}/></button>
    </form>
  )
}
