import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import reactlogo from '../../assets/images/react.svg';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div>
                    <img width="100" height="100" className={classes.logo} src={logo} />
                </div>
                <div class="textRight">
                    <img width="100" height="100" src={reactlogo} alt="React" className={classes.reactLogo} />
                    <strong>React</strong>
                </div>
            </div>


        </header>
    )
}

export default Header