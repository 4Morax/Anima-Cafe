import productos from './ComponentesReact/Productos';
import TablaProducto from './ComponentesReact/TablaProducto';

function App() {
     return (
      <>
        <h1>Ánima Café</h1>
        <TablaProducto productos={productos} />
      </>
  );
}

export default App; 