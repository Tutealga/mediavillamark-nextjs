import Products from "@/components/Products";
import Hero from '@/components/Hero';
import '@/styles/globals.css';
import Info from "./Info";
import preparados from '../assets/preparados.jpg';
import vacunos from '../assets/vacuno.jpg';
import embutidos from '../assets/achuras.jpg';

const images = {"preparados": preparados.src, "cortes-vacunos": vacunos.src, "embutidos": embutidos.src}

const Categories = ({category}) => {

  const img = () => {
    const image = Object.keys(images).find((image) => image === category)
    return images[image]
    }

  const title = category.split("-").join(" ")

  return (
    <>
     <Hero background={img()}>Distribuidores de {title}</Hero>
    <main className="flex mx-auto flex-col max-w-[1200px]">
    <Info category={category}/>
     <section className="w-full flex flex-col gap-4 items-center py-16">
   <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">Proveedores de {title}</h2>
<Products params={category}/>
</section>
</main>
</>  
  )
}

export default Categories