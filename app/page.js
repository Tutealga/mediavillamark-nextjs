import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Procesos from "@/components/Procesos";
import FilteredProducts from "@/components/FilteredProducts";
import background from '@/assets/banner.jpg'

export default function Home({ searchParams }) {

  return (
    <>
   <Hero background={background.src}>Distribuidores de carne:<br/>Venta de carne al por mayor</Hero>
    <main className="flex mx-auto min-h-screen flex-col max-w-7xl w-full">
    <Clients/>
   <Procesos/>
    <FilteredProducts params={searchParams.category}/>
   </main>
    </>
  )
}
