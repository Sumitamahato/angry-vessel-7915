const express=require("express");
const { connection } = require("./db");
const {route}=require("./router/shop101.router");
const app=express();
const dotenv = require('dotenv')
require('dotenv').config()
app.use(express.json());
app.use(route);









app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("db is connected");
    } catch (error) {
        console.log(error);
        console.log("db is not connected");
    }
    console.log(`http://localhost:${process.env.port}`);
})