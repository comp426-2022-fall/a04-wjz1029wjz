#!/usr/bin/env node
//3

import {roll} from "./lib/roll.js";
import express from "express";
import minimist from "minimist";

const app = express();
//app.use(express.urlencoded({ extended: true }));
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;


//3
app.get('/app/', (req, res) => {
    res.send("200 OK");
});

//4
app.get('/app/roll', (req, res, next) => {
    res.send(roll(6,2,1));
    res.end();
})

//5
app.get('/app/roll/:sides', (req, res, next) => {
    res.send(roll(parseInt(req.params.sides), 2, 1));
    res.end();
})

//6
app.get('/app/roll/:sides/:dice', (req, res, next) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1));
    res.end();
})

//7
app.use('/app/roll/:sides/:dice/:rolls', (req, res, next) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)));
    res.end();
})

app.use('/app/roll', (req, res, next) => {
    var sidesnum = req.params.sides ? parseInt(req.params.sides) : 6;
    var dicenum = req.params.dice ? parseInt(req.params.dice) : 2;
    var rollnum = req.params.rolls ? parseInt(req.params.rolls) : 1;
    res.send(roll(sidesnum,dicenum,rollnum));
    res.end(); 
})

app.use((req, res, next) => {
    res.status(404).send("404 NOT FOUND");
    res.end();
})

app.listen(port, (err) => {
    console.log("Server port is " + port);
})



