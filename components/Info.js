const Info = ({category}) => {

    if(category === 'cortes-vacunos'){
        return (
            <section className="flex flex-col gap-4 px-4 py-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Venta mayorista de cortes vacunos</h2>
            <p className="text-balance text-sm sm:text-base md:text-lg">Seleccionamos cuidadosamente cada corte y empleamos el envasado al vacío para asegurar frescura, higiene y calidad, favoreciendo además la ternura y maduración de la carne.
            </p>
            <p className="text-balance text-sm sm:text-base md:text-lg">Nos enorgullece cumplir con altos estándares de calidad e higiene, y contar con certificaciones que respaldan nuestro compromiso en cada proceso.</p>
            <p className="text-balance text-sm sm:text-base md:text-lg">La dedicación a nuestros clientes y la excelencia de nuestros productos son la esencia de nuestra empresa.</p>
            </section>
        )
    } else {
        return null
    }
}

export default Info