import React from "react";
import './custom-button.styles.scss'

const CustomButton = ({children, onClick, isGoogleSignIn, ...otherProps}) => {
    return(
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={onClick}>
            {children}
        </button>
    )
}

export default CustomButton;