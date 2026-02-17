function EstadoSesion() {
  const logueado = false;
  const rol = "admin";

  let mensaje = "";

  if (!logueado) {
    mensaje = "Inicie sesión";
  } else if (rol === "admin") {
    mensaje = "Panel Admin";
  } else {
    mensaje = "Panel Usuario";
  }

  return (
    <div>
      {mensaje}
    </div>
  );
}

export default EstadoSesion;
