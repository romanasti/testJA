import React from "react";
import { useState, useEffect } from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return <header className={s.header}>

        <div className={s.link} >
            <NavLink to='/formhead' className={s.l}>Заполнить информацию</NavLink>
        </div>

    
    </header>
    
}

export default Header;