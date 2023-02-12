const express = require('express');
const app = express();

app.get("/", function(req, res){

    res.sendFile (__dirname + '/src/index.html' )

})

app.listen(3000 , function(){

    console.log("servidor rodando")

})
app.get("/login", function(req, res){

    res.sendFile (__dirname + '' )

})
app.get("/cadastro", function(req, res){

    res.sendFile (__dirname + '' )

})


