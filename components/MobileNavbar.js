'use client'

import Link from 'next/link';
import {useState} from 'react';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <button onClick={() => setIsOpen(true)} className="grow-0 sm:hidden inline-block ml-auto">
      <span className="text-[30px] inline-flex">
    <svg viewBox="0 0 512 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><path fill="#ffffff" d="M0 96c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24z"></path></svg>
      </span>
    </button>

{
    isOpen
    ?
    <div className="flex flex-col text-black fixed w-full gap-6 left-0 top-0 min-h-screen sm:hidden font-bold bg-white p-5 items-center text-center">
      <button onClick={() => setIsOpen(false)} className="ml-auto">
        <span className="text-[30px]">
        <svg viewBox="0 0 512 512" aria-hidden="true" role="img" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em">
					<path d="M71.029 71.029c9.373-9.372 24.569-9.372 33.942 0L256 222.059l151.029-151.03c9.373-9.372 24.569-9.372 33.942 0 9.372 9.373 9.372 24.569 0 33.942L289.941 256l151.03 151.029c9.372 9.373 9.372 24.569 0 33.942-9.373 9.372-24.569 9.372-33.942 0L256 289.941l-151.029 151.03c-9.373 9.372-24.569 9.372-33.942 0-9.372-9.373-9.372-24.569 0-33.942L222.059 256 71.029 104.971c-9.372-9.373-9.372-24.569 0-33.942z"></path>
				</svg>
        </span>
        </button>
<ul className="flex flex-col gap-4 items-center h-full text-base sm:text-lg md:text-xl lg:text-2xl">
<Link onClick={() => setIsOpen(false)} href="/">Inicio</Link>
<Link onClick={() => setIsOpen(false)} href="/cortes-vacunos">Vacunos</Link>
<Link onClick={() => setIsOpen(false)} href="/embutidos">Embutidos</Link>
<Link onClick={() => setIsOpen(false)} href="/preparados">Preparados</Link>
            </ul>
    </div>
    
            :
            null
            }
    </>
  )
}

export default MobileNavbar