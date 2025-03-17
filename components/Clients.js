const Clients = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full px-3 py-16 max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left">Confían en nosotros</h2>
          <article className="grid items-center justify-center w-full gap-12 grid-cols-2 sm:grid-cols-4">
            <img className="mx-auto w-full h-auto" src='/assets/supermercado-dia.svg' alt="Supermercado dia"/>
            <img className="mx-auto w-full h-auto" src='/assets/mini_brand.png' alt="Kansas Grill & Bar"/>  
            <img className="mx-auto w-full h-auto" src='/assets/grupol.png' alt="Grupo L"/> 
            <img className="mx-auto w-full h-auto" src='/assets/whim.png' alt="Whim burgers"/>             
          </article>
    </section>
  )
}

export default Clients