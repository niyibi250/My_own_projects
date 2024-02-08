let express = require('express')
let bodyparser= require('body-parser')

let app= express()
app.use(bodyparser.json())
app.get('/', function(req,res)
{
    res.sendFile(__dirname+'/test.html')
})

app.post('/', function(req, res)
{
    res.end(JSON.stringify(req.body.name))


})

app.listen(3000,()=>
{
    console.log('app is listerning on 3000 port')
})