import { getProducts } from "@/services/fetchDocs";
import Product from "./Product";

const FilteredProducts = async ({params}) => {
    const products = await getProducts({params});

    return (
      <section className="w-full flex flex-col gap-4 items-center z-20 col-span-12"> 
      <h3 className="sm:text-3xl font-bold">{params}</h3>
    <article className="w-full gap-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
    {
        products.map(product => <Product key={product.name} product={product}/>)
    }
    </article>
      </section>
      )
}

export default FilteredProducts