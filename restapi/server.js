const express = require('express');
const studentRoutes = require('./src/student/routes')
const app = express();
const port = 3000;


app.use(express.json());


app.get('/', (req, res) => {
    res.send('home route');
})

app.use('/api/v1/students', studentRoutes);



app.listen(port, ()=> {
    console.log(`server started on http://localhost:${port}`)
})
