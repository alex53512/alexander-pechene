function Productos() {

  const productos = [
    { id: 1, nombre: "Laptop", precio: 1200, stock: 5 },
    { id: 2, nombre: "Mouse", precio: 25, stock: 0 },
    { id: 3, nombre: "Teclado", precio: 45, stock: 3 }
  ];

  return (
    <div>
      <h1>Productos</h1>

      {productos.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.nombre}</h3>
          <p>{`$${producto.precio}`}</p>
          <p>{producto.stock > 0 ? "Disponible" : "Agotado"}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Productos;
