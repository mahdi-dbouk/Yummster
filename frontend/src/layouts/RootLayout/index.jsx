import React from 'react';
import 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Button from '../../components/base/Button';
import Navbar from '../../components/UI/Navbar';
import Sidebar from '../../components/UI/Sidebar';

const RootLayout = () => {
  return (
    <main className='bg-white w-full h-[calc(100%-56px)]'>
        <Navbar />
        <div className='flex flex-row w-full justify-start h-full'>
        <Sidebar />
        <Outlet />
        </div>
    </main>
  )
}

export default RootLayout;