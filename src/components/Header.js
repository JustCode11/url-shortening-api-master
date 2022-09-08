import React, { useState } from 'react';
import Logo from '../images/logo.svg';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [reset, setReset] = useState(true);

    const toggleClass = () => {
        setTimeout(() => setReset(true), 250);
        return openMenu ? 'drop-in' : 'pull-up';
    };

    const handleMobileMenu = (evt) => {
        setReset(cur => !cur);
        setOpenMenu(cur => !cur);
    }

    return (
        <header className={`header containerSmall ${openMenu ? 'open' : ''}`}>
            <div className="header__left">
                <div className="header__left__logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="header__left__links hide-for-mobile">
                    <nav>
                        <a aria-label="Go to Features" href="#">Features</a>
                        <a aria-label="Go to Pricing" href="#">Pricing</a>
                        <a aria-label="Go to Resources" href="#">Resources</a>
                    </nav>
                </div>
            </div>
            <div className="header__right">
                <div className="header__right__user-buttons hide-for-mobile">
                    <a aria-label="Go to Login" href="#">Login</a>
                    <button>Sign Up</button>
                </div>
                <div className="header__right__mobile-menu hide-for-desktop" onClick={handleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`header__mobile-menu-links ${reset ? '' : toggleClass()}`}>
                <div className="header__mobile-menu-links__top">
                    <a aria-label="Go to Features" href="#">Features</a>
                    <a aria-label="Go to Pricing" href="#">Pricing</a>
                    <a aria-label="Go to Resources" href="#">Resources</a>
                </div>
                <div className="header__mobile-menu-links__bottom">
                    <a aria-label="Go to Login" href="#">Login</a>
                    <button>Sign Up</button>
                </div>
            </div>
        </header>
    )
}

export default Header