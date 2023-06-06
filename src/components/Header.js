import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {logout} from '../features/auth/authSlice'

const Header = () => {

    const { user } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const OnLogOut = () =>{
        dispatch(logout('user'))
        navigate('/')
    }


    return (
        <header className='header'>
            <div className="logo">
                <Link to='/dashboard'>Goals</Link>
            </div>
            <ul>
                {
                    user ? <button className='btn' onClick={OnLogOut}>
                        LogOut<FaSignOutAlt />
                    </button> :
                        <li>
                            <Link to='/'> LogIn<FaSignInAlt /></Link>
                        </li>
                }
                <li>
                    <Link to='/register'>Register<FaUserAlt /></Link>
                </li>
            </ul>
        </header>
    )
}

export default Header