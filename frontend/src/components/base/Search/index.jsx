import React from 'react'

const Search = () => {
  return (
    <div className='w-38 h-10 flex flex-row justify-center'>

        <input className='h-10 p-2 rounded-md text-gray-900 shadow-sm active: outline-rose-500' 
               type="text" placeholder='Search ...'
        />
    
    </div>
  )
}

export default Search;