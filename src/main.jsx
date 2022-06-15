import ReactDOM from "react-dom";
import './index.css'

const root = document.getElementById('root');

// const mensaje = <h3>Saludo Desde El Planeta Tierra</h3>
// const titulo = <h1 className="saludo">Hello Galaxy</h1>

let box = () => {
  return (
    <div className="container">
      <h3>Saludo Desde El Planeta Tierra</h3>
      <h1 className="saludo">Hello Galaxy</h1>      
    </div>
  )
}

ReactDOM.render(box(), root);

