import Link from "next/link"
import '../styles/globals.css'

const Hero = ({children, background}) => {

  return (
    <section style={{ backgroundImage: `url(${background})` }} id="hero" className="text-white grid mb-16 min-h-screen w-full items-center">
      <div className="w-full mx-auto max-w-6xl flex flex-col gap-6 px-3 items-start">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">{children}</h1>
          <Link href="https://api.whatsapp.com/send/?phone=5491127541336&text=Hola%21+Me+gustar%C3%ADa+realizar+un+pedido.&app_absent=0" 
          className="text-white bg-red-600 p-4 rounded-md text-sm sm:text-base md:text-lg font-bold">Contactanos</Link>
      </div>
          </section>
  )
}

export default Hero