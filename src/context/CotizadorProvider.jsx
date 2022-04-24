import { useState, createContext } from 'react' // Crear el Context
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers'


/* Se recomienda que el context y el provider tengan el mismo nombre al inicio */
const CotizadorContext = createContext()  //

/*
    El provider sera el lugar donde puedo definir el state , tener effects y definir funciones. Provider es de donde vienen los datos, la fuente.

*/

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)


    const handleChangeDatos = e => {
       setDatos({
           ...datos,
           [e.target.name] : e.target.value
       })
    }

    const cotizarCafe = () => {
        //base
        let resultado = 10000


        //obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)
        console.log(diferencia)


        //hay que restar el 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100


        
        //Juan valdez 15%
        //luwak 30%
        //kenia 5%
        resultado *= calcularMarca(datos.marca)
       


        //basico 20%
        //completo 50%
        resultado *= calcularPlan(datos.plan)

        //Formatear Dinero
        resultado = formatearDinero(resultado)

        setCargando(true)

        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000)
        
    }


    return(
        <CotizadorContext.Provider
            value={{
              handleChangeDatos,
              datos,
              error,
              setError,
              cotizarCafe,
              resultado,
              cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export{
    CotizadorProvider
}

export default CotizadorContext