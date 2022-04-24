import logo from '../img/logo.svg'
import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"
import Spinner from "./Spinner"
import Resultado from "./Resultado"

const AppCotizador = () => {

  const { resultado, cargando } = useCotizador()

  return (

    <>

        <header className="my-3">
            <h1 className="text-yellow-600 mt-10 text-center text-4xl font-black">Cotizador de Café</h1>

            <div className='flex justify-center'>
              <img className='w-20 mt-3' src={logo} alt="logo" />
            </div>
            

        </header>
        <main className="bg-neutral-500 xs:w-2/3 md:w-2/3 lg:w-2/4 mx-auto rounded-lg p-10 shadow  ">

            <Formulario />
            <div className="mt-8">
              { cargando ? <Spinner /> : <Resultado /> }
            </div>

            <p className='text-center mt-9'>Desarrollado por Emerio</p>
            
        </main>
    
    </>

  )
}

export default AppCotizador