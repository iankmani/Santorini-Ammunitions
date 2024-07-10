import express from "express";
import { config } from "dotenv";
import usersRouter from "../server/Routes/users.routes.js";
import signupRouter from "../server/Routes/signup.routes.js";
import loginRouter from "../server/Routes/login.routes.js";
import bookingRouter from '../server/Routes/booking.routes.js'
import cors from "cors";

const app = express();
const port = 3000;
config();

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
// app.use(cors({
//     origin: 'http://localhost:5174/Contact'
// }));
// app.use(cors({
//     origin: 'http://localhost:3000/api/forms/apply',
//     methods: ['GET', 'POST', 'PATCH', 'DELETE']
// }));
// app.use(express.urlencoded({extended: true}))

app.use("/api/forms", usersRouter);
app.use("/api/users", signupRouter);
app.use("/api/users", loginRouter);
app.use("/api/users", bookingRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
