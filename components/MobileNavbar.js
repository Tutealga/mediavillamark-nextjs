'use client'

import Link from 'next/link';
import {useState} from 'react';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden inline-block ml-auto">
<a className="text-white block relative w-[24px] h-[28px] overflow-hidden whitespace-nowrap leading-none">
<span className="bg-white absolute top-1/2 right-0 before:bg-white before:content-[''] after:content-[''] before:right-0 before:absolute before:top-[-6px] after:bg-white after:absolute after:right-0 inline-block h-[3px] w-[24px] after:h-[3px] after:w-[24px] before:h-[3px] before:w-[24px] after:top-[6px]"></span>
</a></button>

{
    isOpen
    ?
    <ul className="text-black fixed w-auto right-0 top-[89px] min-h-screen flex flex-col sm:hidden gap-4 justify-center p-4 font-bold bg-white">
<Link href="/">Inicio</Link>
<Link href="/cortes-vacunos">Vacunos</Link>
<Link href="/cortes-cerdo">Cerdo</Link>
<Link href="/embutidos">Embutidos</Link>
<Link href="/preparados">Preparados</Link>
            </ul>
            :
            null
            }
    </>
  )
}

export default MobileNavbar