import React from 'react'
import Sidebar from '@/components/dashboard/Sidebar'
import Header from '@/components/dashboard/Header'
import Playbar from '@/components/dashboard/Playbar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    // <div className="w-full">
    //    <div className='flex gap-5 p-5 container max-w-[1500px] h-[calc(100vh-100px)]'>
    //      <Sidebar />
    //      <div className="flex flex-col w-full">
    //        <Header /> */}
    //       Thumbnail
    //        <div className="flex h-full w-full items-center justify-center text-3xl font-bold cursor-not-allowed opacity-50">
    //         Coming Soon
    //         Podcasts
    //         New episodes
    //        </div>
    //      </div>
    //    </div>
    //    <Playbar />
    // </div>
    <>
    <Navbar />
    <div className='container min-h-[calc(100vh-88px-88px-16px)] flex flex-col gap-5 items-center justify-center font-bold text-4xl opacity-50'>
      Coming Soon
    </div>
    <Footer />
    </>
  )
}

export default page