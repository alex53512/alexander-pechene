import { useState } from "react"
function Formulario(){
    const [profesion,setProfesion]=useState("");
    const [guardar,setGuardar]=useState([]);
        
    return(
        <div>
          <h1>Profesion</h1>
          <label>Nombre de la profesion</label>
          <input type="text" onChange={(event)=>setProfesion(event.target.value)}></input>
          <p>{profesion}</p>
          <button onClick={()=>setGuardar([...guardar,profesion])}>Guardar</button>
          {guardar[0]}
          {guardar[1]}
          {guardar.map((pr)=>(
             <p>{pr}</p>
          ))}
          
        </div>
    )
}
    
export default Formulario