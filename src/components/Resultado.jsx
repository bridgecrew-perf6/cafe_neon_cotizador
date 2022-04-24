import { useCallback, useMemo, useRef } from 'react' //indico cuando hago re-render
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from '../constants'

const Resultado = () => {

    const { resultado, datos } = useCotizador()
    const { marca, plan, year } = datos
    const yearRef = useRef(year) /* useRef congela el valor para que no cambie luego la mostramos con yearRef.current */

    const [nombreMarca] = useMemo( () =>
        MARCAS.filter(m => m.id === Number(marca)), 
        [resultado])  /* useMemo es muy similar a useCallback */

    const [nombrePlan] = useCallback(PLANES.filter(p => p.id === Number(plan)),[resultado]) //cuando cambie resultado se hace el re-render

    if(resultado === 0) return null

  return (
    <div className="bg-gray-100 rounded-md text-center mt-5 p-5 shadow">
       <h2 className="text-gray-900 font-black text-3xl">Resumen</h2>

       <p className="my-2">
            <span className="font-bold">Marca: </span>
            {nombreMarca.nombre}
       </p>

       <p className="my-2">
            <span className="font-bold">Plan: </span>
            {nombrePlan.nombre}
       </p>

       <p className="my-2">
            <span className="font-bold">Año del Cafe: </span>
            {yearRef.current}
       </p>

       <p className="my-2 text-2xl">
            <span className="font-bold">Total Cotizacion: </span>
            {resultado}
       </p>
    </div>
  )
}

export default Resultado