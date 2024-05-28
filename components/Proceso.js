const Proceso = ({children, title, description}) => {
  return (
    <div className="flex flex-col justify-center gap-4 w-full ">
        <i className="text-white">{children}</i>
        <h3 className="sm:text-xl font-bold text-sm">{title}</h3>
        <p className="sm:text-base text-xs">{description}</p>
    </div>
  )
}

export default Proceso