import Menu from './misc/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>   
      <div>   
        <Menu/>
      </div>
      <div className="container-fluid">           
        {/* { activeComponent === 'curso' && <CursoList/>}
        { activeComponent === 'grupo' && <GrupoList/>} */}
        {/* <CursoList/>
        <GrupoList/> */}
      </div>      
      <div className="container-fluid">   
        {/* <Footer/> */}
      </div>
    </div>  
  );
}

export default App;
