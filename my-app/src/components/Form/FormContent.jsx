import React from "react";
import s from './Form.module.css'

const FormContent = (props) => {
    return (
        <div className={s.form_cont}>
            <form action="http://localhost:8888" method="post">
                <textarea type="text" placeholder="enter text" name="text"/>
                <input type="submit" value="Отправить" className={s.but_cont}  />
            </form>
            <p>
            <a href="/"><img src="https://thypix.com/wp-content/uploads/2020/04/white-arrow-22-700x368.png" ></img></a>
            </p>
        </div>
    )
}

export default FormContent;