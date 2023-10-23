import Products from "@/components/Products";
import Hero from '@/components/Hero'
import '@/styles/globals.css'

const categories = ['preparados', 'cortes-vacunos', 'cortes-cerdo', 'embutidos']

const Category = ({params}) => {
const {category} = params

const img = () => {
if(category === 'preparados') return 'https://firebasestorage.googleapis.com/v0/b/mediavillamark-46e3c.appspot.com/o/preparados.jpg?alt=media&token=09e25996-1bee-44ba-a041-fac987bb00ab&_gl=1*zulhu6*_ga*MjA3NDgxOTM2NC4xNjg1NTY1MTQ4*_ga_CW55HF8NVT*MTY5Nzc1ODE2My45Mi4xLjE2OTc3NjA2NzQuNjAuMC4w'
if(category === 'cortes-vacunos') return 'https://firebasestorage.googleapis.com/v0/b/mediavillamark-46e3c.appspot.com/o/vacuno.jpg?alt=media&token=3b990287-006a-41a8-9e47-21b33c939904&_gl=1*1ijlwu1*_ga*MjA3NDgxOTM2NC4xNjg1NTY1MTQ4*_ga_CW55HF8NVT*MTY5Nzc1ODE2My45Mi4xLjE2OTc3NjA3NzIuNjAuMC4w'
if(category === 'cortes-cerdo') return 'https://firebasestorage.googleapis.com/v0/b/mediavillamark-46e3c.appspot.com/o/cerdo.jpg?alt=media&token=0aafdc54-5ce4-4a0c-a611-839374364b76&_gl=1*nkj8aw*_ga*MjA3NDgxOTM2NC4xNjg1NTY1MTQ4*_ga_CW55HF8NVT*MTY5Nzc1ODE2My45Mi4xLjE2OTc3NjA3OTguMzQuMC4w'
if(category === 'embutidos') return 'https://firebasestorage.googleapis.com/v0/b/mediavillamark-46e3c.appspot.com/o/achuras.jpg?alt=media&token=d33c918d-93d7-4e36-a47f-80bfbcc76ed0&_gl=1*19uy64g*_ga*MjA3NDgxOTM2NC4xNjg1NTY1MTQ4*_ga_CW55HF8NVT*MTY5Nzc1ODE2My45Mi4xLjE2OTc3NjA4NTkuNjAuMC4w'
}

const title = category.split("-").join(" ")

  return (
    <>
         {
          categories.includes(category)
          ?
          <Hero background={img()}>Distribuidores de {title}</Hero>
          :
          null
          }
         <main className="flex mx-auto min-h-screen flex-col max-w-[1200px] gap-10">
    <Products params={category}/>
    </main>
    </>  
    )
}

export default Category