import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from "../../../assets/images/logo component.png";
import Button from '../../base/Button';
import { useStore } from '../../../zustand/userStore';
import {shallow} from 'zustand/shallow';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const isLoggedIn = useStore((store)=>store?.isLoggedIn);
    const setIsLoggedIn = useStore((store)=>store?.setIsLoggedIn);
    const setAuth = useStore((store) => store?.setAuth);
    const auth = useStore((store)=>store?.auth);
    console.log(auth);
    console.log(isLoggedIn);

    const handleClick = () => {
        navigate('/signup', {replace:true});
    }

    const handleLogout = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/logout', {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        });
        setAuth({
            email: '',
            fullName: '',
            accessToken: '',
            refreshToken: ''
        });
        setIsLoggedIn(false);
        navigate('/', {replace:true});
    }

  return (
    <header className='h-14 w-full px-4 py-2 flex flex-row justify-between border-b-2'>

        <div>
            <img
              className='w-20 h-10'
              src={logo}
              alt="yummster-logo" />
        </div>

        {isLoggedIn?
        <div className='h-full w-40 flex flex-row gap-x-2 justify-end items-center'>
            <FontAwesomeIcon icon={faUserCircle} size='2x' color='lightgray' />
            <span>Username</span>
            <Button
            
            text={'LOGOUT'}
            style={'w-20 h-8 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold rounded-md'}
            action={()=>handleLogout()}
        
            />
        </div>
        :
        <div>
            <Button
            
                text={'SIGNUP TODAY!'}
                style={'w-40 h-10 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold rounded-md'}
                action={()=>handleClick()}
            
            />
        </div>
        }

    </header>
  )
}

export default Navbar;