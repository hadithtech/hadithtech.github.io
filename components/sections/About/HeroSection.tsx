"use client"
import React from 'react'
import TextTransition, { presets } from 'react-text-transition';
import "./About.css"
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

let categories = ["Technology", "Programming", "Coding"];

const Podcast__Card = ({className, children}: {className?: string, children: React.ReactNode}) => {
  return (
    <div className={cn("bg-background/80 backdrop-blur p-2 rounded-lg border shadow gap-2", className)}>
      {children}
    </div>
  )
}

const About_HeroSection = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="container">
      <h1 className="
        lg:text-7xl  lg:max-w-5xl lg:leading-[84px]
        md:text-5xl  md:max-w-[700px] md:leading-[60px]
        sm:text-[38px]  sm:max-w-[560px] sm:leading-[48px]
        xs:text-2xl xs:max-w-[380px] xs:leading-[36px]
        text-lg  w-full leading-[30px]
        pb-10 pt-0 font-semibold mx-auto text-center
      ">
        Podcasts To Discuss All Things
        <span className="
          font-bold lg:text-5xl md:text-4xl sm:text-3xl xs:text-xl text-[12px] border-primary border-dotted sm:border-4 border-2 px-2 sm:px-4 mx-2
          rounded-full uppercase bg-primary/10 pt-1 pb-[2px] lg:px-4 lg:py-1 relative !overflow-hidden
        ">
          <TextTransition springConfig={presets.gentle} className='!inline-flex text-primary'>{categories[index % categories.length]}</TextTransition>
        </span>
        Related
      </h1>
      <div className="flex md:flex-row flex-col-reverse gap-4 relative items-center">
        <div className="flex-1 flex flex-col sm:px-10 py-10 gap-8 md:w-auto max-w-[480px]">
          <div className="flex flex-col gap-0">
            <h1 className="font-black text-4xl">10+</h1>
            <h2 className="font-semibold text-2xl">Years Of Experience</h2>
            <p className="font-normal text-muted-foreground md:max-w-[400px]">
              Enim consequat tempor nostrud amet non irure esse ex reprehenderit es un.
              Enim consequat tempor nostrud amet non irure esse ex reprehenderit es un.
              </p>
          </div>
          <div className="flex flex-col gap-0">
            <h1 className="font-black text-4xl">12K+</h1>
            <h2 className="font-semibold text-2xl">Subscriber</h2>
            <p className="font-normal text-muted-foreground md:max-w-[400px]">
              Enim consequat tempor nostrud amet  nonirure esse ex reprehenderit es un.
              Enim consequat tempor nostrud amet  nonirure esse ex reprehenderit es un.
            </p>
          </div>
          <div className="flex items-center">
          <Avatar className='border relative'>
            <AvatarImage src="https://github.com/a0m0rajab.png" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className='border relative -left-[8px]'>
            <AvatarImage src="https://github.com/a0m0rajab.png" />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <Avatar className='border relative  -left-[16px]'>
            <AvatarImage src="https://github.com/a0m0rajab.png" />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
          <Avatar className='border relative -left-[24px]'>
            <AvatarImage src="https://github.com/a0m0rajab.png" />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
          <Avatar className='border relative -left-[32px]'>
            <AvatarFallback>32+</AvatarFallback>
          </Avatar>
          </div>
        </div>
        <div className="flex-1 lg:mt-auto xl:border-b-2 border-primary relative">
          <Image width={800} height={800} alt='image' src={"/Abdulrahman.png"} className='w-auto xl:h-auto lg:h-[500px] md:max-h-none max-h-[400px] mx-auto'/>
          <Podcast__Card className='relative -top-5 md:hidden flex w-[100%] bg-background/90 max-w-[400px]' >
            <div className="flex flex-col gap-0 justify-center">
              <p className='opacity-50 text-primary sm:text-xs text-[10px] sm:-mb-1 font-medium'>software engineer</p>
              <h1 className='font-bold sm:text-lg text-[15px]'>Abdurrahman Rajab</h1>
              <p className='opacity-50 sm:text-xs text-[8px]'>Software engineer worked with startups and scale-up, host of Hadith Tech, invited to speak on TV (discussed AI and security) , invited to GitHub Universe Conference, and hosted 20+ workshops related to open source, technology, and AI.</p>
            </div>
          </Podcast__Card>
        </div>
        <div className="xl:block hidden lg:mt-10 w-[350px]">
          <Image width={800} height={800} alt='image' src={"/logo.png"} className='w-2/3 h-auto mx-auto'/>
        </div>
        <Podcast__Card className='absolute bottom-5 left-1/2 xl:ml-20 lg:-ml-20 md:flex hidden' >
          <Image width={800} height={800} alt='image' src={"/lo"} className='h-20 w-20 bg-primary object-cover rounded-lg'/>
          <div className="flex flex-col justify-between items-start pr-6">
            <div className="flex flex-col gap-0 justify-center">
              <p className='opacity-50 text-primary text-xs -mb-1 font-medium'>Economics Concepts</p>
              <h1 className='font-bold text-lg'>How to earn money</h1>
              <p className='opacity-50 text-xs'>In this podcast you will learn <br/> how to earn money....</p>
            </div>
            {/* <h3 className='font-medium text-xs'>With: <span className='text-primary'>Abdulrahman Nahhas</span></h3> */}
          </div>
        </Podcast__Card>
      </div>
    </section>
  )
}

export default About_HeroSection;

