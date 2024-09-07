'use client'
import { MoreHorizSharp } from '@mui/icons-material'
import React from 'react'
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer
} from 'recharts'

const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8'
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed'
  },
  {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1'
  },
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d'
  },
  {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c'
  },
  {
    name: '50+',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57'
  },
  {
    name: 'unknow',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658'
  }
]
export default function CountChart() {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      <div className='flex justify-between items-center'>
        <h1>Citas por Tipo</h1>
        <MoreHorizSharp />
      </div>
      <div className='w-full h-3/4'>
        <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
        </RadialBarChart>
      </ResponsiveContainer>
      </div>
      <div className='flex justify-center gap-16'>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-cyanLight rounded-full' />
          <div className='font-bold'>1234</div>
          <div className='text-xs text-gray-500'>Limpiezas (55%)</div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-yellow-200 rounded-full' />
          <div className='font-bold'>1234</div>
          <div className='text-xs text-gray-500'>Caries (19%)</div>
        </div>
      </div>
    </div>
  )
}
