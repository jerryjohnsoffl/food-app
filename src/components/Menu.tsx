"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import CartIcon from './CartIcon';

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
    const [Open,SetOpen] = useState(false)
    const [User,SetUser] = useState(false)
  return (
    <div>
        {!Open ? (
            <Image src="/open.png" alt='' height={20} width={20} onClick={()=> SetOpen(true)}/>
        ):(
            <Image src="/close.png" alt='' height={20} width={20} onClick={()=> SetOpen(false)}/>
        )}
        {Open && (<div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
                {links.map((item)=> <Link href={item.url} key={item.id} onClick={()=> SetOpen(false)}>{item.title}</Link>)}
                {!User ? (
                    <Link href="/login" onClick={()=> SetOpen(false)}>Login</Link>
                ):(
                    <Link href="/orders" onClick={()=> SetOpen(false)}>Orders</Link>
                )}
                <CartIcon />
            </div>)
        }
    </div>
  )
}

export default Menu