import Clients from "@/components/Clients";
import HeroInicio from "@/components/HeroInicio";
import Procesos from "@/components/Procesos";
import Trabajamos from "@/components/Trabajamos";
import FilteredProducts from "@/components/FilteredProducts";

export default function Home({ searchParams }) {

  return (
    <>
   <HeroInicio background='/assets/banner.jpg'>
    Distribuidores de carne:<br/>Venta de carne al por mayor
    </HeroInicio>
    <main className="flex min-h-screen flex-col items-center w-full">
   <Procesos/>
      <Trabajamos />
    <Clients/>
    <FilteredProducts params={searchParams.category}/>
   </main>
    </>
  )
}
