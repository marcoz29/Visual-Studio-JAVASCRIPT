import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>  
        <h1><b>React:</b></h1>

        <a
          className="text"
        >
        <em>Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.
          Te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada 
          estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes 
          correctos cuando los datos cambien.</em>

       
        </a>
          <h2>*\O/*</h2> 
          <code><h2>Bienvenido!!!</h2></code>
        </p>
        <a
          className="link"
          href="https://es.reactjs.org/docs/hello-world.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5>Conceptos basicos.</h5>
        </a>
      </header>
    </div>
  );
}

export default App;
