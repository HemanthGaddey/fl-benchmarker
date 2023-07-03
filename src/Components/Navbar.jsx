import React from "react";
import '../Navbar.css';
import export_icon from '../Assets/export.png';

export default function Navbar(){
    return(
        <nav>
            <a className='home' href='#'>Home</a>
            <a className='about' href='#'>About</a>
            <a className='export' href='#'>
                Export
                <img src={export_icon}></img>
            </a>
        </nav>
    );
}