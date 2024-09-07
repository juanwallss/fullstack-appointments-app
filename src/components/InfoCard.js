import React from 'react'
import { MoreHorizSharp } from '@mui/icons-material'
export default function InfoCard({ type }) {
  return (
    <div className='rounded-2xl odd:bg-mainCyan even:bg-cyanLight p-4 min-w-[130px] flex-1'>
      <div className='flex justify-between items-center'>
        <span className='text-[10px] px-2 py-1 rounded-full bg-white text-green-600'>2024/04</span>
        <MoreHorizSharp />
      </div>
      <h1 className='text-2xl font-semibold my-4'>1,123</h1>
      <h2 className='capitalize font-medium text-gray-500'>{type}</h2>
    </div>
  )
}
