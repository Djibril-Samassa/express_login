import React from "react";
import "../App.css"

export default function Signup(){
    return <>
    <h1>S'inscrire</h1>
    <form className="formulaire">
        <input type="text" name="name" placeholder="FirstName" class="form_input"></input>
        <input type="text" name="LastName" placeholder="LastName" class="form_input"></input>
        <input type="text" name="email" placeholder="email" class="form_input"></input>
        <input type="text" name="password" placeholder="password" class="form_input"></input>
        <input type="text" name="confirmpassword" placeholder="confirm password" class="form_input"></input>
        <input type="text" name="surname" placeholder="surname" class="form_input"></input>
        <input type="date" name="dateofbirth" class="form_input" ></input>        
        <button type="submit" class="form_input">S'inscrire</button>
    </form>
    </>
}