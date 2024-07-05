import express from 'express'
import {config} from 'dotenv'
import usersRouter from '../server/Routes/users.routes.js'


const app = express();
const port = 3000;

app.use(express.json());
config();

app.use("/api/users", usersRouter)


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
