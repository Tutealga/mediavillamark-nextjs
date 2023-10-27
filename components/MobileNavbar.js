'use client'

import Link from 'next/link';
import {useState} from 'react';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <button onClick={() => setIsOpen(true)} className="sm:hidden inline-block ml-auto">
<a className="text-white block relative w-[24px] h-[28px] overflow-hidden whitespace-nowrap leading-none">
<span className="bg-white absolute top-1/2 right-0 before:bg-white before:content-[''] after:content-[''] before:right-0 before:absolute before:top-[-6px] after:bg-white after:absolute after:right-0 inline-block h-[3px] w-[24px] after:h-[3px] after:w-[24px] before:h-[3px] before:w-[24px] after:top-[6px]"></span>
</a></button>

{
    isOpen
    ?
    <div className="flex flex-col text-black fixed w-auto p-4 gap-6 right-0 top-0 min-h-screen sm:hidden font-bold bg-white">
      <button onClick={() => setIsOpen(false)} className="w-full text-left">
        <span className="text-[30px]">
        <svg viewBox="0 0 512 512" aria-hidden="true" role="img" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em">
					<path d="M71.029 71.029c9.373-9.372 24.569-9.372 33.942 0L256 222.059l151.029-151.03c9.373-9.372 24.569-9.372 33.942 0 9.372 9.373 9.372 24.569 0 33.942L289.941 256l151.03 151.029c9.372 9.373 9.372 24.569 0 33.942-9.373 9.372-24.569 9.372-33.942 0L256 289.941l-151.029 151.03c-9.373 9.372-24.569 9.372-33.942 0-9.372-9.373-9.372-24.569 0-33.942L222.059 256 71.029 104.971c-9.372-9.373-9.372-24.569 0-33.942z"></path>
				</svg>
        </span>
        </button>
<ul className="flex flex-col gap-4">
<Link href="/">Inicio</Link>
<Link href="/cortes-vacunos">Vacunos</Link>
<Link href="/cortes-cerdo">Cerdo</Link>
<Link href="/embutidos">Embutidos</Link>
<Link href="/preparados">Preparados</Link>
            </ul>
    </div>
    
            :
            null
            }
    </>
  )
}

export default MobileNavbar