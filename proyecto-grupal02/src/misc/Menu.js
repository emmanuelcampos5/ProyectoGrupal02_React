import React from 'react';
import './Menu.css';

class Menu extends React.Component {

    render() {

        //creamos las variables para la carga 
        const { activeComponent, SetActiveComponent } = this.props;

        return (
            <div>
                <nav className='navbar justify-content-center navbar-expand-md'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <button className='nav-link active btn btn-link'>
                                <img src="logo.png" className="logo" alt=""/>                               
                            </button>
                        </li>
                        <li className='nav-item'>
                            <button className='nav-link btn btn-link'>
                                Sobre Nosotros
                            </button>
                        </li>
                        <li className='nav-item'>
                            <button className='nav-link btn btn-link'>
                                Contacto
                            </button>
                        </li>                    
                        <div className='loader'></div>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;