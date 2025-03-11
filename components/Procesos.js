import Proceso from "@/components/Proceso";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDolly, faAward, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Procesos = () => {
  return (
    <section className="flex flex-col gap-4 py-16">
    <h2 className="sm:text-3xl font-bold text-center">Somos proveedores de carne</h2>
    <p className="text-center sm:text-base text-xs">Estamos integrados en todas las etapas de selección y producción de los cortes:</p>
    <div className="flex flex-col sm:grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-center gap-6 p-4">
   <Proceso title={"Compra de hacienda"} description={"Vinculos con productores de la Pampa Argentina, permitiendonos proveer razas británicas de alta terneza y excelente marmolado interno, tales como Aberdeen Angus y Hereford."}><FontAwesomeIcon icon={faHandshake} /></Proceso>
   <Proceso title={"Trabajo de la carne"} description={"Faena, desposte y envasado al vacio de los cortes, en establecimientos con los más exigentes estándares de sanidad e inocuidad, habilitados por Senasa Argentina."}><FontAwesomeIcon icon={faAward} /></Proceso>
   <Proceso title={"Logistica del producto"} description={"Estricta utilización de la cadena de frio en el almacenamiento y proceso de transporte y distribución, para asegurar la calidad y frescura de la carne."}><FontAwesomeIcon icon={faDolly} /></Proceso>
   </div>
    </section>
  )
}

export default Procesos