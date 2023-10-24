import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const NotFound = () => {
    return(
        <section className="w-full flex flex-col gap-4 items-center min-h-screen">
          <FontAwesomeIcon className="w-[7rem] mt-32" icon={faFaceFrown} />
          <h1 className="text-3xl sm:text-5xl font-bold text-center">404</h1>
  <p>Esta categoria no tiene productos.</p>
  <Link href="/" className="text-white bg-red-600 p-4 w-[150px] rounded-md">Volver al inicio</Link>
        </section>
      )
}

export default NotFound