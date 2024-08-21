'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const onLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    await axios
      .post('/api/users/login', credentials)
      .then(() => {
        router.push('/dashboard')
        toast.success('Inicio de sesion exitoso')
      })
      .catch((err) => {
        console.log(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      {loading ? (
        <div class='flex items-center justify-center h-screen'>
          <div class='relative'>
            <div class='h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200'></div>
            <div class='absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin'></div>
          </div>
        </div>
      ) : (
        <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-md'>
          <h1 className='text-2xl font-bold mb-6 text-center'>
            Iniciar Sesión
          </h1>
          <form
            onSubmit={onLogin}
            className='space-y-4'
          >
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Correo electrónico
              </label>
              <input
                id='email'
                name='email'
                type='email'
                value={credentials.email}
                onChange={handleChange}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500'
                required
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Contraseña
              </label>
              <input
                id='password'
                name='password'
                type='password'
                value={credentials.password}
                onChange={handleChange}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
