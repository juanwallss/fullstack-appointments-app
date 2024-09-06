import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import Image from 'next/image'

export default function Navbar() {
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

  return (
    <nav className='flex items-center justify-end p-4 '>
      <div className='flex items-center gap-6'>
        <div className='flex flex-col'>
          <span className='text-gray-500 font-bold text-sm'>John Doe</span>
          <span className='text-gray-500 text-sm'>Admin</span>
        </div>
        <Image src={'/profile-user.png'} alt='user-photo' height={40} width={40} />
      </div>
    </nav>
  )
}
