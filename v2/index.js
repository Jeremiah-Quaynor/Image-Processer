const express = require('express')

const app = express()
const port = 3000

const acceptHome = (req,res) => {
    res.send('hello world')
    
}
const acceptFood = (req, res) => {
    res.send('welcome to food')

}

app.get('/',acceptHome)

app.get('/food', acceptFood)




app.listen(port,()=> {
    console.log(`Server start on http://localhost:${port}`)
})