import { getProducts } from "@/services/fetchDocs";
import Product from "./Product";

const Products = async ({params}) => {
    const products = await getProducts({params})

    return ( 
    <article className="w-full py-4 gap-4 grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    {
        products.map((product) => <Product key={product.id} product={product}/>)
    }
    </article>
      )
}

export default Products