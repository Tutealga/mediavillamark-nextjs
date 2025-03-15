const Proceso = ({children, title, description}) => {
  return (
    <div className="flex flex-col justify-center gap-4 w-full ">
        <i className="text-white">{children}</i>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{title}</h3>
        <p className="text-balance text-sm sm:text-base md:text-lg">{description}</p>
    </div>
  )
}

export default Proceso