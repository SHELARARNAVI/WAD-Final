const express=require('express');
const app=express();

app.use(express.static('public'))

app.get("/",function(req,res){
    res.render("index");
});

app.listen(4000,()=>{
    console.log("Server is Started");
})