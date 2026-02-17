function SaludoUsuario({ mensaje, nombre }) {
  return (
    <div>
    <p>{`${mensaje}, ${nombre}`}</p>
    </div>
  );
}

export default SaludoUsuario;
