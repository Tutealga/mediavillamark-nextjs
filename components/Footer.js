import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
      <footer className="mt-10 p-4 min-w-full flex flex-col items-center justify-center w-full bg-black text-white">
        <section className="flex flex-col sm:flex-row justify-evenly w-full">
<article>
<div className="p-4 flex flex-col gap-4">
<h4 className="font-bold text-sm sm:text-base">LEGALES</h4>
<ul className="flex flex-col gap-2">
  <Link className="text-xs sm:text-sm" href="#">Política de Privacidad</Link>
  <Link className="text-xs sm:text-sm" href="#">Política de cookies</Link>
</ul>
</div>
<div className="w-1/2">
<Image src={logo}/>
</div>
</article>
  <article className="p-4 gap-4 flex flex-col">
  <h4 className="font-bold text-sm sm:text-base">CONTACTO</h4>
  <div className="flex flex-col gap-2">
  <p className="text-xs sm:text-sm">Teléfono: <Link href="tel:+549 11 3118 2056">+549 11 3118 2056</Link></p>
  <p className="text-xs sm:text-sm">E-mail: <Link href="mailto:mediavillamarkarg@gmail.com">mediavillamarkarg@gmail.com</Link></p>
  <Link className="text-xs sm:text-sm" href="https://goo.gl/maps/mnJX33jQS25c5p9M6">Añasco 17, Lomas del Mirador, La Matanza, Buenos Aires, Argentina</Link>
  </div>
</article>
<div>
    <iframe className="w-full h-auto" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13123.423310117989!2d-58.515296!3d-34.683588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc8da31738653%3A0x246d3fd4c30fb91f!2sA%C3%B1asco%2017%2C%20B1751AGA%20Villa%20Madero%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1696993386798!5m2!1ses!2sar" width={400} height={250} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
        </section>
        <section className="text-center p-4">
          <p>Mediavilla Mark © 2023. Todos los derechos reservados.</p>
        </section>
      </footer>
  )
}

export default Footer