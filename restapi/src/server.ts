import router from "./students/routes";
import  express  from 'express'

const app = express();

const port = 3000;


app.use(express.json())



app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
    res.send('Home route');
});

app.use('/api/v1/student', router)



app.listen(port, () => {
    console.log(`server started on http://localhost:3000`);
});
