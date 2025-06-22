import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Link from 'next/link'
import Image from 'next/image'
import Menu from './Menu'

const LeftSideBar = () => {
  return (
   <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden 2xl:w-[350px] pr-20 -webkit-scrollbar {
    width: 3px;
    height: 3px;
    border-radius: 2px;
  }">
      <Link href="/">
        <Image src="" alt="logo" width={200} height={200} />
      </Link>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href={""}>
            <Image
              src={"/assets/logo.png"}
              alt="profile photo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
          <p className="text-small-bold">
            Yug sakariya
          </p>
        </div>
        <div className="flex flex-row  justify-between">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="">Following</p>
          </div>
        </div>
      </div>

      <hr />

      <Menu />

      <hr />

      <div className="flex gap-4 items-center">
        <UserButton appearance={{ baseTheme: dark }} />
        <p className="text-light-1 text-green-900">Manage Account</p>
      </div>
    </div>
  );
};

export default LeftSideBar;