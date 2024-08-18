'use client'
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/navigation'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState({})
  const getUserDetails = async () => {
    try {
      const res = await axios.get('/api/users/me')
      console.log(res.data)
      setUser(res.data)
    } catch (error) {
      toast.error(error.message)
    }
  }
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
    <div>
      <h1>Dashboard</h1>
      <button onClick={getUserDetails}>verificar info</button>
      <button onClick={logout}>Cerrar Sesion</button>
    </div>
  )
}
