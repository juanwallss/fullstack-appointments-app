'use client'
import Navbar from '@/components/Navbar'
import SideBar from '@/components/SideBar'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <div className='h-screen flex'>
      <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-2 flex flex-col gap-2'>
        <Link
          href='/'
          className='flex items-center justify-center lg:justify-start gap-2'
        >
          <Image
            className='rounded-full'
            src='/bookit_logo.png'
            alt='logo'
            width={50}
            height={50}
          />
          <span className='hidden lg:block'>BookIt</span>
        </Link>
        <SideBar />
      </div>
      <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}
