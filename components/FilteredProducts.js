import { getProducts } from "@/services/fetchDocs";
import Product from "./Product";
import Filters from "./Filters";

const FilteredProducts = async ({params}) => {
    const products = await getProducts({params});

  if(products.length > 0) {
    return (
      <section className="w-full flex flex-col gap-4 items-center py-16 px-3">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">Nuestros productos</h2>
          <Filters/>
    <article className="w-full py-4 gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center">
    {
        products.map(product => <Product key={product.id} product={product}/>)
    }
    </article>
      </section>
      )
  } else {
    return(
      <section className="w-full flex flex-col gap-4 items-center py-16 px-3">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">Nuestros productos</h2>
          <Filters/>
<p>Esta categoria no tiene productos.</p>
      </section>
    )
  }

}

export default FilteredProducts