import React, { useState } from 'react';

function ContadorFuncional() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador((prevContador) => prevContador + 1);
  };

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default ContadorFuncional;