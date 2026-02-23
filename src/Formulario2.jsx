import { useState } from "react";
function Formulario2 (){
    const [nombre, setNombre] =useState("");
    const [apellido, setApellido] =useState("");
    const [direccion, setDireccion] =useState("");
    const [telefono, setTelefono] =useState("");
    const [usuario, setUsuario] =useState([])
    function guardar(){
        let datos={nombre,apellido,direccion,telefono}
        setUsuario([...usuario, datos]);
        console.log(usuario);
    }
    return(
        <div>
            <h1>FORMULARIO USUARIOS</h1>
            <label>Nombre</label>
            <input required onChange={(event)=>setNombre(event.target.value)}></input>
            <p>{nombre}</p>
            <label >Apellido</label>
            <input required onChange={(event)=>setApellido(event.target.value)}></input>
            <p>{apellido}</p>
            <label >Direccion</label>
            <input required onChange={(event)=>setDireccion(event.target.value)}></input>
            <p>{direccion}</p>
            <label >Telefono</label>
            <input onChange={(event)=>setTelefono(event.target.value)}></input>
            <p>{telefono}</p>
            <button onClick={guardar}>Guarda</button>
            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                </tr>
                </thead>
                <tbody>
                    {usuario.map((u)=>(
                        <tr>
                            <td>{u.nombre}</td>
                            <td>{u.apellido}</td>
                            <td>{u.direccion}</td>
                            <td>{u.telefono}</td>
                        </tr>

                    ))   }
                </tbody>
            </table>

        </div>
    )
}
export default Formulario2;