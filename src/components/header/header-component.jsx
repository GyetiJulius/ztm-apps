import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/084 crown.svg'
import './header-component.styles.scss'
import { auth } from "../../firebase/firebase.utils";

const Header = ({ name }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                {name ? (
                    <p className="option">Welcome {name}</p>
                ) : (
                    <p className="option">Welcome Guest</p>
                )}
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option">
                    CONTACT
                </Link>
                {
                    name ? (
                        <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                    ) : (
                        <Link className="option" to='/signin'>SIGN IN</Link>
                    )
                }
            </div>
        </div>
    )
}

export default Header;
