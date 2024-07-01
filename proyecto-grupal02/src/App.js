import Menu from './misc/Menu';
import PostLista from './Post/PostLista.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className='container mt-4'>
        <PostLista />
      </div>
    </div>
  );
}

export default App;
