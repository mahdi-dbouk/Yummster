import React, { useEffect, useState }  from 'react'
import { useStore } from '../../../zustand/userStore';
import Search from '../../base/Search';
import Tab from '../../base/Tab';

const Sidebar = () => {
    const isLoggedIn = useStore((store)=>store.isLoggedIn);
    const [isActive, setIsActive] = useState(false);
    const [isTargeted, setIsTargeted] = useState('');

    useEffect(()=>{
      setIsTargeted('My Feed');
      setIsActive(true);
    },[isLoggedIn]);
  return (
    <React.Fragment>
        {isLoggedIn?
        <div className='px-4 py-4 flex flex-col gap-5 w-52 h-full bg-slate-100 border-r-2'>
            <Search />
            <Tab 
              text={'My Feed'}
              path={'/feed'}
              isActive={isActive}
              isTargeted={isTargeted}
              setIsActive={setIsActive}
              setIsTargeted={setIsTargeted}
            />
            <Tab 
              text={'Planner'}
              path={'/planner'}
              isActive={isActive}
              isTargeted={isTargeted}
              setIsActive={setIsActive}
              setIsTargeted={setIsTargeted}
            />
            <Tab 
              text={'Grocery Lists'}
              path={'/grocery-list'}
              isActive={isActive}
              isTargeted={isTargeted}
              setIsActive={setIsActive}
              setIsTargeted={setIsTargeted}
            />
        </div>
        :
        <div></div>
        }
    </React.Fragment>
  )
}

export default Sidebar;