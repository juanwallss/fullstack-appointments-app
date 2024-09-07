'use client'
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/navigation'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import InfoCard from '@/components/InfoCard'
import CountChart from '@/components/CountChart'

export default function Dashboard() {
  return (
    <div className='flex flex-col gap-4 p-4 md:flex-row'>
      {/* left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-6'>
        <div className='flex justify-between gap-4 flex-wrap'>
          {/* Cards */}
          <InfoCard type='citas' />
          <InfoCard type='clientes' />
          <InfoCard type='profesionales' />
        </div>
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* MIDDLE CHARTS */}
          <div className='w-full lg:w-1/3 h-[450px]'>
          <CountChart />
          </div>
          <div className='w-full lg:w-2/3 h-[450px]'></div>
          
        </div>
        <div>
          {/* BOTTOM CHARTS */}
        </div>
      </div>
      {/* right */}
      <div className='w-full lg:w-1/3'> </div>
    </div>
  )
}
