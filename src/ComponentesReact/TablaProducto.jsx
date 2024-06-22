//Importamos las herramientas necesarias
import React from 'react';
import FilaProducto from './FilaProducto';
import FilaCategoria from './FilaCategoria';

// Devolvemos los productos organizados por nombre, precio y stock en una tabla.
const TablaProducto = ({ productos }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th rowSpan= "200" style={{ textAlign: 'left'  }}>Nombre</th> 
                    <th style={{ padding: '10px 20px' }}>Precio</th>
                    <th style={{ padding: '10px 20px' }}>Stock</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto, index) => (
                    <React.Fragment key={index}>
                        {(index === 0 || productos[index - 1].categoria !== producto.categoria) && (
                            <FilaCategoria categoria={producto.categoria} key={`categoria-${index}`} />
                        )}
                        <FilaProducto producto={producto} key={`producto-${index}`} />
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
};

//Exportamos para usar en otro documento
export default TablaProducto;


// <th rowSpan= "200" style={{ textAlign: 'left'  }}>Nombre</th> | intento mover la categoria mas hacia la izquierda pero no me sale