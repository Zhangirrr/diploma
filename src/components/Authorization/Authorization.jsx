import React from "react";

import s from "./Authorization.module.scss";

import Button from "../Button";

function Authorization () {
    return (
        <div className={s.authorization}>
            <div className={s.inputs}>
                <div className={s.closeIcon}>x</div>
                <div className={s.title}>Войдите в свой профиль</div>
                
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

                <button>Войти</button>
            </div>
        </div>
    )
}

export default Authorization;