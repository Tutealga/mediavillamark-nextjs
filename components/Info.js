const Info = ({category}) => {

    if(category === 'cortes-vacunos'){
        return (
            <section className="flex flex-col gap-4 px-4 py-16 text-center">
            <h2 className="sm:text-3xl font-bold text-center">Venta mayorista de cortes vacunos</h2>
            <p>Somos una empresa familiar con 50 años en la industria de la carne, lo que nos avala como profesionales. Ofrecemos a nuestros clientes, muchos de ellos reconocidos en todo el pais, carne vacuna de ternera de la mejor calidad.</p>
            <p>Trabajamos cortes de carne de res envasados al vacio, lo que ayuda al traslado y almacenamiento junto a otros productos. Cuidando asi el higiene y durabilidad del mismo. Ademas el envasado al vacio ayuda a la tiernizacion y maduracion de la carne, mejorando asi su calidad.</p>
            </section>
        )
    } else if(category === 'cortes-cerdo'){
        return (
            <section className="flex flex-col gap-4 text-center p-4">
         <h2 className="sm:text-3xl font-bold text-center">Venta mayorista de cortes de cerdo</h2>
            <p>Poseemos en nuestro catalogo una amplia variedad de cortes de cerdo para su venta al por mayor, cumpliendo con los mayores y más exigentes estandares de calidad e higiene. Contamos con certificaciones que avalan nuestro compromiso con la carne y su produccion.</p>
            <p>Buscamos brindar a nuestros clientes la carne de la mejor calidad, comenzando por la previa seleccion de los productos para luego trabajarlos. Nos diferenciamos por nuestro compromiso y dedicacion, ademas de nuestros productos ya envasados al vacio que colaboran con la distribucion y cuidado de la carne.</p>
            </section>
            )
    } else {
        return null
    }
}

export default Info