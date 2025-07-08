// components/NavLink.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Children, ReactNode } from 'react'

type NavLinkProps = {
  href: string
  label: string
}

type NavGenericProps = {
  children: ReactNode
}


export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <a
      href={href}
      className={` flex-1 px-2 rounded-[5px] hover:cursor-pointer
        ${isActive ? 'bg-white text-black font-semibold' : ''}`}
    >
      {label}
    </a>
  )
}



export function NavLinkDropDawn({ href, label }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (

    <a href={href}
      className={` text-[16px] flex w-[full] my-[2px] center h-[40px] items-center pl-2 rounded-[5px] cursor-pointer hover:bg-white 
        ${isActive ? 'bg-white text-black' : 'text-white hover:text-black'}`}
    >
      {label}
    </a>
  )
}



export function NavGeneric({ children }: NavGenericProps) {
  const pathname = usePathname()
  const isActive = pathname.startsWith('/p')

  return (
    <div className={` rounded-[5px] hover:cursor-pointer
        ${isActive ? 'bg-white text-black font-semibold' : ''}`}
    >
      {children}
    </div>
  )
}
