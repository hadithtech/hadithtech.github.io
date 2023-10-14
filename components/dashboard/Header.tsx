import { Bell, ChevronLeft, Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'

const Header = () => {
  return (
    <div className='w-full gap-4 hidden md:flex'>
      <div className='flex px-4 gap-2 bg-[#F4F6FC] rounded-2xl w-full justify-center items-center'>
        <Search size={25}/>
        <Input placeholder='i want to listen....' className='bg-transparent !outline-none !outline-0 border-none' />
      </div>
      <span className='flex flex-col p-4 gap-2 bg-[#F4F6FC] rounded-2xl'>
        <Bell size={25} className='opacity-50 cursor-not-allowed' />
      </span>
    </div>
  )
}

export default Header