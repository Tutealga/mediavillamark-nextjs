import Image from "next/image"

import dia from '../assets/supermercado-dia.svg'
import kansas from '../assets/mini_brand.png'
import grupol from '../assets/grupol.png'
import whim from '../assets/whim.png'

const Clients = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full px-3 py-16">
        <h2 className="sm:text-3xl font-bold text-left text-2xl">Confian en nosotros</h2>
          <article className="grid items-center justify-center w-full gap-12 grid-cols-2 sm:grid-cols-4">
            <Image className="mx-auto w-full h-auto" src={dia} alt={"Supermercado dia"}/>
            <Image className="mx-auto w-full h-auto" src={kansas} alt={"Kansas Grill & Bar"}/>  
            <Image className="mx-auto w-full h-auto" src={grupol} alt={"Grupo L"}/> 
            <Image className="mx-auto w-full h-auto" src={whim} alt={"Whim burgers"}/>             
          </article>
    </section>
  )
}

export default Clients