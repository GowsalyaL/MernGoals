import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import {toast} from 'react-toastify'
import {reset, register} from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  }
  )

  const navigate = useNavigate()
  const dispatch = useDispatch()
  

  const {user, isError, isSuccess, isLoading, message} = useSelector((state)=>state.auth)

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess && user){
      navigate('/');
    }
    dispatch(reset())

  },[user, isError, isSuccess, message, navigate, dispatch])
   

  const { name, email, password, password2 } = formData

  const onChange = (e) =>{

    setFormData((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const onSubmit = (e) =>{
    e.preventDefault();

    if (password !== password2) {
      toast.error("password is not matching")
    }
    else{
      const userData = {
        name, email, password
      }
      dispatch(register(userData))
    }
  }

  if (isLoading){
    <Spinner/>
  }

  return (
    <>
      <section className='heading'>
        <h1><FaUser />Register</h1>
        <p>Please Create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
          <input type='text' name='name' value={name} placeholder='Please enter name' id='name' className='form-control' onChange={onChange} />
          </div>
          <div className="form-group">
            <input type= 'email' name='email' placeholder='Please enter the email' id='email' className='form-control' onChange={onChange}/>
          </div>
          <div className="form-group">
            <section>
              <input type='password' name='password' value={password} placeholder='Please enter the password' className='form-control' onChange={onChange}/>
            </section>
          </div>
          <div className="form-group">
            <section>
              <input type='password' name='password2' placeholder='enter the same password' id='password2' className='form-control' onChange={onChange}/>
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

export default Register