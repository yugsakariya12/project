"use client"
import React, { useState } from 'react'
import { Add, Search,Person,Logout } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import { SignedIn, SignIn } from '@clerk/nextjs'
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import Link from 'next/link'
import Image from 'next/image'
import { dark } from "@clerk/themes";

const TopBar = () => {
    const [search,setSearch]=useState()
    const router =useRouter()
return (
    <div className='flex justify-between items-center mt-6'>
        <div className='relative'>
            <input type='text' placeholder='Search posts,people,...' value={search}  onClick={(e)=>setSearch(e.target.value)} 
            className='w-full bg-dark-2 py-3 px-5 rounded-lg focus:outline-none text-light-1 text-small-semibold'/>

            <Search className='
   absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-pink-300' />
    </div>

     
      <button className='flex items-center gap-2 rounded-lg py-2.5 px-3 bg-gradient-to-b from-pink-300 to bg-purple-500 max-md:hidden text-gray-700;' onClick={()=>router.push("/create-post")}>
        <Add/><p>Create a Post</p>  </button>
       
    <div className="flex gap-4 md:hidden">
        <Link href=''>
          <Person sx={{ fontSize: "35px", color: "white" }} />
        </Link>


 <UserButton appearance={{ baseTheme: dark }} afterSignOutUrl="/sign-in" />
        </div>
        </div>
    
  )
}

export default TopBar
