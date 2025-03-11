import Clients from "@/components/Clients";
import HeroInicio from "@/components/HeroInicio";
import Procesos from "@/components/Procesos";
import Trabajamos from "@/components/Trabajamos";
import FilteredProducts from "@/components/FilteredProducts";
import background from '@/assets/banner.jpg'

export default function Home({ searchParams }) {

  return (
    <>
   <HeroInicio background={background.src}>
    Distribuidores de carne:<br/>Venta de carne al por mayor
    </HeroInicio>
    <main className="flex mx-auto min-h-screen flex-col max-w-7xl w-full">
      <Trabajamos />
    <Clients/>
   <Procesos/>
    <FilteredProducts params={searchParams.category}/>
   </main>
    </>
  )
}
