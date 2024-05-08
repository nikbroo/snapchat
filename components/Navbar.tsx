import React from 'react'
import SnapchatLogo from '@/public/Snapchat-Logo.svg'
import Image from 'next/image'
import { Input } from './ui/input'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-screen px-10 py-4'>
      <div className='flex items-center gap-2'>
        <Image src={SnapchatLogo} alt='logo' width={50} height={50} />
        <Input type="text" placeholder="Search" className='rounded-full'/>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Navbar