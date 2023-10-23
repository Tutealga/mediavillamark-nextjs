const Product = ({product}) => {
  return (
    <div style={{backgroundImage: `url(${product.img})`}} className="w-[200px] bg-center h-[250px] bg-no-repeat p-4 bg-cover rounded-md grid items-end bg-[#131311]">
        <div className="flex flex-col text-white">
         <h3 className="font-bold">{product.name}</h3>
        <p>{product.price.toLocaleString('es-AR', {currency:'ARS',style:'currency', minimumFractionDigits: 0})}/kg</p>
        </div>
        </div>  
  )
}

export default Product