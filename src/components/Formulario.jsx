import { Fragment } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'
const Formulario = () => {

  const { datos, handleChangeDatos, error, setError, cotizarCafe } = useCotizador()

  const handleSubmit = e => {
      e.preventDefault()


      if(Object.values(datos).includes('')) {
          setError('Todos los campos son obligatorios')
          return
      }

      setError('')

      cotizarCafe()

  }

  return (
    <>

      
        { error && <Error /> }
        <form 
            onSubmit={handleSubmit}
        >
            <div className='my-3'>
                <label className="block mb-3 font-bold uppercase text-gray-900">
                    Marca:
                </label>
                <select
                    name="marca"
                    className="w-full bg-white border p-3 rounded-md border-gray-900"
                    onChange={ e => handleChangeDatos(e) }
                    value={datos.marca}
                >
                    <option value="">
                        --Selecciona Marca--
                    </option>

                    { MARCAS.map( marca => (
                        <option
                            key={marca.id}
                            value={marca.id}
                        >
                            {marca.nombre}
                        </option>
                    ))}

                </select>
            </div>
            <div className='my-5'>
                <label className="block mb-3 font-bold uppercase text-gray-900">
                    Año:
                </label>
                <select
                    name="year"
                    className="w-full bg-white border p-3 border-gray-900 rounded-md"
                    onChange={ e => handleChangeDatos(e) }
                    value={datos.year}
                >
                    <option value="">
                        --Selecciona Año--
                    </option>

                    { YEARS.map( year => (
                        <option
                            key={year}
                            value={year}
                        >
                            {year}
                        </option>
                    ))}

                </select>
            </div>
            <div className='my-5'>
                <label className="block mb-3 font-bold uppercase text-gray-900">
                    Elige un Plan:
                </label>

                <div className='flex gap-3 items-center'>
                    { PLANES.map(plan => (
                        <Fragment key={plan.id}>
                            <label>{plan.nombre}</label>
                            <input 
                                type="radio"
                                name="plan"
                                value={plan.id}
                                onChange={ e => handleChangeDatos(e) }
                            />
                        </Fragment>
                    )) }
                </div>
                <p className='py-2 text-yellow-500'>Se considera al Mayor una compra por mas de 10 unidades.</p>
                
            </div>

            <input 
                type="submit"
                className='w-full rounded-md bg-yellow-600 hover:bg-yellow-700 transition-colors cursor-pointer text-white p-3 uppercase font-bold '
                value="Cotizar"
            />
        </form>
    
    </>
  )
}

export default Formulario