import React, { useState } from "react";
import AdminHome from "./AdminHome";

function LoginIn() {
    const [IsAdmin, SetIsAdmin] = useState();
    const [Isfirst, setIsfirst] = useState(true);
    const [loginIn, setloginIn] = useState({
        name: 'name',
        password: 'password'
    })
    const handllogIn = (e) => {
        const { name, value } = e.target;
        setloginIn((prevState) => ({
            ...prevState,
            [name]: value,
    }))

    };

    const handleSignIn = () => {
        // setIsfirst(false);
        // if (loginIn.name === 'admin' && loginIn.password === '123456') {
        //     SetIsAdmin(true);
        // }
        // else {
        //     SetIsAdmin(false);
        // }
        checkPassword(loginIn.name, loginIn.password);
    }
    async function checkPassword(name, password) {
        try {
            const response = await fetch(`POST /login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "name": name, "password": password })
            });

            if (response.status === 200) {
                SetIsAdmin(true);
                return 'OK';

            } else {
                SetIsAdmin(false);
                return false;
            }
        } catch (error) {
            console.error('Error:', error);
            return false;
        }
    }



    return (
        <>
            <h1>Hello Admin</h1>
            <br />
            <input name="name" type="text" placeholder="Name" onChange={handllogIn}></input>
            <br />
            <input name="password" type="text" placeholder="Password" onChange={handllogIn}></input>
            <br />
            <button onClick={handleSignIn}>sign in</button>
            <div>{IsAdmin ? (
                //path = '/logIn'
                <AdminHome></AdminHome>
            ) :
                (
                    <div>{Isfirst ? (<p></p>) : (<p>אין לך הרשאת גישה</p>)}</div>

                    // <p>אין לך הרשאת גישה</p>
                )}</div>
        </>
    )
};
export default LoginIn;