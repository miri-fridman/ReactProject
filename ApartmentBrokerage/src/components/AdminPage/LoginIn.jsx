import React, { useState } from "react";
import axios from "axios";
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
    // async function checkPassword(name, password) {
    //     try {
    //         const response = await fetch('http://localhost:8787/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ "name": name, "password": password })
    //         });

    //         if (response.status === 200) {
    //             SetIsAdmin(true);
    //             return 'OK';

    //         } else {
    //             SetIsAdmin(false);
    //             return false;
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         return false;
    //     }
    // }
    //const axios = require('axios');
    async function checkPassword(name, password) {
            try {
            const res = await axios.post('http://localhost:8787/login', { name, password });
            console.log(res);
            if (res.status === 200) {
                SetIsAdmin(true);
                return 'OK';
            } else {
                console.log(res.status);
                SetIsAdmin(false);
                return 'failed';
            }
    
        } catch (error) {
            console.log(error);
            SetIsAdmin(false);
            if (error.response.status === 401)
                console.log(401)
            return 'failed';
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