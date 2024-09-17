import React from 'react';

function Producto({ nombreProducto, precio }) {
  return (
    <div>
      <h2>{nombreProducto}</h2>
      <p>Precio: ${precio}</p>
    </div>
  );
}

export default Producto;
