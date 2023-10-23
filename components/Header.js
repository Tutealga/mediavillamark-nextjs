import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="w-full h-auto fixed text-white bg-black">
      <nav className="container max-w-[1200px] p-2 flex mx-auto">
        <Link href="/" ><Image className="max-w-[125px]" src={logo} alt="Mediavilla Mark"/></Link>
            <ul className="hidden mx-auto sm:flex gap-4 justify-center items-center font-bold">
<Link href="/">Inicio</Link>
<Link href="/cortes-vacunos">Vacunos</Link>
<Link href="/cortes-cerdo">Cerdo</Link>
<Link href="/embutidos">Embutidos</Link>
<Link href="/preparados">Preparados</Link>
<Link href="https://api.whatsapp.com/send/?phone=5491126841364&text=Hola%21+Me+gustar%C3%ADa+realizar+un+pedido.&app_absent=0">Contacto</Link>
            </ul>
      </nav>
    </header>
  )
}

export default Header