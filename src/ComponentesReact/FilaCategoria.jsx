const FilaCategoria =  ({categoria }) => {

    //Devolvemos y separamos las categorias
    return (
        <tr>
            <th colSpan="3">{categoria}</th> 
        </tr>
    );    
}

//Exportamos para usar en otro documento
export default FilaCategoria;

// Aca tampoco tengo claro si el colSPan funciona correctamente