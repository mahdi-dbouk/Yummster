import React, { useEffect, useState } from 'react';
import logo from '../../../assets/images/logo component.png';
import axios from 'axios';
import Button from '../../base/Button';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../zustand/userStore';

const Signup = () => {
    const setIsLoggedIn = useStore((store)=>store.setIsLoggedIn);
    const setAuth = useStore((store)=>store.setAuth);
    const navigate = useNavigate();
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = useState(null);

    const handleOnClick = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register',data);
            console.log(response.data);
            setData({
                first_name: '',
                last_name: '',
                email: '',
                password: ''
            });

            setAuth({
                email: response?.data?.user.email,
                fullName: response?.data?.user.full_name,
                accessToken: response?.data?.authorisation.token,
                refreshToken: ''
            });
            setIsLoggedIn(true);
    
            navigate('/feed', {replace: true});



        } catch (error) {
            setErrorMessage(error);
        }
    }
  return (
    <div className='w-full h-full flex flex-row justify-center items-center'>

        <div className='flex flex-col items-center p-2 w-96 h-96 border-2 rounded-md gap-y-2 shadow-md'>
            <div className='flex flex-row justify-center items-center w-96 h-20'>
                <img src={logo} alt="Yummster Logo" />
            </div>

            {
                errorMessage &&
                <div className='text-red-500 font-bold text-xs'>
                    <span>{errorMessage.response.data.message}</span>
                </div>
            }

            <div className='flex flex-row justify-center items-center w-full'>
                <input 
                type="text"
                value={data.first_name}
                className='border-2 w-4/5 h-10 rounded-md focus:outline-rose-300 p-2'
                 onChange={(event)=>setData({...data, first_name: event.target.value})}
                 placeholder='First Name'
                 />
            </div>
            <div className='flex flex-row justify-center items-center w-full'>
                <input 
                type="text"
                value={data.last_name}
                className='border-2 w-4/5 h-10 rounded-md focus:outline-rose-300 p-2' 
                onChange={(event)=>setData({...data, last_name: event.target.value})}
                placeholder='Last Name'
                />
            </div>
            <div className='flex flex-row justify-center items-center w-full'>
                <input 
                type="email" 
                value={data.email}
                className='border-2 w-4/5 h-10 rounded-md focus:outline-rose-300 p-2'
                onChange={(event)=>setData({...data, email: event.target.value})}
                placeholder='Email'
                />
            </div>
            <div className='flex flex-row justify-center items-center w-full'>
                <input 
                type="password" 
                value={data.password}
                className='border-2 w-4/5 h-10 rounded-md focus:outline-rose-300 p-2'
                onChange={(event)=>setData({...data, password: event.target.value})}
                placeholder='Password'
                />
            </div>

            <div className='h-full flex flex-col'>
                <Button 
                text={'Register'}
                style={'w-72 h-10 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold rounded-md'}
                action={()=>handleOnClick()}
                />
            </div>
            <div className='h-full flex flex-row items-center justify-center gap-2'>
                <span className='text-slate-300 text-base font-semibold'>Don't have an account?</span>
                <button className='text-red-500 text-base font-bold' onClick={()=>navigate('/login', {replace: true})}>Login</button>
            </div>
        </div>

    </div>
  )
}

export default Signup;