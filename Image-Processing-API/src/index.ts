const path = require('path');
const express = require('express');
const fs = require('fs');
const sharp = require('sharp')

const port = 3000;
const app = express();


// enabling body parser
app.use(express.json());
// app.use(express.urlencoded({ extended:false}))
// app.use(express.static('public'));

let data: string[] ; 

async function resizeImage (filename:string, width:number, height:number) {
        await sharp(`src/assets/full/${filename}.jpg`)
        .resize(width,height)
        .toFile(`src/assets/thumb/${filename}-resized.jpg`);
}




app.get('/api/images', (req: any,res: { send: (arg0: string) => void; sendFile: (arg0: string) => void; })=>{
    console.log(req.query)
    if (Object.keys(req.query).length === 0){
        res.send("Please enter a filename and a size")
        return 
    }else {
        let filename = req.query.filename
        let width = req.query.width
        let height = req.query.height
        resizeImage(filename, parseInt(width), parseInt(height))
        // res.cache(3600)
        res.sendFile(__dirname + `/assets/thumb/${filename}-resized.jpg`)
    }
})



app.listen(port, ()=> {
    console.log(`Sever started on http://localhost:${port}`)
})













// const express = require("express");

// const app = express();
// const port = 3000;

// app.get("/",(_req: any,res: { send: (arg0: string) => void; })=> {
//     res.send("welcome home")
// })


// app.listen(port, ()=> {
//     console.log(`Server started on http://localhost:${port}`)
// })