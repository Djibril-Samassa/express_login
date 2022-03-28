const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const User = require("./modeles/UserModel");
const ADN = "eyJzwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDi"

app.use(express.json());
app.use(cookieParser())

// Connexion a la base de données
mongoose.connect("mongodb+srv://Djibril:Ds02072001@cluster0.qzfvb.mongodb.net/Express_login?retryWrites=true&w=majority",
    {useNewUrlParser : true,}
    ).then(() =>{console.log("Connected to MangoDB")}
);

app.get("/", (req,res) =>{
    res.send("Base de données de Express Login")
})

app.get("/signup", async(req,res) =>{
    if (req.body.password.length < 6) {
	return res.status(400).json({
	 	message: "Le mot de passe doit faire au moins 8 caractères",
	});
	}

    const hashedPassword = await bcrypt.hash(req.body.password);

    try{
        await User.create({
            email: req.body.email,
            password: hashedPassword,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            surname: req.body.surname,
            dateofbirth: req.body.dateofbirth,
        })
    } catch(err){
        res.status(401).json({
            message: "An error happened"
        })
    }
})

app.listen(8000, ()=>{
    console.log("Listening...")
})
