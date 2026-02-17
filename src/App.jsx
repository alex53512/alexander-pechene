import Saludo from "./Ejercicio1"
import Edad from "./Ejercicio2"
import Estado from "./Ejercicio3"
import Productos from "./ejercicio4"
import SaludoUsuario from "./ejercicio6"
import Perfil from "./Ejercicio7"
import EstadoSesion from "./Ejercicio8"
import Notificaciones from "./Ejercicio9"
import Usuarioss from "./ejercicio10"
function App() {


  return (
    <div>
      <Saludo></Saludo>
      <Edad></Edad>
      <Estado></Estado>
      <Productos></Productos>
      <br />
      <SaludoUsuario mensaje="Hola" nombre="Carlos" />
      <SaludoUsuario mensaje="Bienvenido" nombre="Ana" />
      <SaludoUsuario mensaje="Saludos" nombre="Luis" />
      <br />
      <Perfil></Perfil>
      <br /><br />
      <EstadoSesion></EstadoSesion>
      <br /><br />
      <Notificaciones></Notificaciones>

      <br /> <br />
      <tarjetadeusuario></tarjetadeusuario>
    
    </div>
  )
}

export default App
