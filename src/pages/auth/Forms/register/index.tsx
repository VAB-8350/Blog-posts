import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Style from '../Form.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUserPen, faPenToSquare} from '@fortawesome/free-solid-svg-icons'

type Inputs = {
  name: string
  lastname: string
  email: string
  password: string
};

export default function Register() {

  const { register, handleSubmit, watch ,formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async credentials => {
    const {status, data} = await axios.post('/api/auth/register', credentials);

    console.log(data)
  }

  return (
    <form className={Style.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register('name', { required: true, minLength: 2, maxLength: 10 })} autoComplete='off'/>
        <label className={(watch('name')?.length > 0) ? Style.hasContent : ''}><FontAwesomeIcon icon={faUserPen}/> Name</label>
        {errors.name && <p>Name requires 2-10 characters.</p>}
      </div>

      <div>
        <input {...register('lastname', { required: true, minLength: 2, maxLength: 10 })} autoComplete='off'/>
        <label className={(watch('lastname')?.length > 0) ? Style.hasContent : ''}><FontAwesomeIcon icon={faUserPen}/> Lastname</label>
        {errors.lastname && <p>Lastname requires 2-10 characters.</p>}
      </div>

      <div>
        <input {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} autoComplete='off'/>
        <label className={(watch('email')?.length > 0) ? Style.hasContent : ''}><FontAwesomeIcon icon={faEnvelope}/> Email</label>
        {errors.email && <p>The email entered is not valid.</p>}
      </div>

      <div>
        <input {...register('password', { required: true, minLength: 8 })} type='password' autoComplete='off'/>
        <label className={(watch('password')?.length > 0) ? Style.hasContent : ''}><FontAwesomeIcon icon={faLock}/> Password</label>
        {errors.password && <p>Password must be at least 8 characters</p>}
      </div>

      <button type="submit">Register <FontAwesomeIcon icon={faPenToSquare}/></button>
    </form>
  )
}
