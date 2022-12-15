const express = require("express");

const app = express();
const port = 3000;

app.get("/",(_req: any,res: { send: (arg0: string) => void; })=> {
    res.send("welcome home")
})


app.listen(port, ()=> {
    console.log(`Server started on http://localhost:${port}`)
})