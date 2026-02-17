function Edad() {

  function calcularEdad(anioNacimiento) {
    const anioActual = new Date().getFullYear();
    return anioActual - anioNacimiento;
  }

  return (
    <div>
      <h1>Cálculo de edad</h1>

      <p>{`Nacido en el año 2000 → Edad: ${calcularEdad(2000)} años`}</p>
      <p>{`Nacido en el año 1995 → Edad: ${calcularEdad(1995)} años`}</p>
      <p>{`Nacido en el año 2010 → Edad: ${calcularEdad(2010)} años`}</p>
    </div>
  );
}

export default Edad;
