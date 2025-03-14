const Product = ({product}) => {
  return (
    <div style={{backgroundImage: `url(${product.img})`}} className="w-full place-self-center bg-center h-[250px] bg-no-repeat p-4 bg-cover rounded-md grid items-end bg-[#131311]">
        <div className="flex flex-col text-white">
         <h3 className="font-bold text-base sm:text-lg md:text-xl">{product.name}</h3>
        </div>
        </div>  
  )
}

export default Product