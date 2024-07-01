import Menu from './misc/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import api from './misc/api.js';
import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    try {
      api.Post
      .getAll()
      .then(data => {
        setPosts(data)
        console.log(posts)
      })
      .catch(e => {
        console.error(e)
      })
    } catch (e) {
      console.error(e)
    }
  }, [])
  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className='container mt-4'>
        {posts.map(p => (
          <div className="cardPost" key={p.idPost}>
            <img src="fondo.jpg" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{p.tituloPost}</h5>
              <p className="card-text">{p.textoPost}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
