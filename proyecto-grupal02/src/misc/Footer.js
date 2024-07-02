import React from 'react';
import './Menu.css';

class Footer extends React.Component {

    render() {

        return (
            <div>
                <nav className='navbar navbar-expand-md'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <button className='nav-link active btn btn-link'>
                                <img src="logo.png" className="logo" alt=""/>                               
                            </button>
                        </li>
                        <li>
                            <h4 className='nombres'>Emmanuel Campos Campos</h4>
                            <h4 className='nombres'>José Alberto Solórzano Ugalde</h4>
                            <h4 className='nombres'>Miguel Carballo Melendez</h4>
                            <h4 className='nombres'>Diberth Villavicencio</h4>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Footer;