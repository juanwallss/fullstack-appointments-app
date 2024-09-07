'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import Image from 'next/image'
import { useState } from 'react'
import { AccountCircleSharp } from '@mui/icons-material'

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter()

  const logout = async () => {
    try {
      await axios.get('/api/users/logout').then(() => {
        toggleMenu()
        toast.success('Logout Successful')
        router.push('/login')
      })
    } catch (error) {
      toast.error(error.message)
    }
  }

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <nav className='flex items-center justify-end p-4 '>
      <div className='flex items-center gap-6'>
        <div className='flex flex-col'>
          <span className='text-gray-500 font-bold text-sm'>Juan Paredes</span>
          <span className='text-gray-500 text-sm'>Admin</span>
        </div>
        <div className='flex flex-col'>
          <AccountCircleSharp className='w-[40px] h-[40px] hover:text-mainCyan cursor-pointer' onClick={toggleMenu} />
          {openMenu && (
            // <div className='hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'>
            //   <Link href="/profile" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
            //     Perfil
            //   </Link>
            //   <button
            //     onClick={logout}
            //     className='block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left'
            //   >
            //     Logout
            //   </button>
            // </div>
            <div className='origin-top-right absolute right-3 mt-10 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
              <button
                onClick={logout}
                className='block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left'
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
