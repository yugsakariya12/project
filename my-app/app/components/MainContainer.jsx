"use client"
import React from 'react'
import TopBar from './TopBar'
import { usePathname } from 'next/navigation'
import { pageTitles } from './constants'

const MainContainer = ({children }) => {
    const currentPath=usePathname();
    const regex = /^\/([^\/]+)/;
const firstPath = currentPath.match(regex) ? path.match(regex)[0] : currentPath;
const title =pageTitles.find((page)=>page.url===firstPath)?.title||'';
  return (


    <div className='flex flex-col max-w-3xl px-4 lg:px-4 md:px-10 xl-px-20'>
      <TopBar/>

      <div className='mt-6 mb-20'>
        <h1 className='mb-5 font-bold max-sm:font-bold text-gray-500'>{title}  </h1>
        <div className='h-screen overflow-y-scroll '>{children}</div>
      </div>
    </div>
  )
}

export default MainContainer
