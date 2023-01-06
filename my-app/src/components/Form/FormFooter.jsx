import React from "react";
import s from './Form.module.css'

const FormFooter = (props) => {
    return (
        <div className={s.form_foot}>
            <form action="http://localhost:8888" method="post">
                <input type="number" placeholder="enter contact" name="contact" />
                <input type="submit" value="Отправить" className={s.but_foot} />
            </form>
            <p>
            <a href="/"><img src="https://thypix.com/wp-content/uploads/2020/04/white-arrow-22-700x368.png" ></img></a>
            </p>
        </div>
    )
}

export default FormFooter;