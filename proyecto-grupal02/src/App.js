import Menu from './misc/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className='container mt-4'>
        {/* Este div es el que crea por cada publicacion */}
        <div className="cardPost">
          <img src="/fondo.jpg" className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
