let express = require('express')
let app= express()
let mongoose= require('mongoose')
let bodyparser= require('body-parser')

app.use(bodyparser.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost:27017/ericfirstdatabase')

//create data schema

let the_schema={
    title:String,
    content:String
}

let the_model=mongoose.model('the_model',the_schema)

app.get("/", function(req, res)
{
   res.sendFile(__dirname+"/test.html")
})

app.post('/',function(req, res)
{
    let newmodel= new the_model({
        title:req.body.name,
        content:req.body.email
    })
    console.log(newmodel.toJSON())
    newmodel.save()
    res.redirect('/')

}) 


app.listen(3000,function()
{
    console.log('server is running on 3000')
})