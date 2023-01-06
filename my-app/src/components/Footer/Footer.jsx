import React from "react";
import s from './Footer.module.css'
import {NavLink} from "react-router-dom";

const Footer = (props) => {
    return <footer className={s.footer}>
        <div className={s.link} >
            <NavLink to='/formfoot' className={s.l}>Указать контактные данные</NavLink>
        </div>

    </footer>
}

export default Footer;