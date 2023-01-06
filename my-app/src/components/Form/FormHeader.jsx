import React from "react";
import s from './Form.module.css'

const FormHeader = (props) => {
    return (
        <div className={s.form_head}>
            <form action="http://localhost:8888" method="post">
                <input type="text" placeholder="enter name" name="name" />
                <input type="text" placeholder="enter surname" name="surname" />
                <input type="text" placeholder="enter middle name" name="middle" />
                <input type="number" placeholder="enter age" name="age" />
                <input type="email" placeholder="enter e-mail" name="email" />
                <input type="submit" value="Отправить" className={s.but_head}  />
            </form>
            <p>
                <a href="/"><img src="https://thypix.com/wp-content/uploads/2020/04/white-arrow-22-700x368.png" ></img></a>
            </p>
        </div>
    )
}

export default FormHeader;