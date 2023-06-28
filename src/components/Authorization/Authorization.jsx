import React, { useState } from "react";

import s from "./Authorization.module.scss";

function Authorization({ setOpenAuthorization }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleClose = () => {
        setOpenAuthorization(false);
      };

    return (
        <div className={s.authorization}>
            <div className={s.container}>
                <div className={s.topContainer}>
                    <div className={s.title}>Войдите в профиль</div>
                    <div className={s.closeButton} onClick={handleClose}>x</div>
                </div>

                <input className={s.input}
                    value={email} 
                    onChange={onEmailChange} 
                    placeholder="E-mail" 
                    label="Email Address"
                ></input>

                <input className={s.input}
                    value={password} 
                    onChange={onPasswordChange} 
                    placeholder="Пароль" 
                    label="Password"
                ></input>

                <button>Войти</button>
            </div>
        </div>
    )
}

export default Authorization;