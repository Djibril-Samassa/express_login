import React from "react";
import "../App.css"

export default function Login(){
    return <>
    <h1>Se Connecter</h1>
    <form className="formulaire">
        <input type="text" name="email" class="form_input" placeholder="email"></input>
        <input type="text" name="password" class="form_input" placeholder="password"></input>
        <button type="submit" class="form_input">Se Connecter</button>
    </form>
    </>
}