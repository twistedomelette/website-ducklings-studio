import './styles.scss';
import React from "react";
import logoSvg from '../../assets/img/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { routes } from "../../routes/routes";

function Header() {
    const location = useLocation();

    return (
        <header className="header-section w-100 position-fixed">
            <div className="header-container d-flex align-items-center justify-content-between">
                <img src={logoSvg} alt="logo" />
                <div className="header__links">
                    <Link className={"header__link " + (location.pathname === routes.home.path ?
                        'header__link-active' : 'header__link-inactive')} to="/">Home</Link>
                    <Link className={"header__link " + (location.pathname === routes.blog.path ?
                        'header__link-active' : 'header__link-inactive')} to={routes.blog.path}>Blog</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;