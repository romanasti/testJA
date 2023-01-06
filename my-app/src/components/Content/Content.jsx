import React from "react";
import s from './Content.module.css'
import {NavLink} from "react-router-dom";

const Content = (props) => {
    return <main className={s.content}>
        <div className={s.link} >
            <NavLink to='/formcont' className={s.l}>Внести текст</NavLink>
        </div>
    </main>
}

export default Content;