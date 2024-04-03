const Product = ({product}) => {

  return (
        <div className="flex flex-col text-white items-center justify-center gap-2">
        <div style={{backgroundImage: `url('https://assets-global.website-files.com/64c26cc84790d118b80c38c9/6529c5fdb05ba5609da216c9_monad-logo-mark-full-color-rgb.svg')`}} className="w-[100px] h-[100px] bg-center bg-no-repeat bg-cover flex items-center justify-center">
            <img src={product.img} className="w-[70px] h-[70px] rounded-full"/>
            </div>
            <h3 className="text-lg">{product.name}</h3>
            </div>  
  )
}

export default Product