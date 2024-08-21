import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'

const routes = [
  {
    path: '/dashboard',
    label: 'Inicio'
  },
  {
    path: '/citas',
    label: 'Citas'
  },
  {
    path: '/clientes',
    label: 'Clientes'
  },
  {
    path: '/profesionales',
    label: 'Profesionales'
  }
]

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
    <nav className='w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg '>
      <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
        <div className='text-2xl font-extrabold tracking-wider w-fit'>
          Mi App de Citas
        </div>
        <div className='flex space-x-6 items-center'>
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className='text-lg font-semibold hover:text-gray-600 transition-colors duration-300'
            >
              {route.label}
            </Link>
          ))}
          <button
            onClick={logout}
            className='bg-blue-300 text-white px-4 py-2 rounded-full font-semibold hover:text-gray-600 transition-all duration-300'
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  )
}
