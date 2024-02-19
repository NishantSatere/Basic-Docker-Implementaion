const express = require('express')

const app = express()

const PORT = process.env.PORT || 8000
app.get('/',(req,res)=>{
    res.send("Hello from container")
})
app.listen(8000,()=>{
    console.log('Running on port 8000')
})