const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();



const port = process.env.PORT || 5000;


app.get('/train.csv',(req,res)=>{

    try{
        const file = `${__dirname}/train.csv`;
        const data = fs.readFileSync(file);
        res.attachment('train.csv').send(data);
    }
    catch(err){
        console.log(err);
    }finally{
        console.log('test')
    }
})


app.get('/mlrun.pdf',(req,res)=>{
    try{
        const file = `${__dirname}/mlruncode.pdf`;
        const data = fs.readFileSync(file);
        res.attachment('mlruncode.pdf').send(data);
    }
    catch(err){
        console.log(err);
    }finally{
        console.log('Done')
    }
})


app.get('/template.csv',(req,res)=>{
    try{
        const file = `${__dirname}/template.csv`;
        const data = fs.readFileSync(file);
        res.attachment('template.csv').send(data);
    }
    catch(err){
        console.log(err);
    }finally{
        console.log('Done')
    }
})

app.listen(port,()=>{
    console.log('Listening on port '+port);
})