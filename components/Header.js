import Link from 'next/link';
import MobileNavbar from './MobileNavbar';

const Header = () => {
  return (
    <header id="header-nav" className="min-w-full h-auto fixed text-white z-[999]">
      <nav className="container max-w-6xl p-2 flex mx-auto items-center">
        <Link href="/" ><img className="max-w-[125px]" src='/logo.png' alt="Mediavilla Mark"/></Link>
            <ul className="hidden mx-auto sm:flex gap-4 justify-center items-center font-bold text-sm sm:text-base md:text-lg">
<Link href="/">Inicio</Link>
<Link href="#calidades">Calidades</Link>
<Link href="/cortes-vacunos">Vacunos</Link>
<Link href="/preparados">Preparados</Link>
            </ul>
<Link href="https://api.whatsapp.com/send/?phone=5491127541336&text=Hola%21+Me+gustar%C3%ADa+realizar+un+pedido.&app_absent=0" 
className="text-white bg-red-600 p-4 rounded-md sm:block hidden font-bold">Contactanos</Link>
            <MobileNavbar />
      </nav>
    </header>
  )
}

export default Header