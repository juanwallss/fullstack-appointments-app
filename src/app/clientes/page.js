'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar'

export default function Clientes() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div>
        <h1>Clientes</h1>
      </div>
    </div>
  )
}
