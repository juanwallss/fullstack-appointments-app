'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter()

  const logout = async () => {
    try {
      await axios.get('/api/users/logout').then(() => {
        toast.success('Logout Successful')
        router.push('/login')
      })
    } catch (error) {
      toast.error(error.message)
    }
  }

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
    logout()
  }

  return (
    <nav className='flex items-center justify-end p-4 '>
      <div className='flex items-center gap-6'>
        <div className='flex flex-col'>
          <span className='text-gray-500 font-bold text-sm'>Juan Paredes</span>
          <span className='text-gray-500 text-sm'>Admin</span>
        </div>
        <div className='flex flex-col'>
        <Image
            src={'/profile-user.png'}
            alt='user-photo'
            height={40}
            width={40}
            onClick={toggleMenu}
            className='cursor-pointer'
          />
          {openMenu && (
            <div className='absolute mt-2 ml-3 bg-white border border-gray-200 shadow-lg rounded-lg py-2'>
              <Link href="/profile" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                Perfil
              </Link>
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
