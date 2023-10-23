import { getProducts } from "@/services/fetchDocs";
import Product from "./Product";
import NotFound from "./NotFound";

const Products = async ({params}) => {
    const products = await getProducts({params});

  if(products.length > 0) {
    return (
      <section className="w-full flex flex-col gap-4 items-center">
        <h2 className="sm:text-2xl font-bold text-center">Nuestros productos</h2>
    <article className="w-full p-4 gap-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] items-center">
    {
        products.map(product => <Product key={product.id} product={product}/>)
    }
    </article>
      </section>
      )
  } else {
    return <NotFound />
  }

}

export default Products