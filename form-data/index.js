const bodyParser = require("body-parser");
var express = require("express");

var app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res)
{
    res.redirect('/Login');
});

app.get("/Login",function(req,res)
{
    res.render("Login");
});


app.post("/Home",function(req,res)
{
    var email=req.body.email;
    var password=req.body.pswd;
    
    console.log(email);
    console.log(password);
    if(email==="akash.adhikary@gmail.com" && password==="Akash7@#")
    {
        res.render("list");
    }
    else
    {
        res.redirect('/Login');
        //res.render("Login");
    }
        
       
});


// app.get("/akash/:firstname",function(req,res)
// {
//     //res.send("<h1>Hey</h1>");
//     res.render("list");
// });

app.listen(3000,function()
{
    console.log("Listening to port 3000");
});