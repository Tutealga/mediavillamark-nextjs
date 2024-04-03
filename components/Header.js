import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../assets/logo.png';
import MobileNavbar from './MobileNavbar';

const Header = () => {
  return (
    <header className="min-w-full h-auto fixed text-white bg-black">
      <nav className="container max-w-[1200px] p-2 flex mx-auto items-center">
        <Link href="/" ><Image className="max-w-[125px]" src={logo} alt="Mediavilla Mark"/></Link>
            <ul className="hidden mx-auto sm:flex gap-4 justify-center items-center font-bold">
<Link href="/">Inicio</Link>
<Link href="/cortes-vacunos">Vacunos</Link>
<Link href="/cortes-cerdo">Cerdo</Link>
<Link href="/embutidos">Embutidos</Link>
<Link href="/preparados">Preparados</Link>
            </ul>
<Link href="https://api.whatsapp.com/send/?phone=5491127541336&text=Hola%21+Me+gustar%C3%ADa+realizar+un+pedido.&app_absent=0" className="text-white bg-red-600 p-4 rounded-md sm:block hidden">Contáctanos</Link>
            <MobileNavbar />
      </nav>
    </header>
  )
}

export default Header