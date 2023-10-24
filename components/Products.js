import { getProducts } from "@/services/fetchDocsPrueba";
import Product from "./Product";

const Products = async ({params}) => {
    const products = await getProducts({params});

    return ( 
    <article className="w-full p-4 gap-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] items-center">
    {
        products.map(product => <Product key={product.id} product={product}/>)
    }
    </article>
      )
}

export default Products