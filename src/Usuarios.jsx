function Usuarios(){
    let User=[
        {nombre:"juan", apellido:"perez", direccion:"123"},
        {nombre:"pedro", apellido:"picapiedra", direccion:"ABC"}
    ]
    return(
        <div>
            {User[0].nombre}
            {User.map((i)=>(
                <p>{i.nombre} - {i.apellido} - {i.direccion}</p>))}
        </div>
    )
}
export default Usuarios;