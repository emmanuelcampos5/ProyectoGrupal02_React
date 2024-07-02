import Menu from './misc/Menu';
import React, { useState } from 'react';
import Footer from './misc/Footer';
import PostLista from './Post/PostLista.js';
import Contacto from './Contacto';
import AboutUs from './AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [activeComponent, setActiveComponent] = useState('publicacion');

  return (
    <div>
      <div>
        <Menu SetActiveComponent={setActiveComponent}/>
      </div>
      <div className='container mt-4'>
        { activeComponent === 'publicacion' && <PostLista/>}
        { activeComponent === 'contacto' && <Contacto/>}
        { activeComponent === 'aboutUs' && <AboutUs/>}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
