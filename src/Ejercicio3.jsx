function Estado() {

  function mensajeEstado(activo) {
  return activo ? <span>Activo</span> : <span>Inactivo</span>;
}

  return (
    <div>
      <h1>Estado del usuario</h1>

      <p>Usuario 1: {mensajeEstado(true)}</p>
      <p>Usuario 2: {mensajeEstado(false)}</p>
      <p>Usuario 3: {mensajeEstado(true)}</p>
    </div>
  );
}

export default Estado;
