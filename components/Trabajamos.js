const Trabajamos = () => {
  return (
    <section id="calidades" className="py-16 text-center bg-red-600 text-white w-full grid items-center justify-center">
      <div className="flex flex-col gap-4 px-3 w-full max-w-6xl">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Cómo trabajamos</h2>
    <p className="text-balance text-sm sm:text-base md:text-lg">En nuestro catálogo, los cortes están disponibles en cuatro niveles de calidad:</p>
    <ul className="text-left flex items-center md:items-start flex-col mx-auto list-disc list-inside">
      <li className="font-bold text-balance text-center">
           120 - Vaca buena de cartílago.
      </li>
      <li className="font-bold text-balance text-center">
      125 - Novillito/Vaquillona especial de 110 a 135 kgs la media res.
      </li>
      <li className="font-bold text-balance text-center">
      130 - Novillito/Vaquillona consumo hasta 110 kgs la media res.
      </li>
      <li className="font-bold text-balance text-center">
      107 - Novillo pesado especial de 140 a 170 kgs la media res.
      </li>
    </ul>
    <p className="text-balance text-sm sm:text-base md:text-lg">Estas clasificaciones responden a distintos estándares de terneza, marmoleo y características del producto, asegurando opciones que se adaptan a diversas necesidades del mercado.</p>
    <p className="text-balance text-sm sm:text-base md:text-lg">Ya sea para una experiencia premium o una elección equilibrada en calidad y rendimiento, cada categoría garantiza frescura, sabor y el mejor rendimiento en cocina.</p>
      </div>
    </section>
  )
}

export default Trabajamos