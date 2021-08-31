const express=require("express")//Initialzie the express server
const bodyParser=require("body-parser")//Body parser to get data from html page
const date=require(__dirname+"/date.js");
const app= express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"));
app.set('view engine', 'ejs');//To use extended javascript library.
const tasks=["Buy Food","Cook Food","Eat food"];//Array to hold all the tasks to be done in a day at home
const work=[];//Array to hold all the task to be done in a day at work

app.get("/",function(req,res)//For home route to send data from server to the browser
{  
    const dayT=date.getDay();
    res.render("list", {dayType:dayT ,newTask:tasks});
})
app.get("/work",function(req,res)//For work route to send data from server to the browser
{
    res.render("list", {dayType:"Work" ,newTask:work});
})
app.post("/",function(req,res)//To post data from the browser to the server
{
    const task=req.body.newTask;
    const eat=req.body.button;
    if(eat==="Work")
    {
        work.push(task);
        res.redirect("/work");
    }
    else
    {
        tasks.push(task);
        res.redirect("/");
    }
})
app.get("/about",function(req,res){//For abote route to send data from server to the browser
    res.render("about");
})
app.listen(3000,function(req,res)//App will listen to these port
{
    console.log("Server is listining on port 3000.");
})