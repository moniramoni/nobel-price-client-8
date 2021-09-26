import React from 'react';
import './Header.css';
import logo from '../../images/logo-nobel.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="header-top">
                    <div className="logo">
                        <div>
                            <img src={logo}alt="logo"/>
                        </div>
                        <div>
                            <h1 className="header-name">Nobel<br></br><span className="dot">...</span><span className="price">Prize</span> </h1>
                        </div>
                    </div>
                    <div className="menu">
                        <a href="/Nobel-Prizes">Nobel Prizes</a>
                        <a href="/Laureates">Laureates</a>
                        <a href="/Nomination">Nomination</a>
                        <a href="/News-Events">News & Events</a>
                    </div>
                </div>
                <div className="secondary-header">
                    <div className="saerch-field">
                        <input type="text" placeholder="Search by Categories (Physics, Chemistry, Medicine, Literature, Peace Prize, Economics Science)"/>
                        <button>Search</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;