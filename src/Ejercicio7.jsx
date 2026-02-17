function Perfil({ nombre, edad, ciudad }) {
  return (
    <div>

        <h1>Ejercicio 7</h1>
      <p>{`Nombre: ${nombre}`}</p>
      <p>{`Edad: ${edad}`}</p>
      <p>{`Ciudad: ${ciudad || "Ciudad no registrada"}`}</p>

    </div>
  );
}

export default Perfil;
