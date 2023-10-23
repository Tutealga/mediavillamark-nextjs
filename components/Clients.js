import Image from "next/image"

import dia from '../assets/supermercado-dia.svg'
import kansas from '../assets/mini_brand.png'
import grupol from '../assets/grupol.png'
import whim from '../assets/whim.png'

const Clients = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full p-4">
        <h2 className="sm:text-2xl font-bold text-left">Confian en nosotros</h2>
          <article className="grid items-center justify-center w-full gap-12 grid-cols-[repeat(auto-fill,minmax(100px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
            <Image className="mx-auto w-full h-auto" src={dia} alt={"hola"}/>
            <Image className="mx-auto w-full h-auto" src={kansas} alt={"hola"}/>  
            <Image className="mx-auto w-full h-auto" src={grupol} alt={"hola"}/> 
            <Image className="mx-auto w-full h-auto" src={whim} alt={"hola"}/>             
          </article>
    </section>
  )
}

export default Clients