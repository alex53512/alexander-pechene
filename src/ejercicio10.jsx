function TarjetaUsuario({ persona, puedeVerDetalle }) {
  const { nombre, edad, activo } = persona;

  return (
    <div>
      <h4>{nombre || "Nombre no registrado"}</h4>
      <p>Edad: {edad}</p>
      <p>Activo: {activo ? "Sí" : "No"}</p>
      {puedeVerDetalle(persona) && <button>Ver detalle</button>}
    </div>
  );
}

function App() {

  const usuarios = [
    { id: 1, nombre: "Carlos", edad: 20, activo: true },
    { id: 2, nombre: "", edad: 16, activo: true },
    { id: 3, nombre: "Laura", edad: 30, activo: false }
  ];

  function puedeVerDetalle(usuario) {
    return usuario.activo && usuario.edad >= 18;
  }

  return (
    <div>
      {usuarios.map((u) => (
        <TarjetaUsuario
          key={u.id}
          persona={u}
          puedeVerDetalle={puedeVerDetalle}
        />
      ))}
    </div>
  );
}

export default App;
