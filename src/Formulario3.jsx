import { useState } from "react";

function Formulario3(){

    const [id, setId] = useState(0);
    const [marca, setMarca] = useState("");
    const [precio, setPrecio] = useState(0);
    const [propietario, setPropietario] = useState("");
    const [tipo, setTipo] = useState("");

    const [usuario, setUsuario] = useState([]);//arreglo de objetos

    function guardar(){
        let datoss = { id, marca, precio, propietario, tipo };
        setUsuario([...usuario, datoss]);
        console.log(usuario);
    }

    return(
        <div>
            <h1>FORMULARIO 3 </h1>

            <label>Id</label>
            <input required onChange={(event)=>setId(event.target.value)} />
            <p>{id}</p>

            <label>Marca</label>
            <input required onChange={(event)=>setMarca(event.target.value)} />
            <p>{marca}</p>

            <label>Precio</label>
            <input required onChange={(event)=>setPrecio(event.target.value)} />
            <p>{precio}</p>

            <label>Propietario</label>
            <input onChange={(event)=>setPropietario(event.target.value)} />
            <p>{propietario}</p>

            <label>Tipo</label>
            <input onChange={(event)=>setTipo(event.target.value)} />
            <p>{tipo}</p>

            <button onClick={guardar}>Guardar</button>

           <table>
            <thead>
                <tr>
                 
                    <th>id</th>
                    <th>marca</th>
                    <th>precio</th>
                    <th>propietario</th>
                    <th>tipo</th>
                </tr>
            </thead>
            <tbody>
            {
                usuario.map((u)=>(
                     <tr>
                            <td>{u.id}</td>
                            <td>{u.marca}</td>
                            <td>{u.precio}</td>
                            <td>{u.propietario}</td>
                            <td>{u.tipo}</td>
                        </tr>
                ))
            }
            </tbody>
            </table>
        </div>
    )
}

export default Formulario3;