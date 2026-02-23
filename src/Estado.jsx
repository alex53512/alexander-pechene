import { useState } from "react";

function Estado() {
  const [mensaje, setMensaje] = useState("");

  return (
    <div>
      <button onClick={() => setMensaje("hola")}>Mensaje</button>
      <p>{mensaje}</p>
    </div>
  )
}

export default Estado;