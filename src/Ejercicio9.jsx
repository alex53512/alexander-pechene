function Notificaciones() {

  const notificaciones = [
    "Tienes un nuevo mensaje",
    "Tu pedido fue enviado",
    "Actualización disponible"
  ];

  const mostrarNotificaciones = true; 

  return (
    <div>
      <h2>Notificaciones</h2>

      {
        mostrarNotificaciones && notificaciones.length > 0
          ? notificaciones.map((n, i) => (
              <p key={i}>{n}</p>
            ))
          : "No hay notificaciones"
      }
    </div>
  );
}

export default Notificaciones;
