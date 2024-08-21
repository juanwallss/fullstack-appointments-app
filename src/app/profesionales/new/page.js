'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Navbar from '@/app/components/Navbar'

export default function NewProfesional() {
  const [name, setName] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('/api/professionals', {
        name,
        specialty,
        phone,
        email,
      })

      if (response.status === 201) {
        setSuccess('Profesional creado con éxito')
        setError(null)
        router.push('/profesionales') // Redirige a la página del dashboard u otra de tu elección
      }
    } catch (error) {
      setError('Hubo un problema al crear el profesional. Inténtalo de nuevo.')
      setSuccess(null)
    }
  }

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='max-w-md mx-auto mt-10'>
        <h1 className='text-2xl font-bold mb-4'>Nuevo Profesional</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Nombre
            </label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Especialidad
            </label>
            <input
              type='text'
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Teléfono
            </label>
            <input
              type='text'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              required
            />
          </div>
          {error && <p className='text-red-500 mb-4'>{error}</p>}
          {success && <p className='text-green-500 mb-4'>{success}</p>}
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  )
}
