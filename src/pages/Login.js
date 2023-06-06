import React, { useEffect,useState } from 'react'
import { FaUser } from 'react-icons/fa'
import {toast} from 'react-toastify'
import {reset, login} from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  

  const {user, isError, isSuccess, isLoading, message} = useSelector((state)=>state.auth)

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess && user.name){
      navigate('/dashboard');
    }
    dispatch(reset())

  },[user, isError, isSuccess, message, navigate, dispatch])

  const {email, password} = formData

  const onChange = (e) =>{

    setFormData((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    const userData = {
      email, password
    }
    dispatch(login(userData))
  }

if(isLoading) {
  <Spinner/>
}

  return (
    <>
      <section className='heading'>
        <h1><FaUser />Login</h1>
        <p>Please Login and set Goals</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type= 'email' name='email' placeholder='Please enter the email' id='email' value={email}className='form-control' onChange={onChange}/>
          </div>
          <div className="form-group">
            <section>
              <input type='password' name='password' value={password} placeholder='Please enter the password' className='form-control' onChange={onChange}/>
            </section>
          </div>
          <div className="form-group">
            <button type='submit' className='btn btn-block'>submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login