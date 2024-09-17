import React from 'react';
import Saludo from './Component/Saludo';
import Producto from './Component/producto';
import ContadorFuncional from './Component/ContadorFuncional';
import ContadorClase from './Component/ContadorClase';
import ListaDeProductos from './Component/ListaDeProductos';
import DetalleProducto from './Component/DetalleProducto';

function App() {
  const productos = [
    { nombre: 'Moto', precio: 1000000 },
    { nombre: 'Carro', precio: 2000000 }
  ];

  return (
    <div>
      <Saludo nombre="Sharit" />
      <Producto nombreProducto="Laptop" precio={1500} />
      <ContadorFuncional />
      <ContadorClase />
      <ListaDeProductos productos={productos} />
      <DetalleProducto nombre="Celular" precio={800} descripcion="Un celular de última generación" />
    </div>
  );
}

export default App;

