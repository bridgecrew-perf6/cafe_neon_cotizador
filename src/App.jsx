import { CotizadorProvider } from './context/CotizadorProvider'
import AppCotizador from './components/AppCotizador'


function App() {
  

  return (
    <CotizadorProvider
      value={{
        
      }}
    >
      <AppCotizador />
  

    </CotizadorProvider>

  )
    
}

export default App
