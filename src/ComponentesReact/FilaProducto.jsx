const FilaProducto = ({ producto }) => {

    //Si el producto no tiene stock se va a guardar en estiloSinStock
    const estiloSinStock = {};
    if (producto && producto.stock === 0) {
        estiloSinStock.textDecoration = 'line-through'; 
    }

    //Devolvemos cada fila de cada producto
    return (
        <tr>
            <td style={estiloSinStock}>{producto?.nombre}</td>
            <td>{producto?.precio}</td>
            <td>{producto?.stock}</td>
        </tr>
    );
};

//Exportamos para usar en otro documento
export default FilaProducto;
