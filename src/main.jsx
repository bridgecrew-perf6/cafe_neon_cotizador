import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/* 

  Luego de instalar las despencencias al iniciar el proyecto

  ejecutamos

  npx tailwindcss init -p

  para crear el archivo de configuracion de tailwindcss y postcss

  modificamos el archivo de configuracion tail...agregando
  content: ["index.html", "./src/** /*.jsx"], 

  luego en index css importamos
  @tailwind base
  @tailwind components
  @tailwind utilities

  eliminamos el app.css, favicon, 


*/



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
