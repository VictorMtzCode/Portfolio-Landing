import './Navbar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);

    return (
        <nav>
            <div className='nav'>
                <img className='nav-logo' src='./assets/images/programming-logo.svg' alt="programming-logo" />
                <ul className={navActive ? "nav-links active" : 'nav-links'}>
                    <li className="nav-link" onClick={() => setNavActive(false)}>
                        <NavLink exact to='/' activeClassName={'nav-link is-active'}>HOME</NavLink>
                    </li>
                    <li className="nav-link" onClick={() => setNavActive(false)}>
                        <NavLink to='/aboutme' activeClassName={'nav-link is-active'}>ABOUT ME</NavLink>
                    </li>
                    <li className="nav-link" onClick={() => setNavActive(false)}>
                        <NavLink to='/projects' activeClassName={'nav-link is-active'}>PROJECTS</NavLink>
                    </li>
                    <li className="nav-link" onClick={() => setNavActive(false)}><a href='#contact'>CONTACT</a></li>
                </ul>
                <div className='burger' onClick={() => setNavActive(!navActive)}>
                    <div className={navActive ? 'line-1 toggle' : 'line-1'}></div>
                    <div className={navActive ? 'line-2 toggle' : 'line-2'}></div>
                    <div className={navActive ? 'line-3 toggle' : 'line-3'}></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
