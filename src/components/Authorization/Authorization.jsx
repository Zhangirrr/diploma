import React from "react";

import s from "./Authorization.module.scss";

import Button from "../Button";

function Authorization () {
    return (
        <div className={s.authorization}>
            <div className={s.inputs}>
                <div>Авторизация</div>
                
                <input 
                    className={s.input}
                    placeholder="E-mail" 
                >
                </input>

                <input 
                    className={s.input}
                    placeholder="Пароль" 
                >
                </input>

                <Button />
            </div>
        </div>
    )
}

export default Authorization;