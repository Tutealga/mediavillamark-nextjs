import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Procesos from "@/components/Procesos";
import FilteredProducts from "@/components/FilteredProducts";

export default function Home({ searchParams }) {

  return (
    <>
   <Hero background={'https://firebasestorage.googleapis.com/v0/b/mediavillamark-46e3c.appspot.com/o/banner.jpg?alt=media&token=fc3f8455-de15-4fd9-aac8-c024aef7ff43&_gl=1*1uwnd8e*_ga*MjA3NDgxOTM2NC4xNjg1NTY1MTQ4*_ga_CW55HF8NVT*MTY5ODAxMzYwOS45Ni4xLjE2OTgwMTM3MzguNDQuMC4w'}>Distribuidores de carne:<br/>Venta de carne al por mayor</Hero>
    <main className="flex mx-auto min-h-screen flex-col max-w-[1200px] gap-10">
    <Clients/>
   <Procesos/>
    <FilteredProducts params={searchParams.category}/>
   </main>
    </>
  )
}
