import React, { useState } from 'react';
import './style.scss';
import Logo from '../../assets/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import TryWorkGroupModal from '../tryWorkGroupModal';

export default function Header() {

    const [mobileVisible, setMobileVisible] = useState(false);
    const [tryWorkGroupModalVisible, setTryWorkGroupModalVisible] = useState(false);

    return (
        <>
            <div className="header">
                <a tabIndex={1} href="#content" className="skip-to-content button">
                    Skip to content
                </a>
                <NavLink to="/" className="header-logo">
                    <img src={Logo} alt="WorkGroup Logo" />
                </NavLink>
                <a onClick={() => {setMobileVisible(!mobileVisible)}} href="#null" className="header-menu-mobile-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </a>
                <div className={`header-menu-items ${(mobileVisible ? ' header-menu-items--mobile-visible' : '')}`}>

                    <div onClick={() => {setMobileVisible(false)}} className="header-menu-mobile-close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>

                    <NavLink className="header-menu-item" to="/">Home</NavLink>
                    <NavLink className="header-menu-item" to="/features">Features</NavLink>
                    <button onClick={() => {setTryWorkGroupModalVisible(true)}} className="header-menu-item">Try WorkGroup</button>
                    <a className="header-menu-item" href="https://github.com/BerkeAras/WorkGroup/releases" rel="noreferrer" target="_blank">Download</a>
                    <a className="header-menu-item" href="https://github.com/BerkeAras/WorkGroup" rel="noreferrer" target="_blank">GitHub</a>
                </div>
            </div>

            {tryWorkGroupModalVisible && (<TryWorkGroupModal closeModal={() => {setTryWorkGroupModalVisible(false);}} />)}
        </>

    )
}