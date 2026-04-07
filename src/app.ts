import express from 'express';
import dotenv from 'dotenv';
import userModel from './models/user.model';
import userRouter from "./routes/user.routes";
 

dotenv.config();

const app = express();
app.use(express.json());

app.get('/api/users', (req, res) => {
  
})

export default app;