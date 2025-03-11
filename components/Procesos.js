import Proceso from "@/components/Proceso";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDolly, faAward, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Procesos = () => {
  return (
    <section className="flex flex-col gap-4 py-16 px-3">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">Somos proveedores de carne</h2>
    <p className="text-balance text-sm sm:text-base md:text-lg text-center">Con 50 años de experiencia en la industria, somos una empresa familiar comprometida con ofrecer la mejor carne vacuna de ternera del país. Estamos integrados en todas las etapas de selección y producción de los cortes:</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start gap-6 py-4">
   <Proceso 
   title={"Compra de hacienda"} 
   description={`
    Mantenemos vínculos sólidos con productores de la región pampeana argentina, lo que nos permite seleccionar razas británicas de alta calidad como Aberdeen Angus y Hereford. Estas razas se destacan por su terneza y su excelente marmolado interno, ofreciendo un producto premium.
    `}>
      <FontAwesomeIcon icon={faHandshake} />
    </Proceso>
   <Proceso 
   title={"Trabajo de la carne"} 
   description={`
   Realizamos la faena, el desposte y el envasado al vacío en establecimientos certificados, que cumplen con los más altos estándares de sanidad e inocuidad, supervisados y habilitados por Senasa Argentina. Este proceso asegura la calidad y seguridad de cada corte.
   `}>
   <FontAwesomeIcon icon={faAward} />
   </Proceso>
   <Proceso 
   title={"Logistica del producto"} 
   description={`
   Implementamos una rigurosa cadena de frío en cada etapa de almacenamiento, transporte y distribución. Este cuidado garantiza que la carne llegue a nuestros clientes con toda su frescura y calidad intacta.
   `}>
    <FontAwesomeIcon icon={faDolly} />
    </Proceso>
   </div>
    </section>
  )
}

export default Procesos