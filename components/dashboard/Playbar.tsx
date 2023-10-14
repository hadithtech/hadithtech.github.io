"use client";

import { Pause, Play, SkipBack, SkipForward } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button';

const Playbar = () => {
  const [music, setMusic] = useState(false);

  return (
    <div className='hidden md:flex px-4 gap-2 bg-[#F4F6FC] h-[100px] justify-between items-center'>
      <div className="flex gap-2 items-center justify-center">
        <img className='h-16 w-16 object-cover rounded-2xl' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Ffeatured%2Fpodcast-background-zxzgctiqcs16fjhi.jpg&f=1&nofb=1&ipt=4079ab492c87add597b1913c25c202109fe37dab86dd97e072495f2b6c51feef&ipo=images" alt="" />
        <div className="flex flex-col">
          <h1 className='text-xl font-medium'>Episode Name</h1>
          <p className="opacity-50 text-lg relative -top-1">Someone</p>
        </div>
      </div>
      <div className="flex gap-1 items-center justify-center">
        <SkipBack size={25}/>
        <Button onClick={() => {
          setMusic(true)
          console.log("pressed")  
        }} variant={'default'} size={"icon"} className='flex items-center justify-center'>
          {music === true ? <Play size={25} />: <Pause size={25}/>}
        </Button>
        <SkipForward size={25} />
      </div>
    </div>
  )
}

export default Playbar