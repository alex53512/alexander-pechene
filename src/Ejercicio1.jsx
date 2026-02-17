function Saludo() {

  const nombre = "Alex";
  const ciudad = "Popayán";
  const año = 2026;

  return (
    <div>
      <h1>Saludo</h1>
      <p>{`Hola, soy ${nombre} de ${ciudad} y estamos en el año ${año}`}</p>
    </div>
  );
}

export default Saludo;
