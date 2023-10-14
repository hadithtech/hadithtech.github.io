import { Flame, Headphones, Home, ListMusic, PauseCircle, Search, Youtube } from 'lucide-react'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='hidden md:flex gap-5 flex-col w-[400px]'>
      <div className="flex flex-col p-4 gap-2 bg-[#F4F6FC] rounded-3xl">
        <Link href="/" className={cn(buttonVariants({variant: "ghost"}), 'flex gap-2 rounded-xl')}>
          <Home /> <span className='md:block hidden'>Back To </span> Home
        </Link>
        <Button variant={"ghost"} className='flex gap-2 rounded-xl'>
          <Youtube /> Youtube <span className='md:block hidden'>Channel</span>
        </Button>
        <Button variant={"ghost"} className='flex gap-2 rounded-xl'>
          <Headphones /> Sopitfy
        </Button>
      </div>
      <div className="flex flex-col p-4 gap-4 bg-[#F4F6FC] rounded-3xl">
        <div className="flex justify-between p-2 pb-0">
          <div className="flex gap-2 justify-center items-center">
            <ListMusic />
            Playlists (2)
          </div>
          <Search className='opacity-50 cursor-not-allowed hidden md:block' />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between !gap-2 lg:gap-12 hover:bg-accent p-2 rounded-2xl cursor-not-allowed opacity-50">
            <div className="flex gap-2">
              <img className='h-12 w-12 object-cover rounded-md hidden md:block' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Ffeatured%2Fpodcast-background-zxzgctiqcs16fjhi.jpg&f=1&nofb=1&ipt=4079ab492c87add597b1913c25c202109fe37dab86dd97e072495f2b6c51feef&ipo=images" alt="" />
              <div className="flex flex-col">
                <span className=''>English Podcast</span>
                <span>16 Episode</span>
              </div>
            </div>
            {/* <PauseCircle /> */}
          </div>
          <div className="flex items-center justify-between !gap-2 lg:gap-12  hover:bg-accent p-2 rounded-2xl cursor-pointer cursor-not-allowed opacity-50">
            <div className="flex gap-2">
              <img className='h-12 w-12 object-cover rounded-md hidden md:block' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Ffeatured%2Fpodcast-background-zxzgctiqcs16fjhi.jpg&f=1&nofb=1&ipt=4079ab492c87add597b1913c25c202109fe37dab86dd97e072495f2b6c51feef&ipo=images" alt="" />
              <div className="flex flex-col">
                <span className=''>Arabic Podcast</span>
                <span>28 Episode</span>
              </div>
            </div>
            {/* <PauseCircle /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar