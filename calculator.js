const express=require("express");
const app= express();
const bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.post("/",function(request,response){
  var num1 = Number(request.body.weight);
  var num2=Number(request.body.height);
  var bmi= num1/num2;
  response.send("your bmi is " + bmi);
});

app.get("/",function(request,response){
  response.sendfile(__dirname + "/index.html");
});

app.listen(3000,function(){
  console.log("executed on port 3000");
});
