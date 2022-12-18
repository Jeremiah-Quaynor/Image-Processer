const path = require('path');
const express = require('express');
const port = 3000;
import ApiImage from "./utilities/imageUtil";

const app = express();


// enabling body parser
app.use(express.json());
app.use(express.urlencoded({ extended:false}))
app.use(express.static('public'));



app.use('/api',(_req: any,res: { send: (arg0: string) => void; })=> {
    res.send("home route")
})

app.use('/image', ApiImage)


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