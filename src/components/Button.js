import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outside'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonSyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0]; 

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <Link to='/Get on waitlist' className='btn-mobile'>
            <button
            className ={`btn ${checkButtonSyle} ${checkButtonSize}`}
            onClick={onClick}
            type = {type}
            >
            {children}
                
            </button>
        </Link>
    )
};